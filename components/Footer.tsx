import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'
import logoApex from '@/public/images/brand/logo-apex-white.png'
import type { Locale } from '@/lib/i18n-config'
import { CONTACT } from '@/lib/site-config'
import { SERVICE_CATEGORY_SLUGS } from '@/lib/types'
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
 * Four-column footer: brand, capabilities, company, contact.
 *
 * Contact rows are live mailto:/tel:/wa.me links, but the values behind them
 * are placeholders until Apex supplies real ones — `CONTACT.isPlaceholder`
 * surfaces a visible notice so nobody dials a number that does not exist.
 */
export function Footer({ lang, dict }: FooterProps) {
  const serviceLinks = SERVICE_CATEGORY_SLUGS.map((slug) => ({
    label: dict.serviceCategories[slug],
    href: `/${lang}/services/${slug}`,
  }))

  const companyLinks = [
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.projects, href: `/${lang}/projects` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
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
    <footer className="bg-navy-950 text-mist-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={logoApex} alt={dict.site.name} className="h-16 w-auto" />
          <p className="mt-3 text-sm leading-relaxed text-mist-100/70">
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
                  className="text-sm text-mist-100/80 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-gold-500 uppercase">
            {dict.footer.company}
          </p>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-mist-100/80 transition-colors hover:text-gold-500"
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
          <ul className="mt-4 space-y-3 text-sm text-mist-100/80">
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
                  <span className="text-mist-100/60">{row.label}: </span>
                  {row.value}
                </a>
              </li>
            ))}
          </ul>
          {CONTACT.isPlaceholder && (
            <p className="mt-5 border-l-2 border-gold-500 pl-3 text-xs leading-relaxed text-mist-100/60">
              {dict.footer.contactPlaceholderNote}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-mist-100/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-mist-100/60">
          <p>
            © {new Date().getFullYear()} {dict.site.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
