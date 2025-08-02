import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import 'katex/dist/katex.min.css' // 添加这行
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Linear Damper Solutions',
    default: 'Linear Damper Solutions - High-Quality Hydraulic Motion Control'
  },
  description: 'Leading provider of precision linear dampers for industrial and consumer applications. Control motion, reduce vibration, and ensure smooth operations.',
  keywords: 'linear damper, hydraulic damper, motion control, vibration reduction, industrial dampers',
  authors: [{ name: 'Linear Damper Team' }],
  creator: 'Linear Damper Solutions',
  publisher: 'Linear Damper Solutions',
  metadataBase: new URL('https://www.lineardamper.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lineardamper.com',
    siteName: 'Linear Damper Solutions',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Linear Damper Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lineardamper',
    creator: '@lineardamper'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // 基础图标
    shortcut: '/favicon.ico', // 高分辨率图标（用于搜索结果）
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <GoogleAnalytics trackingId="G-0NDVSEHYGN" /> {/* google analytics 追踪代码*/}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
