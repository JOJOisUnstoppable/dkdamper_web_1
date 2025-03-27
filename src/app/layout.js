import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enterprise Solutions - Professional B2B Services',
  description: 'Leading provider of enterprise B2B solutions and digital transformation services.',
  keywords: 'B2B Solutions, Enterprise Services, Digital Transformation, Business Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="-mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
