'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PhoneMockup from '@/components/Common/PhoneMockup'
import { site } from '@/lib/site'

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-20 lg:pt-40">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Custom growth for every channel
              </span>
              <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                YouTube growth{' '}
                <span className="text-primary">services</span> that deliver
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Watch time, subscribers, monetization packages, and channel
                marketplace — order in the app, track delivery, talk to real
                support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  render={<Link href="#our-services" />}
                  className="h-12 cursor-pointer rounded-full bg-primary px-7 text-base font-semibold text-white hover:bg-primary/85"
                >
                  View services
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  render={<Link href={site.playStoreUrl} />}
                  variant="outline"
                  className="h-12 cursor-pointer rounded-full border-white/15 bg-white/5 px-7 text-base font-semibold text-white hover:border-primary/40"
                >
                  Download app
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-3">
                  <PhoneMockup
                    label="App"
                    imageSrc="/images/mockups/app-home.png"
                    bare
                    className="mx-auto w-full max-w-[160px] sm:max-w-[180px]"
                  />
                </div>
                <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/25 to-primary/5 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Experience
                  </p>
                  <p className="mt-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
                    {site.yearsInBusiness}+
                  </p>
                  <p className="mt-1 text-sm text-white/70">Years in growth ops</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-8 sm:gap-4 sm:pt-12">
                <div className="rounded-3xl border border-amber/25 bg-gradient-to-br from-amber/20 to-transparent p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                    SECP
                  </p>
                  <p className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
                    Registered
                  </p>
                  <p className="mt-1 text-sm text-white/70">Formal company</p>
                </div>
                <div className="relative flex flex-1 overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-3">
                  <PhoneMockup
                    label="Orders"
                    imageSrc="/images/mockups/app-orders.png"
                    bare
                    className="mx-auto w-full max-w-[160px] sm:max-w-[180px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
