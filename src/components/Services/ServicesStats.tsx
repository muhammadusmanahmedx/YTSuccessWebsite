'use client'

import { motion } from 'framer-motion'
import { site } from '@/lib/site'

const stats = [
  {
    value: `${site.yearsInBusiness}+`,
    label: 'Years of industry experience',
  },
  { value: '5', label: 'Core growth services' },
  { value: 'App', label: 'Mobile ordering live' },
  { value: 'SECP', label: 'Registered company' },
]

export default function ServicesStats() {
  return (
    <section className="relative py-10 lg:py-14">
      <div className="container">
        <div className="surface-box-lg grid items-center gap-10 bg-gradient-to-br from-primary/10 via-card/60 to-transparent px-6 py-10 md:grid-cols-2 md:px-10 lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Join a growing community of creators and channel operators
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              From single-channel creators to multi-channel networks — we fulfill
              growth packages with tracking and support.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-background/50 p-5"
              >
                <p className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
