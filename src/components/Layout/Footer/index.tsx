'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { headerData } from '../Header/Navigation/menuData'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { Separator } from '@/components/ui/separator'
import { site } from '@/lib/site'

const Footer: FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#070304]/90 pt-16 backdrop-blur-sm">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Logo />
            <p className="max-w-md text-[15px] leading-relaxed text-white/55">
              {site.tagline} Watch time, subscribers, monetization, and channel
              marketplace — seven years of YouTube growth, now in one mobile app.
            </p>
            <Link
              href={site.mailtoUrl}
              className="inline-flex w-fit items-center gap-2 text-white/70 transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Icon icon="mdi:email-outline" width={22} height={22} />
              <span className="text-sm">{site.email}</span>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 font-heading text-lg font-medium text-white">
              Navigate
            </h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/55 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 font-heading text-lg font-medium text-white">
              Services
            </h4>
            <ul className="space-y-3 text-[15px] text-white/55">
              <li>
                <Link href="/services#watch-time" className="hover:text-primary">
                  Watch time
                </Link>
              </li>
              <li>
                <Link href="/services#subscribers" className="hover:text-primary">
                  Subscribers
                </Link>
              </li>
              <li>
                <Link href="/services#monetization" className="hover:text-primary">
                  Monetization
                </Link>
              </li>
              <li>
                <Link href="/services#buy-channel" className="hover:text-primary">
                  Buy / sell channels
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 font-heading text-lg font-medium text-white">
              Get the app
            </h4>
            <p className="mb-4 text-[15px] text-white/55">
              Order services, manage your wallet, and track delivery from the YT
              Success Studio app.
            </p>
            <Link
              href={site.playStoreUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/85"
            >
              <Icon icon="mdi:google-play" width={20} height={20} />
              Download on Google Play
            </Link>
          </div>
        </div>

        <Separator className="bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-white/30">YouTube growth, delivered.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
