import { getDictionary } from '@/lib/i18n/getDictionary'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import 'katex/dist/katex.min.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import SchemaTag from '@/components/common/SchemaTag'
import { generateWebsiteSchema } from '@/lib/schemaHelpers'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.locale)
  
  // 全局 Schema 数据
  const websiteSchema = generateWebsiteSchema({
    baseUrl: 'https://lineardamper.com',
    siteName: 'DK Machinery - Linear Damper Solutions',
    description: 'Professional linear damper manufacturer with 26 years of experience',
    orgName: 'DK Machinery Co., Ltd',
    logoPath: '/logo.png',
    phone: '+86-XXX-XXXXXXX',
    languages: ['English', 'Chinese', 'German', 'Dutch', 'French'],
    socialLinks: [
      'https://linkedin.com/company/dkmachinery',
      'https://facebook.com/dkmachinery'
    ]
  })
  
  return (
    <html lang={params.locale} className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <GoogleAnalytics trackingId="G-0NDVSEHYGN" />
        <SchemaTag data={websiteSchema} />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}