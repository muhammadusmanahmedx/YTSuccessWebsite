import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollUp from '@/components/Common/ScrollUp'
import DownloadAppFloat from '@/components/Common/DownloadAppFloat'
import PageAtmosphere from '@/components/Common/PageAtmosphere'
import Aoscompo from '@/utils/aos'
import { site } from '@/lib/site'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['500', '600', '700'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: '/favicon.png',
    apple: '/brand/app-icon.png',
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${sora.variable} ${manrope.variable} relative font-sans`}>
        <PageAtmosphere />
        <Aoscompo>
          <ScrollUp />
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <DownloadAppFloat />
        <ScrollToTop />
      </body>
    </html>
  )
}
