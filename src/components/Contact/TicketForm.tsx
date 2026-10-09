'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Mail, Phone, Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const helpOptions = [
  'Order query',
  'Complaint',
  'Watch time / subs',
  'Monetization',
  'Buy / sell channel',
  'Other',
] as const

type Channel = 'whatsapp' | 'email'

export default function TicketForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [selected, setSelected] = useState<string[]>(['Order query'])
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusText, setStatusText] = useState('')
  const [loadingChannel, setLoadingChannel] = useState<Channel | null>(null)

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    )
  }

  const onSubmit = async (e: FormEvent, channel: Channel) => {
    e.preventDefault()
    if (loadingChannel) return

    const topics = selected.length ? selected.join(', ') : 'General'
    setLoadingChannel(channel)
    setStatus('idle')
    setStatusText('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          topics,
          channel: channel === 'whatsapp' ? 'both' : 'email',
        }),
      })

      const data = (await res.json()) as {
        ok?: boolean
        error?: string
        warning?: string
        whatsappUrl?: string
        mailtoUrl?: string
        emailSent?: boolean
      }

      if (!res.ok) {
        setStatus('error')
        setStatusText(data.error || 'Could not send. Please try again.')
        if (channel === 'whatsapp' && data.whatsappUrl) {
          window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer')
        }
        return
      }

      if (channel === 'whatsapp' && data.whatsappUrl) {
        window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer')
      }

      // Email-only: never open WhatsApp — open mail client only if server couldn't SMTP
      if (channel === 'email' && !data.emailSent && data.mailtoUrl) {
        window.location.href = data.mailtoUrl
      }

      setStatus('success')
      if (channel === 'email') {
        setStatusText(
          data.emailSent
            ? `Ticket sent to ${site.email}. We will reply to ${email}.`
            : data.warning ||
              `Opening your email app addressed to ${site.email}. Press Send to deliver.`,
        )
      } else {
        setStatusText(
          data.emailSent
            ? 'Opening WhatsApp with your ticket. A copy was also emailed to our team.'
            : data.warning || 'Opening WhatsApp with your ticket.',
        )
      }

      setName('')
      setEmail('')
      setMessage('')
      setSelected(['Order query'])
    } catch {
      setStatus('error')
      setStatusText('Network error. Check your connection and try again.')
    } finally {
      setLoadingChannel(null)
    }
  }

  return (
    <section id="ticket" className="scroll-mt-28 pb-20 lg:pb-28">
      <div className="container">
        <div className="surface-box-lg overflow-hidden border-white/10 bg-card/40">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <Image
                    src="/brand/icon.png"
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 rounded-lg"
                  />
                  <span className="font-heading text-lg font-semibold text-white">
                    {site.name}
                  </span>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-primary">
                      <MessageCircle className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-white">
                        Chat to us
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        +92 333 0537972 — quotes and order help.
                      </p>
                      <Link
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        WhatsApp chat
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-primary">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-white">
                        Email support
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Tickets are delivered to our inbox.
                      </p>
                      <a
                        href={site.mailtoUrl}
                        className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-primary">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-white">
                        Place queries & complaints
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Submit the form — we receive it on WhatsApp and email.
                      </p>
                      <p className="mt-2 text-sm font-semibold text-amber">
                        Typically within a few business hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-xs text-muted-foreground">
                Existing customers: open a support ticket in the mobile app for
                order-linked help with screenshots.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary via-[#d4151c] to-[#8a0e12] p-8 text-white md:p-10 lg:p-12">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Got a query or complaint? We&apos;re here.
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Tell us what happened — WhatsApp opens with your details, and our
                team also gets an email copy.
              </p>

              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => onSubmit(e, 'whatsapp')}
              >
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full border-0 border-b border-white/40 bg-transparent py-3 text-white outline-none placeholder:text-white/55 focus:border-white"
                    required
                    disabled={!!loadingChannel}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full border-0 border-b border-white/40 bg-transparent py-3 text-white outline-none placeholder:text-white/55 focus:border-white"
                    required
                    disabled={!!loadingChannel}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your query or complaint..."
                    rows={3}
                    className="w-full resize-none border-0 border-b border-white/40 bg-transparent py-3 text-white outline-none placeholder:text-white/55 focus:border-white"
                    required
                    minLength={10}
                    disabled={!!loadingChannel}
                  />
                </label>

                <div>
                  <p className="mb-3 text-sm font-medium text-white/90">
                    How can we help?
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {helpOptions.map((option) => {
                      const checked = selected.includes(option)
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleOption(option)}
                          disabled={!!loadingChannel}
                          className="flex items-center gap-2.5 text-left text-sm text-white/90 disabled:opacity-60"
                        >
                          <span
                            className={cn(
                              'grid size-5 place-items-center rounded border transition',
                              checked
                                ? 'border-white bg-white text-primary'
                                : 'border-white/50 bg-transparent',
                            )}
                          >
                            {checked ? (
                              <Check className="size-3.5 stroke-[3]" />
                            ) : null}
                          </span>
                          {option}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {statusText ? (
                  <p
                    className={cn(
                      'rounded-xl px-3 py-2 text-sm',
                      status === 'error'
                        ? 'bg-black/30 text-amber-100'
                        : 'bg-black/25 text-white',
                    )}
                    role="status"
                  >
                    {statusText}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button
                    type="submit"
                    disabled={!!loadingChannel}
                    className="h-12 flex-1 cursor-pointer rounded-xl bg-[#0b0707] text-base font-semibold text-white hover:bg-black disabled:opacity-70"
                  >
                    {loadingChannel === 'whatsapp' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send on WhatsApp'
                    )}
                  </Button>
                  <Button
                    type="button"
                    disabled={!!loadingChannel}
                    onClick={(e) => onSubmit(e, 'email')}
                    variant="outline"
                    className="h-12 flex-1 cursor-pointer rounded-xl border-white/40 bg-transparent text-base font-semibold text-white hover:bg-white/10 disabled:opacity-70"
                  >
                    {loadingChannel === 'email' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send by email'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
