import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { Hero } from '@/components/Hero'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/contact'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata({
    lang,
    path: '/contact',
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  })
}

export default async function ContactPage({
  params,
}: PageProps<'/[lang]/contact'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  const contactMethods = [
    { value: 'email', label: dict.contactForm.methods.email },
    { value: 'phone', label: dict.contactForm.methods.phone },
    { value: 'whatsapp', label: dict.contactForm.methods.whatsapp },
    { value: 'line', label: dict.contactForm.methods.line },
  ]

  const serviceOptions = [
    { value: 'business-setup', label: dict.nav.businessSetup },
    { value: 'visa-immigration', label: dict.nav.visaImmigration },
    { value: 'legal-family', label: dict.nav.legalFamily },
    { value: 'accounting-tax', label: dict.nav.accountingTax },
  ]

  // Placeholder contact details, exactly per the master plan — clearly
  // marked with bracketed dictionary strings until the owner supplies them.
  const contactRows = [
    { label: dict.footer.phoneLabel, value: dict.footer.phonePlaceholder },
    { label: dict.footer.emailLabel, value: dict.footer.emailPlaceholder },
    { label: dict.footer.chatLabel, value: dict.footer.chatPlaceholder },
  ]

  const nextSteps = [
    dict.contactPage.next.read,
    dict.contactPage.next.reply,
    dict.contactPage.next.propose,
  ]

  return (
    <main id="main-content">
      <Hero
        eyebrow={dict.site.name}
        title={dict.nav.contact}
        lede={dict.contactPage.lede}
      />

      <div className="border-b border-navy-950/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            label={dict.common.breadcrumbLabel}
            items={[
              { label: dict.nav.home, href: `/${lang}` },
              { label: dict.nav.contact },
            ]}
          />
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl leading-tight text-navy-950 md:text-3xl">
              {dict.contactPage.formTitle}
            </h2>
            <div className="mt-4 h-px w-12 bg-gold-500" aria-hidden="true" />
            <div className="mt-8">
              <ContactForm
                labels={{
                  fullName: dict.contactForm.fullName,
                  company: dict.contactForm.company,
                  email: dict.contactForm.email,
                  phone: dict.contactForm.phone,
                  preferredContact: dict.contactForm.preferredContact,
                  serviceNeeded: dict.contactForm.serviceNeeded,
                  message: dict.contactForm.message,
                  selectPlaceholder: dict.contactForm.selectPlaceholder,
                  required: dict.contactForm.required,
                  submit: dict.contactForm.submit,
                  demoNotice: dict.contactForm.demoNotice,
                }}
                contactMethods={contactMethods}
                serviceOptions={serviceOptions}
              />
            </div>
          </div>

          {/* Company details + what happens next */}
          <div className="space-y-10 lg:col-span-2">
            <div className="rounded-sm bg-navy-950 p-8 text-ivory-100">
              <h2 className="font-display text-xl">
                {dict.contactPage.detailsTitle}
              </h2>
              <div className="mt-4 h-px w-12 bg-gold-500" aria-hidden="true" />
              <p className="mt-5 font-display text-lg">{dict.site.name}</p>
              <p className="mt-1 text-sm text-ivory-100/70">
                {dict.contactPage.businessUnitLine}
              </p>
              <p className="mt-1 text-sm text-ivory-100/70">
                {dict.footer.address}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {contactRows.map((row) => (
                  <li key={row.label}>
                    <span className="text-ivory-100/60">{row.label}: </span>
                    {/* Placeholder value — replace before launch (see README). */}
                    <span className="rounded-sm border border-dashed border-gold-500/40 px-1.5 py-0.5 text-ivory-100/80">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold tracking-widest text-navy-700 uppercase">
                {dict.contactPage.nextTitle}
              </h2>
              <div className="mt-3 h-px w-12 bg-gold-500" aria-hidden="true" />
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-2xl text-gold-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-medium text-navy-950">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
