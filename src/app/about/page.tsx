import type { Metadata } from 'next'
import Link from 'next/link'
import AboutHero from '@/components/About/AboutHero'
import CeoSection from '@/components/About/CeoSection'
import TeamSection from '@/components/About/TeamSection'
import PathToResilienceOrbitalTimeline from '@/components/ui/path-to-resilience-orbital-timeline'
import { journey, site } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: `The ${site.name} journey — ${site.yearsInBusiness} years of YouTube growth. SECP-registered company led by ${site.ceo.name}.`,
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section className="pb-16 lg:pb-20">
        <div className="container max-w-3xl">
          <div className="surface-box bg-gradient-to-br from-primary/10 via-card/70 to-transparent p-8 leading-relaxed text-muted-foreground md:p-10">
            <p className="text-lg text-white/85">
              We started as a delivery-first YouTube growth studio. Clients came
              for watch hours and subscribers; they stayed because fulfillment
              was consistent and support was real.
            </p>
            <p className="mt-4">
              Over the years we refined monetization packages, multi-channel
              ordering, and operator workflows. Recently we launched and expanded
              our domain: a mobile app with wallet payments, order tracking,
              tickets, and a verified channel marketplace for buy and sell.
            </p>
            <p className="mt-4">
              Today {site.name} is both a service brand and a product — the same
              team behind seven years of growth, now available in your pocket.
            </p>
          </div>

          <h2 className="mb-8 mt-14 text-center font-heading text-3xl font-semibold text-white">
            Our journey
          </h2>
          <ol className="relative space-y-0 border-l border-primary/30 pl-8">
            {journey.map((step) => (
              <li key={step.year} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.45rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber">
                  {step.year}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/services" />}
              className="h-11 cursor-pointer rounded-full bg-primary px-6 font-semibold text-white hover:bg-primary/85"
            >
              Explore services
            </Button>
            <Button
              render={<Link href={site.playStoreUrl} />}
              variant="outline"
              className="h-11 cursor-pointer rounded-full border-white/15 px-6 font-semibold text-white hover:border-primary/40"
            >
              Download app
            </Button>
          </div>
        </div>
      </section>

      <CeoSection />

      <TeamSection />

      <PathToResilienceOrbitalTimeline />

      <section className="pb-24">
        <div className="container">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-success/25 bg-success/5 px-6 py-10 text-center sm:px-10">
            <ShieldCheck className="size-8 text-success" />
            <h2 className="font-heading text-2xl font-semibold text-white">
              {site.secpLabel}
            </h2>
            <p className="max-w-lg text-muted-foreground">
              {site.name} is registered with the Securities and Exchange
              Commission of Pakistan (SECP) — a formally incorporated business
              you can trust.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Button
                render={<Link href={site.playStoreUrl} />}
                className="h-11 cursor-pointer rounded-full bg-primary px-6 font-semibold text-white hover:bg-primary/85"
              >
                Download app
              </Button>
              <Button
                render={<Link href="/services" />}
                variant="outline"
                className="h-11 cursor-pointer rounded-full border-white/15 px-6 font-semibold text-white"
              >
                View services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
