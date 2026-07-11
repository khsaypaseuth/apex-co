'use client'

import { useState, type FormEvent } from 'react'
import type { SelectOption } from './ContactForm'

export interface LeadCaptureFormLabels {
  title: string
  lede: string
  fullName: string
  email: string
  phone: string
  serviceInterest: string
  selectPlaceholder: string
  required: string
  submit: string
  demoNotice: string
}

export interface LeadCaptureFormProps {
  /** All strings come from dict.leadForm. */
  labels: LeadCaptureFormLabels
  /** Service Interest options (built from dict.nav service names). */
  serviceOptions: SelectOption[]
  /** Preselects the Service Interest that matches the current guide. */
  defaultServiceInterest?: string
}

const inputClasses =
  'w-full rounded-sm border border-navy-950/20 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30'

const labelClasses = 'mb-1.5 block text-sm font-medium text-navy-950'

/**
 * Compact lead-capture form for guide pages (master plan §Business Guides:
 * Full Name, Email, Phone/WhatsApp, Service Interest). The submit handler is
 * a placeholder (no backend yet): it only reveals a "demo only" notice.
 */
export function LeadCaptureForm({
  labels,
  serviceOptions,
  defaultServiceInterest,
}: LeadCaptureFormProps) {
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
    <section
      aria-labelledby="lead-capture-title"
      className="rounded-sm border border-navy-950/10 border-t-2 border-t-gold-500 bg-ivory-100 p-6 md:p-8"
    >
      <h2
        id="lead-capture-title"
        className="font-display text-2xl text-navy-950"
      >
        {labels.title}
      </h2>
      <p className="mt-3 leading-relaxed text-slate-500">{labels.lede}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-full-name" className={labelClasses}>
              {labels.fullName}
              {requiredMark}
            </label>
            <input
              id="lead-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="lead-email" className={labelClasses}>
              {labels.email}
              {requiredMark}
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="lead-phone" className={labelClasses}>
              {labels.phone}
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="lead-service-interest" className={labelClasses}>
              {labels.serviceInterest}
            </label>
            <select
              id="lead-service-interest"
              name="serviceInterest"
              defaultValue={defaultServiceInterest ?? ''}
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

        <button
          type="submit"
          className="rounded-sm bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-600 focus-visible:outline-2 focus-visible:outline-gold-500"
        >
          {labels.submit}
        </button>

        {submitted && (
          <p
            role="status"
            className="rounded-sm border border-gold-500/50 bg-white px-4 py-3 text-sm text-navy-950"
          >
            {labels.demoNotice}
          </p>
        )}
      </form>
    </section>
  )
}
