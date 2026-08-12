import { redirect } from 'next/navigation'

/**
 * Legacy /news route — News & Updates was replaced by Links.
 * Keep a permanent redirect so old bookmarks and sitemap crawls land cleanly.
 */
export default async function NewsRedirect({
  params,
}: PageProps<'/[lang]/news'>) {
  const { lang } = await params
  redirect(`/${lang}/links`)
}
