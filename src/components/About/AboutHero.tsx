'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/brand/icon.png"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-xl"
                priority
              />
              {site.secpRegistered && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
                  <ShieldCheck className="size-3.5" />
                  {site.secpLabel}
                </span>
              )}
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              About {site.name}
            </p>

            <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {site.yearsInBusiness} years of YouTube growth —{' '}
              <span className="gradient-text">now a full product.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We started as a delivery-first growth studio. Today we run services,
              wallet ordering, support, and a channel marketplace from one branded
              app — still built on the same ops discipline that got us here.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                render={<Link href={site.playStoreUrl} />}
                className="h-12 cursor-pointer rounded-full bg-primary px-7 text-base font-semibold text-white hover:bg-primary/85"
              >
                Download app
              </Button>
              <Button
                render={<Link href="/services" />}
                variant="outline"
                className="h-12 cursor-pointer rounded-full border-white/15 bg-white/5 px-7 text-base font-semibold text-white hover:border-primary/40 hover:bg-primary/10"
              >
                Explore services
              </Button>
            </div>

            <div className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: `${site.yearsInBusiness}+`, label: 'Years' },
                { value: 'SECP', label: 'Registered' },
                { value: 'App', label: 'Live product' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-white/10 bg-card/50 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-5"
                >
                  <p className="font-heading text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
