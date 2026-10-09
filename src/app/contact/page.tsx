import type { Metadata } from 'next'
import ContactHero from '@/components/Contact/ContactHero'
import ContactMethodCards from '@/components/Contact/ContactMethodCards'
import TicketForm from '@/components/Contact/TicketForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${site.name} — WhatsApp, email, or place a support ticket for queries and complaints.`,
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMethodCards />
      <TicketForm />
    </main>
  )
}
