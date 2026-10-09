'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export default function ContactCta() {
  return (
    <section className="relative pb-24 pt-8 lg:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-box-lg relative overflow-hidden border-primary/25 bg-gradient-to-r from-primary/25 via-card/80 to-amber/10 px-8 py-14 text-center md:px-16"
        >
          <div className="pointer-events-none absolute -left-10 top-0 size-48 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="relative font-heading text-3xl font-semibold text-white sm:text-4xl">
            Ready to grow your channel?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Download the {site.name} app to order services, manage your wallet,
            and track delivery — or browse what we offer first.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              render={<Link href={site.playStoreUrl} />}
              className="h-12 cursor-pointer rounded-full bg-primary px-7 text-base font-semibold text-white hover:bg-primary/85"
            >
              Download app
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/services" />}
              variant="outline"
              className="h-12 cursor-pointer rounded-full border-white/15 bg-black/20 px-7 text-base font-semibold text-white hover:border-amber/40 hover:bg-amber/10"
            >
              View services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
