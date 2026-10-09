'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

const Hero = () => {
  return (
    <section className="relative z-1 overflow-x-clip pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44">
      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
          <motion.div
            initial={{ x: -48, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center gap-8 text-center lg:items-start lg:text-left"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Badge
                  variant="outline"
                  className="h-9 rounded-full border-white/10 bg-primary/10 px-4 text-sm font-medium text-primary"
                >
                  {site.yearsInBusiness}+ years in YouTube growth
                </Badge>
              </div>

              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-amber">
                {site.name}
              </p>

              <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4.25rem]">
                YouTube growth,{' '}
                <span className="gradient-text">delivered.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Watch time, subscribers, monetization packages, and channel
                marketplace — order everything from the {site.name} mobile app.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                render={<Link href={site.playStoreUrl} />}
                className="h-12 cursor-pointer rounded-full bg-primary px-7 text-base font-semibold text-white hover:bg-primary/85"
              >
                Download app
              </Button>
              <Button
                render={<Link href="/services" />}
                variant="outline"
                className="h-12 cursor-pointer rounded-full border-white/15 bg-white/5 px-7 text-base font-semibold text-white hover:border-primary/50 hover:bg-primary/10"
              >
                Explore services
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-success" />
                App ordering & wallet
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber" />
                Verified channel deals
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                Real support tickets
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 48, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 -z-10 translate-x-10 scale-90 rounded-full bg-[radial-gradient(circle,rgba(245,32,39,0.35),transparent_65%)] blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[720px] lg:max-w-[820px] lg:translate-x-12 lg:scale-[1.2] lg:origin-right xl:max-w-[900px] xl:translate-x-20 xl:scale-[1.28]"
            >
              <Image
                src="/images/mockups/hero-showcase.png"
                alt="YT Success Studio mobile app — home, watch time orders, and monetization"
                width={1600}
                height={1200}
                className="h-auto w-full drop-shadow-[0_50px_100px_rgba(245,32,39,0.32)]"
                priority
                sizes="(max-width: 1024px) 95vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
