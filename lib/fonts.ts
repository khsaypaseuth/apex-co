import {
  Fraunces,
  Manrope,
  Noto_Sans_Lao,
  Noto_Sans_SC,
  Noto_Sans_Thai,
  Noto_Serif_Lao,
} from 'next/font/google'

// Variable fonts where available — no `weight` option needed.

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

export const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
})

export const notoSansSc = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
})
