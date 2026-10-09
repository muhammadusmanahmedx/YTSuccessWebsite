'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export default function ServicesCta() {
  return (
    <section className="relative pb-24 pt-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/30 bg-gradient-to-br from-primary via-[#c4141a] to-[#1a0808] px-8 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,176,32,0.2),transparent_35%)]" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Ready to grow your channel?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Download the app to place orders, or learn more about the team
              behind {site.yearsInBusiness}+ years of YouTube growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                render={<Link href={site.playStoreUrl} />}
                className="h-12 cursor-pointer rounded-full bg-white px-7 text-base font-semibold text-primary hover:bg-white/90"
              >
                Download app
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/about" />}
                variant="outline"
                className="h-12 cursor-pointer rounded-full border-white/40 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10"
              >
                Our story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
