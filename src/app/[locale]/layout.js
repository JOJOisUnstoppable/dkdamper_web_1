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
  // 先 await params，然后获取 locale
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // 验证 locale 是否为有效的语言代码
  const validLocales = ['en', 'pl', 'es', 'de'];
  const isValidLocale = validLocales.includes(locale);
  
  // 如果不是有效的 locale，直接返回最小化的 HTML（用于错误情况）
  if (!isValidLocale) {
    return (
      <html lang="en" className="overflow-x-hidden">
        <body className={`${inter.className} overflow-x-hidden`}>
          {children}
        </body>
      </html>
    )
  }
  
  // 只有在有效的 locale 下才调用 getDictionary
  const dict = await getDictionary(locale);
  
  // 生成 websiteSchema
  const websiteSchema = generateWebsiteSchema(dict, locale);
  
  return (
    <html lang={locale} className="overflow-x-hidden">
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