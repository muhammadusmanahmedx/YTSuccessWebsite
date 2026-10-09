'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'

export default function JourneyTeaser() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container">
        <div className="surface-box-lg overflow-hidden bg-gradient-to-br from-primary/15 via-card/70 to-[#0b0707] p-8 md:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Our journey
              </p>
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                {site.yearsInBusiness} years of shipping YouTube growth
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
                From a hands-on growth operation to a full product — mobile app,
                wallet, support, and channel marketplace. We expanded our domain
                recently so customers can order, track, and scale in one place.
              </p>
              <Button
                render={<Link href="/about" />}
                className="mt-8 h-11 cursor-pointer rounded-full bg-primary px-6 font-semibold text-white hover:bg-primary/85"
              >
                Read our story
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: `${site.yearsInBusiness}+`, label: 'Years active' },
                { value: '3', label: 'Core growth services' },
                { value: 'App', label: 'Mobile ordering live' },
                { value: 'App', label: 'Orders & tickets' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-black/30 p-5 backdrop-blur-sm"
                >
                  <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
