'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/lib/site'
import ServiceIcon from '@/components/Common/ServiceIcon'
import { Button } from '@/components/ui/button'

export default function ServicesPreview() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Services
          </p>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Everything your channel needs to grow
          </h2>
          <p className="mt-4 text-muted-foreground">
            From qualifying watch hours to marketplace deals — built for
            operators who ship results.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={`/services#${service.id}`}
                className="surface-box group flex h-full flex-col gap-4 bg-gradient-to-br from-primary/5 via-card/70 to-transparent p-6 transition duration-300 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition group-hover:bg-primary/15">
                  <ServiceIcon name={service.icon} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-amber">{service.short}</p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            render={<Link href="/services" />}
            className="h-11 cursor-pointer rounded-full bg-primary px-6 font-semibold text-white hover:bg-primary/85"
          >
            View all services
          </Button>
        </div>
      </div>
    </section>
  )
}
