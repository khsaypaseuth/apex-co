# Chinese (zh) content — not yet active

This locale is architecture-only at launch (decision D-001): routes, types,
and folders exist, but content is deferred until English + Lao are finalized.

## How to activate Chinese

1. Add `'zh'` to `activeLocales` in `lib/i18n-config.ts`.
2. Create `dictionaries/zh.json` (copy `dictionaries/en.json` and translate
   every key — the shape must match exactly) and register its loader in
   `lib/dictionaries.ts`.
3. Populate this folder mirroring `content/en/`:
   - `articles/` — Knowledge Center articles (`.md` with validated frontmatter)
   - `laws/` — Lao Laws Library topics
   - `guides/` — Business guides
   - `pages/` — page-level content
4. Frontmatter is validated by `lib/content-schema.ts` — invalid files fail
   the build with a descriptive error.
5. Translate disclaimers and verification markers too — they must never be
   dropped in translation.
