import { NextResponse, type NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from '@/lib/i18n-config'

const activeLocales: readonly string[] = i18n.activeLocales

// Locales with reserved routes but no launch content (th / vi / zh).
const inactiveLocales: readonly string[] = i18n.locales.filter(
  (locale) => !activeLocales.includes(locale),
)

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  const languages = new Negotiator({ headers }).languages()

  try {
    return match(languages, activeLocales, i18n.defaultLocale)
  } catch {
    // Malformed Accept-Language values can throw inside Intl — fall back.
    return i18n.defaultLocale
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if there is any supported (active) locale in the pathname
  const pathnameHasLocale = activeLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Inactive locales (th / vi / zh) redirect to the default locale equivalent
  const inactiveLocale = inactiveLocales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (inactiveLocale) {
    const rest = pathname.slice(`/${inactiveLocale}`.length)
    request.nextUrl.pathname = `/${i18n.defaultLocale}${rest}`
    return NextResponse.redirect(request.nextUrl)
  }

  // Redirect if there is no locale, e.g. / -> /en, /about -> /en/about
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|fonts|.*\\..*).*)'],
}
