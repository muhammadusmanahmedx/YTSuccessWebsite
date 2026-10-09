import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { site } from '@/lib/site'

type ContactBody = {
  name?: string
  email?: string
  message?: string
  topics?: string
  channel?: 'whatsapp' | 'email' | 'both'
}

function buildMessages(input: {
  name: string
  email: string
  message: string
  topics: string
}) {
  const emailBody = [
    'New ticket from the YT Success Studio website',
    '',
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Topics: ${input.topics}`,
    '',
    input.message,
  ].join('\n')

  const whatsappText = [
    `Ticket from ${site.name} website`,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Topics: ${input.topics}`,
    '',
    input.message,
  ].join('\n')

  const to = process.env.CONTACT_EMAIL || site.email
  const subject = `[YT Success Studio Ticket] ${input.topics}`

  return {
    to,
    emailBody,
    subject,
    whatsappUrl: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappText)}`,
    mailtoUrl: `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`,
  }
}

async function sendViaSmtp(payload: {
  to: string
  name: string
  email: string
  subject: string
  emailBody: string
}) {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) return false

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `"YT Success Studio Website" <${user}>`,
    to: payload.to,
    replyTo: payload.email,
    subject: payload.subject,
    text: payload.emailBody,
    html: `<pre style="font-family:sans-serif;white-space:pre-wrap">${payload.emailBody
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')}</pre>`,
  })

  return true
}

async function sendViaFormSubmit(payload: {
  to: string
  name: string
  email: string
  subject: string
  emailBody: string
}) {
  const formData = new FormData()
  formData.append('name', payload.name)
  formData.append('email', payload.email)
  formData.append('message', payload.emailBody)
  formData.append('_subject', payload.subject)
  formData.append('_replyto', payload.email)
  formData.append('_template', 'table')
  formData.append('_captcha', 'false')

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(payload.to)}`,
    {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    },
  )

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(detail || `FormSubmit ${res.status}`)
  }

  return true
}

async function deliverEmail(payload: {
  to: string
  name: string
  email: string
  subject: string
  emailBody: string
}) {
  // Prefer SMTP when configured (reliable)
  try {
    if (await sendViaSmtp(payload)) return { sent: true as const, method: 'smtp' }
  } catch (err) {
    console.error('[contact] SMTP failed:', err)
  }

  // Fallback provider
  try {
    await sendViaFormSubmit(payload)
    return { sent: true as const, method: 'formsubmit' }
  } catch (err) {
    console.error('[contact] FormSubmit failed:', err)
  }

  return { sent: false as const, method: 'none' }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactBody
    const name = String(data.name ?? '').trim()
    const email = String(data.email ?? '').trim()
    const message = String(data.message ?? '').trim()
    const topics = String(data.topics ?? 'General').trim() || 'General'
    const channel = data.channel ?? 'both'

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email.' }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Please add a bit more detail (at least 10 characters).' },
        { status: 400 },
      )
    }

    const { to, emailBody, subject, whatsappUrl, mailtoUrl } = buildMessages({
      name,
      email,
      message,
      topics,
    })

    // Email-only: deliver to inbox (no WhatsApp)
    if (channel === 'email') {
      const result = await deliverEmail({ to, name, email, subject, emailBody })

      if (result.sent) {
        return NextResponse.json({
          ok: true,
          emailSent: true,
          method: result.method,
        })
      }

      // Last resort so the ticket still reaches the inbox via the user's mail app
      return NextResponse.json({
        ok: true,
        emailSent: false,
        mailtoUrl,
        warning:
          'Opening your email app to send the ticket. For automatic delivery, add SMTP credentials in .env.local.',
      })
    }

    // WhatsApp (+ optional email copy)
    let emailSent = false
    try {
      const result = await deliverEmail({ to, name, email, subject, emailBody })
      emailSent = result.sent
    } catch (err) {
      console.error('[contact] background email failed:', err)
    }

    return NextResponse.json({
      ok: true,
      emailSent,
      whatsappUrl,
      warning: emailSent
        ? undefined
        : 'WhatsApp is ready. Email copy could not be delivered automatically.',
    })
  } catch (error) {
    console.error('[contact]', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
