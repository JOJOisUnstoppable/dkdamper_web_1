import { Inter } from 'next/font/google'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({ children, params }) {
  const locale = await getLocale()

  // 如果请求的语言不存在，显示404
  if (params.locale !== locale) {
    notFound()
  }

  // 加载语言文件
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}