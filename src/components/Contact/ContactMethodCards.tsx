'use client'

import Link from 'next/link'
import { MessageCircle, Headphones, Mail, Ticket } from 'lucide-react'
import { site } from '@/lib/site'

const cards = [
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    description: 'Fastest reply for quotes and live order help.',
    href: site.whatsappUrl,
    action: 'Open WhatsApp',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Send details and we will follow up by email.',
    href: site.mailtoUrl,
    action: site.email,
    external: false,
  },
  {
    icon: Ticket,
    title: 'Place a ticket',
    description: 'Submit queries and complaints with the form below.',
    href: '#ticket',
    action: 'Fill ticket form',
    external: false,
  },
  {
    icon: Headphones,
    title: 'In-app support',
    description: 'Existing customers can open tickets inside the app.',
    href: site.playStoreUrl,
    action: 'Get the app',
    external: false,
  },
]

export default function ContactMethodCards() {
  return (
    <section className="pb-12 lg:pb-16">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.title}
                href={card.href}
                {...(card.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="surface-box group flex flex-col bg-gradient-to-br from-primary/5 via-card/70 to-transparent p-6 transition hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="mb-5 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-background/60 text-primary">
                  <Icon className="size-5" />
                </span>
                <h2 className="font-heading text-lg font-semibold text-white">
                  {card.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                  {card.action}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
