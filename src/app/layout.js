import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingInquiry from '@/components/common/FloatingInquiry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'B2B Solutions',
  description: '专业的B2B解决方案提供商',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingInquiry />
      </body>
    </html>
  )
}
