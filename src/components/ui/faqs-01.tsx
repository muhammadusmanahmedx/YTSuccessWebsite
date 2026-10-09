'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { faqs, site } from '@/lib/site'

export default function Faqs01({ defaultValue }: { defaultValue?: string }) {
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-sm shadow-primary/10">
            <Sparkles className="size-3 text-amber" />
            FAQ
          </span>
          <h2
            className="font-heading text-balance font-semibold tracking-tight text-white"
            style={{
              fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
            }}
          >
            Frequently asked questions
          </h2>
          <p className="max-w-xl text-balance text-muted-foreground">
            Quick answers about our services and app. Can&apos;t find yours?
            Write to{' '}
            <a
              href={site.mailtoUrl}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 rounded-2xl border border-white/8 bg-card/40 px-5 sm:px-6"
          defaultValue={defaultValue}
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="font-heading text-base text-white hover:no-underline hover:text-primary data-[state=open]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <MessageCircle className="size-4" />
            </span>
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-medium text-foreground">
                Prefer ordering in-app?
              </p>
              <p className="text-xs text-muted-foreground">
                Download the app to place orders and open support tickets.
              </p>
            </div>
          </div>
          <Button
            render={<Link href={site.playStoreUrl} />}
            size="sm"
            className="cursor-pointer rounded-full bg-primary px-4 text-white hover:bg-primary/85"
          >
            Download app
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
