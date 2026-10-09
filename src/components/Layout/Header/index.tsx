'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setNavbarOpen(false)
  }, [pathUrl])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky
          ? 'border-b border-white/5 bg-background/90 py-3 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between px-4">
        <Logo />

        <nav className="hidden grow items-center justify-center gap-8 lg:flex">
          {headerData.map((item, index) => (
            <HeaderLink
              key={index}
              item={item}
              activeHash={activeHash}
              setActiveHash={setActiveHash}
            />
          ))}
        </nav>

        <div className="hidden h-10 items-center gap-3 lg:flex">
          <Button
            render={<Link href={site.playStoreUrl} />}
            size="lg"
            className="h-10 cursor-pointer rounded-full bg-primary px-5 font-medium text-white hover:bg-primary/85"
          >
            Download app
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
          <SheetTrigger
            render={
              <button
                className="block rounded-lg p-2 lg:hidden"
                aria-label="Toggle mobile menu"
              />
            }
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs border-l border-border bg-background p-0"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <Logo />
            </div>
            <nav className="flex flex-col items-start gap-1 p-4">
              {headerData.map((item, index) => (
                <MobileHeaderLink
                  key={index}
                  item={item}
                  activeHash={activeHash}
                  setActiveHash={setActiveHash}
                  onClick={() => setNavbarOpen(false)}
                />
              ))}
              <div className="mt-6 flex w-full flex-col gap-3">
                <Button
                  render={<Link href={site.playStoreUrl} />}
                  size="lg"
                  className="w-full cursor-pointer rounded-full bg-primary text-white"
                >
                  Download app
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  render={<Link href="/services" />}
                  variant="outline"
                  size="lg"
                  className="w-full cursor-pointer rounded-full border-white/15 text-white"
                  onClick={() => setNavbarOpen(false)}
                >
                  Explore services
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
