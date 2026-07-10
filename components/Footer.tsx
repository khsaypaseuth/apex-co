import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n-config'
import { PARENT_COMPANY } from '@/lib/site-config'

export interface FooterProps {
  lang: Locale
  dict: Dictionary
}

/**
 * Four-column footer: brand + parent company, services, knowledge, contact.
 * Contact details are placeholders, clearly marked via bracketed dictionary
 * strings (e.g. "[Add phone number]") until the owner supplies real details.
 */
export function Footer({ lang, dict }: FooterProps) {
  const serviceLinks = [
    { label: dict.nav.businessSetup, href: `/${lang}/services/business-setup` },
    { label: dict.nav.visaImmigration, href: `/${lang}/services/visa-immigration` },
    { label: dict.nav.legalFamily, href: `/${lang}/services/legal-family` },
    { label: dict.nav.accountingTax, href: `/${lang}/services/accounting-tax` },
  ]

  const knowledgeLinks = [
    { label: dict.nav.knowledge, href: `/${lang}/knowledge` },
    { label: dict.nav.laws, href: `/${lang}/laws` },
    { label: dict.nav.guides, href: `/${lang}/guides` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ]

  const contactRows = [
    { label: dict.footer.phoneLabel, value: dict.footer.phonePlaceholder },
    { label: dict.footer.emailLabel, value: dict.footer.emailPlaceholder },
    { label: dict.footer.chatLabel, value: dict.footer.chatPlaceholder },
  ]

  return (
    <footer className="bg-navy-950 text-ivory-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg tracking-wide">{dict.site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-ivory-100/70">
            {dict.site.tagline}
          </p>
          <p className="mt-3 text-sm text-ivory-100/70">
            {dict.site.parentCompanyLine}
          </p>
          <p className="mt-1 text-sm text-ivory-100/70">{dict.footer.address}</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-gold-500 uppercase">
            {dict.footer.ourServices}
          </p>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory-100/80 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-gold-500 uppercase">
            {dict.footer.knowledge}
          </p>
          <ul className="mt-4 space-y-2">
            {knowledgeLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory-100/80 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-gold-500 uppercase">
            {dict.footer.contact}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory-100/80">
            {contactRows.map((row) => (
              <li key={row.label}>
                <span className="text-ivory-100/60">{row.label}: </span>
                {/* Placeholder value — replace before launch (see README). */}
                <span className="rounded-sm border border-dashed border-gold-500/40 px-1.5 py-0.5 text-ivory-100/70">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ivory-100/60">
          <p>
            © {new Date().getFullYear()} {dict.site.name} · {PARENT_COMPANY} ·{' '}
            {dict.footer.rights}
          </p>
          <p className="max-w-3xl leading-relaxed">{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
