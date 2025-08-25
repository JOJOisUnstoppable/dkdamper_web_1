import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 使用正确的配置文件
import { locales, defaultLocale } from '@/lib/i18n/config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locale = matchLocale(languages, locales, defaultLocale)
  
  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 特殊处理 sitemap.xml 请求 - 直接重写到现有的 API 路由
  if (pathname === '/sitemap.xml') {
    return NextResponse.rewrite(
      new URL('/api/sitemap', request.url)
    )
  }
  
  // 排除静态资源和 API 路由
  if (pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/static') ||
      pathname.includes('.') ||
      pathname.startsWith('/images/') ||
      pathname.startsWith('/videos/') ||
      pathname === '/robots.txt' ||
      pathname === '/favicon.ico') {
    return
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
    '/((?!api|_next/static|_next/image|favicon.ico|images|videos|robots.txt).*)',
  ],
}