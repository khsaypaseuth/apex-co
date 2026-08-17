'use client'

import { useState, type FormEvent } from 'react'

export interface SelectOption {
  value: string
  label: string
}

export interface ContactFormLabels {
  fullName: string
  company: string
  email: string
  phone: string
  preferredContact: string
  serviceNeeded: string
  message: string
  selectPlaceholder: string
  required: string
  submit: string
  demoNotice: string
}

export interface ContactFormProps {
  /** All strings come from dict.contactForm. */
  labels: ContactFormLabels
  /** Preferred contact method options (dict.contactForm.methods). */
  contactMethods: SelectOption[]
  /** Service Needed options (built from dict.nav service names). */
  serviceOptions: SelectOption[]
}

const inputClasses =
  'w-full rounded-sm border border-navy-950/20 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30'

const labelClasses = 'mb-1.5 block text-sm font-medium text-navy-950'

/**
 * Contact form with the full master-plan field set. The submit handler is a
 * placeholder (no backend yet): it only reveals a "demo only" notice.
 */
export function ContactForm({
  labels,
  contactMethods,
  serviceOptions,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Placeholder submission — replace with a real backend/action later.
    event.preventDefault()
    setSubmitted(true)
  }

  const requiredMark = (
    <abbr title={labels.required} className="ml-0.5 text-gold-600 no-underline">
      *
    </abbr>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-full-name" className={labelClasses}>
            {labels.fullName}
            {requiredMark}
          </label>
          <input
            id="contact-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClasses}>
            {labels.company}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            {labels.email}
            {requiredMark}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            {labels.phone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-method" className={labelClasses}>
            {labels.preferredContact}
          </label>
          <select
            id="contact-method"
            name="preferredContact"
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              {labels.selectPlaceholder}
            </option>
            {contactMethods.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-service" className={labelClasses}>
            {labels.serviceNeeded}
          </label>
          <select
            id="contact-service"
            name="serviceNeeded"
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              {labels.selectPlaceholder}
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          {labels.message}
          {requiredMark}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600 focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        {labels.submit}
      </button>

      {submitted && (
        <p
          role="status"
          className="rounded-sm border border-gold-500/50 bg-mist-100 px-4 py-3 text-sm text-navy-950"
        >
          {labels.demoNotice}
        </p>
      )}
    </form>
  )
}
