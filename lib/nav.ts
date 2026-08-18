/**
 * Whether a navigation link should be marked as the current page.
 *
 * Exact match always counts. Prefix matching — so `/en/services` stays
 * current on `/en/services/electrical` — applies ONLY to links deeper than
 * the locale root. The Home link's href *is* the locale root (`/en`), so
 * without that guard it would prefix-match every page on the site and every
 * page would render two current-page links.
 *
 * Trailing slashes are normalised, since `/en` and `/en/` are the same page.
 */
export function isNavItemActive(pathname: string, href: string): boolean {
  const path = normalise(pathname)
  const target = normalise(href)

  if (path === target) return true

  // One segment (or none) means the locale root — exact match only.
  if (target.split('/').filter(Boolean).length <= 1) return false

  return path.startsWith(`${target}/`)
}

function normalise(value: string): string {
  return value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value
}
