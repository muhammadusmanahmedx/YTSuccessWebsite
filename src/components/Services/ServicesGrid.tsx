'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import ServiceIcon from '@/components/Common/ServiceIcon'
import { services, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export default function ServicesGrid() {
  return (
    <section id="our-services" className="relative scroll-mt-24 py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Comprehensive growth,{' '}
            <span className="text-primary">all in one place</span>
          </h2>
          <p className="max-w-md text-muted-foreground lg:text-right">
            Pick a service, order in the {site.name} app, and track delivery with
            real support behind every package.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const featured = i === 2
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={cn(
                  'group relative flex h-full scroll-mt-28 flex-col rounded-3xl border p-7 transition duration-300',
                  featured
                    ? 'border-primary/40 bg-primary text-white shadow-xl shadow-primary/20'
                    : 'border-white/10 bg-card/60 hover:-translate-y-1 hover:border-primary/35 hover:bg-card',
                )}
              >
                <div
                  className={cn(
                    'mb-5 flex size-12 items-center justify-center rounded-2xl',
                    featured
                      ? 'bg-white/15'
                      : 'bg-primary/10 ring-1 ring-primary/20',
                  )}
                >
                  <ServiceIcon
                    name={service.icon}
                    className={featured ? 'text-white' : 'text-primary'}
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  {service.name}
                </h3>
                <p
                  className={cn(
                    'mt-1 text-sm font-medium',
                    featured ? 'text-white/80' : 'text-amber',
                  )}
                >
                  {service.short}
                </p>
                <p
                  className={cn(
                    'mt-4 flex-1 text-sm leading-relaxed',
                    featured ? 'text-white/75' : 'text-muted-foreground',
                  )}
                >
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <Link
                    href={site.playStoreUrl}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                      featured
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-primary text-white hover:bg-primary/85',
                    )}
                  >
                    Order in app
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <span
                    className={cn(
                      'grid size-9 place-items-center rounded-full border transition',
                      featured
                        ? 'border-white/30 text-white'
                        : 'border-white/15 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary',
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
