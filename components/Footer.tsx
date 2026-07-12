import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'
import logoSv from '@/public/images/brand/logo-sv.png'
import type { Locale } from '@/lib/i18n-config'
import { CONTACT, PARENT_COMPANY } from '@/lib/site-config'
import {
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconPhone,
} from '@/components/icons'

export interface FooterProps {
  lang: Locale
  dict: Dictionary
}

/**
 * Four-column footer: brand + parent company, services, knowledge, contact.
 * The knowledge column carries the pages slimmed out of the desktop nav
 * (D-130); contact rows are real mailto:/tel:/wa.me links (D-133).
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
    { label: dict.nav.lawsShort, href: `/${lang}/laws` },
    { label: dict.nav.guides, href: `/${lang}/guides` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ]

  const address = lang === 'lo' ? CONTACT.addressLo : CONTACT.address

  const contactRows: {
    key: string
    icon: typeof IconPhone
    label: string
    value: string
    href: string
    external?: boolean
  }[] = [
    {
      key: 'phone',
      icon: IconPhone,
      label: dict.footer.phoneLabel,
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
    },
    {
      key: 'whatsapp',
      icon: IconMessageCircle,
      label: dict.footer.chatLabel,
      value: CONTACT.phone,
      href: CONTACT.whatsappHref,
      external: true,
    },
    {
      key: 'email',
      icon: IconMail,
      label: dict.footer.emailLabel,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
  ]

  return (
    <footer className="bg-navy-950 text-ivory-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={logoSv} alt={dict.site.name} className="h-10 w-auto" />
          <p className="mt-3 text-sm leading-relaxed text-ivory-100/70">
            {dict.site.footerAbout}
          </p>
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
          <ul className="mt-4 space-y-3 text-sm text-ivory-100/80">
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-gold-500">
                <IconMapPin size={16} />
              </span>
              <span className="leading-relaxed">{address}</span>
            </li>
            {contactRows.map((row) => (
              <li key={row.key} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-gold-500"
                >
                  <row.icon size={16} />
                </span>
                <a
                  href={row.href}
                  {...(row.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="transition-colors hover:text-gold-500"
                >
                  <span className="text-ivory-100/60">{row.label}: </span>
                  {row.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-ivory-100/60">
          <p>
            © {new Date().getFullYear()} {dict.site.name} · {PARENT_COMPANY} ·{' '}
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
