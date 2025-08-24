import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// 需要先安装依赖: npm install @formatjs/intl-localematcher
import { match as matchLocale } from '@formatjs/intl-localematcher'
// 需要先安装依赖: npm install negotiator @types/negotiator
import Negotiator from 'negotiator'

const locales = ['en', 'pl', 'es', 'de']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locale = matchLocale(languages, locales, defaultLocale)
  
  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 特殊处理 sitemap.xml 请求
  if (pathname === '/sitemap.xml') {
    const locale = getLocale(request)
    return NextResponse.rewrite(
      new URL(`/${locale}/api/sitemap`, request.url)
    )
  }
  
  // 排除已经包含 sitemap.xml 的路径
  if (pathname.includes('sitemap.xml')) {
    return NextResponse.next()
  }
  
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}