'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import PhoneMockup from '@/components/Common/PhoneMockup'
import { site } from '@/lib/site'

const features = [
  'Order watch time, subscribers & monetization',
  'Wallet top-ups via card, JazzCash, EasyPaisa & Binance',
  'Track order status and open support tickets',
  'Channel marketplace — buy & sell verified listings',
]

export default function AppPromo() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 flex justify-center gap-4 lg:order-1 lg:justify-start"
          >
            <PhoneMockup
              label="Home screen"
              imageSrc="/images/mockups/app-home.png"
              bare
              float
            />
            <div className="relative z-10 -ml-20 hidden pt-16 sm:block md:-ml-14">
              <PhoneMockup
                label="Orders"
                imageSrc="/images/mockups/app-orders.png"
                bare
                className="w-[200px] opacity-90 sm:w-[220px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Mobile app
            </p>
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Growth ops in your pocket
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The {site.name} app is how customers order services, fund wallets,
              and stay close to support — the same brand you trust, productized.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="mt-0.5 shrink-0 text-success"
                    width={20}
                    height={20}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.playStoreUrl}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/85"
              >
                <Icon icon="mdi:google-play" width={20} height={20} />
                Download on Google Play
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary/40 hover:bg-primary/10"
              >
                Browse services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
