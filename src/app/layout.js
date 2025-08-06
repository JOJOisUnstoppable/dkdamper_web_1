import { Inter } from 'next/font/google'
import './globals.css'
import 'katex/dist/katex.min.css'

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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

// 根布局只提供基础的 HTML 结构和全局样式
export default function RootLayout({ children }) {
  return (
    <html className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
