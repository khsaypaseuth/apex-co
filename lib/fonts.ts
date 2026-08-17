import {
  Archivo,
  Manrope,
  Noto_Sans_Lao,
  Noto_Sans_SC,
  Noto_Sans_Thai,
} from 'next/font/google'

// Variable fonts where available — no `weight` option needed.

/**
 * Display face. Archivo is a sturdy industrial grotesque; the previous brand's
 * editorial serif (Fraunces) read as a luxury professional-services firm,
 * which is the wrong signal for an electrical and construction contractor.
 */
export const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

/**
 * Lao carries both body and display duty. With the serif display dropped, the
 * Lao serif (Noto Serif Lao) went with it — headings use the bold weights of
 * this face instead, matching the Latin sans/sans pairing.
 */
export const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao', 'latin'],
  display: 'swap',
  variable: '--font-noto-sans-lao',
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
