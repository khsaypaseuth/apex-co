import { Fraunces, Manrope, Noto_Sans_Lao, Noto_Serif_Lao } from 'next/font/google'

// All four are variable fonts — no `weight` option needed.

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
})

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao', 'latin'],
  display: 'swap',
  variable: '--font-noto-sans-lao',
})

export const notoSerifLao = Noto_Serif_Lao({
  subsets: ['lao', 'latin'],
  display: 'swap',
  variable: '--font-noto-serif-lao',
})
