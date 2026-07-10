# SV Consulting Website Auto-Mode Master Prompt for Claude Code

Use this file as the full instruction set for building the SV Consulting website automatically.

---

## Goal Command

Use this command in Claude Code:

```text
/goal Read projects/sv-consulting-website/master-prompt.md and execute everything below the divider line as your goal. That file is your full instruction set: mission, guardrails, phases, deliverables, coding standards, design standards, QA checks, and definition of done. Follow it exactly, including the never-ask rule. Do not report back until the definition of done is met. Start now.
```

---

# MASTER PROMPT STARTS BELOW THIS LINE

## Mission

Build a complete premium multilingual website for **SV Consulting**, a business unit under **Super Vision Co., Ltd.**

SV Consulting provides professional consulting services in Laos, including:

- Business registration
- Company setup
- Work visa
- Investor visa
- Long-term stay
- Legal consulting
- Contract drafting and review
- Corporate compliance
- Due diligence
- Trademark registration
- Intellectual property support
- Marriage registration between Lao and foreign nationals
- Divorce assistance
- Family documentation
- Accounting consulting
- Tax consulting
- Payroll and bookkeeping
- Lao business and law knowledge

The website must not be only a sales website. It must also become a trusted **Knowledge Center** for people who want to understand Lao business, tax, immigration, investment, and legal procedures.

The final website should feel like a premium consulting firm that could charge international clients, while still being clear and simple for local users.

---

## Never-Ask Rule

Do not ask the user any questions during the build.

If information is missing, make the best professional decision yourself and record it in:

```text
/build-log/decision-log.md
```

For every assumption, write:

- Question you would have asked
- Decision made
- Reason
- Risk
- How to change later

Blocked is not an option. If one approach fails, use another and keep moving.

---

## Work Directory

Work only inside:

```text
projects/sv-consulting-website/
```

All artifacts must be saved inside this folder.

Suggested structure:

```text
projects/sv-consulting-website/
  app/
  components/
  content/
  public/
  styles/
  lib/
  docs/
  build-log/
  qa/
  screenshots/
  README.md
  recap.html
```

---

## Guardrails

1. Do not publish the site publicly.
2. Do not buy a domain.
3. Do not use paid services unless keys already exist in `.env`.
4. Do not contact real people.
5. Do not invent factual legal, tax, immigration, or business claims.
6. Any factual claim about Lao law, tax, business registration, immigration, or government process must have a source URL or be clearly marked as:
   - `Needs legal verification`
   - `General information only`
   - `Professional advice required`
7. The website must include a legal disclaimer that the content is for general information only and not legal advice.
8. The final product must run locally.
9. No placeholder content pretending to be final.
10. Placeholder contact details are allowed only if clearly marked as placeholders.

---

## Important Legal Disclaimer Requirement

Every legal, tax, immigration, family law, investment, and business guide page must include:

```text
This information is provided for general guidance only and does not constitute legal, tax, immigration, or accounting advice. Laws and procedures may change. Please contact SV Consulting or a qualified professional before making decisions.
```

---

## Brand

### Brand Name

SV Consulting

### Parent Company

Super Vision Co., Ltd.

### Brand Positioning

SV Consulting is a professional business, legal, immigration, accounting, tax, and corporate services firm helping local and international clients start, operate, and grow in Laos.

### Suggested Tagline

Your Trusted Partner for Business, Legal & Immigration Services in Laos.

### Tone

- Professional
- Clear
- Trustworthy
- Practical
- International
- Simple enough for non-native English speakers

Avoid overly complex legal wording unless necessary.

---

## Languages

The website must support:

- English
- Lao
- Thai
- Vietnamese
- Chinese

English must be complete first.

Prepare translation architecture for all languages.

Suggested route structure:

```text
/en
/lo
/th
/vi
/zh
```

Use Google Font:

- Lao: `Noto Sans Lao`
- Other languages: choose a premium, readable sans-serif or editorial pairing

Do not use Inter or Roboto as the main visual identity font. This site should feel premium, not default.

---

## Design Direction

Follow the `$10K Website Checklist`.

### 1. Point of View, Not a Template

The site should have a clear design direction.

Recommended direction:

```text
Modern editorial corporate luxury for Southeast Asian professional services.
```

It should feel:

- Premium
- Calm
- Trustworthy
- International
- Not generic
- Not startup SaaS-looking
- Not overly colorful

### 2. Typography That Works

Use a display font for headlines and a clean body font.

Recommended examples:

- Display: Playfair Display, Cormorant Garamond, Fraunces, or similar
- Body: Manrope, Source Sans 3, IBM Plex Sans, or similar
- Lao: Noto Sans Lao

Typography must create clear hierarchy.

### 3. Restrained Color System

Use 3–5 main colors only.

Recommended:

```text
Deep Navy: #071C33
Royal Navy: #12355B
Warm Gold: #C9A24A
Ivory: #F8F5EF
Charcoal: #1E2933
White: #FFFFFF
```

Use gold carefully as an accent, not everywhere.

### 4. Hierarchy That Breathes

Use strong spacing, clear sections, and readable line length.

Avoid flat walls of text.

### 5. Imagery With Intent

Use intentional imagery. Avoid generic stock-photo feeling.

Suggested visual direction:

- Laos business district
- Professional meeting details
- Documents and signatures
- Government-building inspired abstract visuals
- Mekong/Laos subtle location cues
- Generated abstract premium visuals are acceptable if consistent

### 6. Motion That Whispers

Use subtle motion only:

- Button hover
- Soft reveal
- Navigation transitions
- Card hover
- Smooth scroll
- No excessive animation

### 7. Mobile Designed, Not Shrunk

Mobile must have its own layout decisions:

- Shorter hero
- Clear CTAs
- Easy service cards
- Sticky contact action
- Clean readable articles
- No cramped navigation

### 8. Invisible Expensive Stuff

Must include:

- Semantic HTML
- WCAG AA contrast
- Keyboard navigation
- SEO metadata
- Open Graph
- Fast loading
- Optimized images
- Sitemap structure
- Clean routing
- Accessible forms

---

## Matt Pocock Style Code Quality

Follow high-quality TypeScript and React practices inspired by Matt Pocock:

- Strict TypeScript
- Avoid `any`
- Use clear domain types
- Use reusable typed components
- Keep components small and composable
- Prefer readable code over clever code
- Use constants for repeated config
- Use schema validation where useful
- Separate content data from UI components
- Use meaningful naming
- Do not duplicate large blocks
- Keep routes predictable
- Make errors explicit
- Avoid unsafe casts unless clearly justified

---

## Recommended Claude Plugins / Skills

Before building, check whether these are available. If available, use them. If not available, continue without stopping and record it in the build log.

```bash
/plugin install skill-creator@claude-plugins-official
/plugin install superpowers@claude-plugins-official
npx get-shit-done-cc --claude --global
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
/plugin install frontend-design@claude-plugins-official
```

Also consider these references if accessible:

- Anthropic Frontend Design skill
- UI/UX Pro Max skill

If plugin installation fails, proceed manually using the same principles.

---

## Orchestration Requirement

Use multi-agent thinking or parallel workstreams where possible.

Minimum required internal workstreams:

1. **Brand Strategist**
   - Defines positioning, tone, trust signals, and conversion strategy.

2. **UX Architect**
   - Defines sitemap, user journeys, navigation, article structure, lead capture.

3. **Frontend Designer**
   - Defines visual language, typography, layout, components, mobile behavior.

4. **SEO Strategist**
   - Defines keywords, page metadata, content clusters, knowledge center structure.

5. **Legal Content Skeptic**
   - Reviews all legal/tax/immigration claims and marks anything not verified.

6. **Code Quality Critic**
   - Reviews code for TypeScript quality, maintainability, accessibility, and performance.

7. **Completeness Critic**
   - Checks the definition of done before final recap.

Record the output of these agents in:

```text
/build-log/agent-notes.md
```

---

## Site Map

Build these main pages:

1. Home
2. About
3. Services
4. Business Setup in Laos
5. Visa & Immigration
6. Legal & Family Services
7. Accounting & Tax
8. Knowledge Center
9. Lao Laws Library
10. Business Guides
11. News & Updates
12. FAQ
13. Contact

---

## Page Content Requirements

### Home Page

Purpose:
Convert visitors and establish trust quickly.

Sections:

1. Hero
   - Headline: Professional Consulting Services for Doing Business and Living in Laos
   - Subtext: SV Consulting helps local and international clients with business registration, legal support, visa and immigration services, accounting, tax, and corporate compliance.
   - CTA: Book a Consultation
   - CTA: Explore Services

2. Trust Statement
   - Your trusted partner for business, legal, immigration, accounting, and corporate services in Laos.

3. Service Highlights
   - Business Registration
   - Visa & Immigration
   - Legal Services
   - Accounting & Tax
   - Family & Personal Legal Services
   - Lao Business Knowledge

4. Why Choose SV Consulting
   - Local knowledge
   - Practical advice
   - Clear process
   - Transparent communication
   - Support for companies and individuals
   - Backed by Super Vision Co., Ltd.

5. Knowledge Center Preview
   - Educational articles about business in Laos, taxes, visas, compliance, and legal procedures.

6. Final CTA
   - Start with a consultation.

---

### About Page

Explain:

- SV Consulting is under Super Vision Co., Ltd.
- Practical support for individuals, entrepreneurs, investors, and companies
- Mission
- Vision
- Values
- How the firm works

Mission:
Make business, legal, immigration, and compliance processes easier, clearer, and more reliable for clients in Laos.

Vision:
Become a trusted one-stop professional consulting partner for local and international clients in Laos.

Values:
- Trust
- Clarity
- Professionalism
- Practical execution
- Confidentiality
- Long-term client relationship

---

### Services Page

Create clear service categories.

#### Business Setup & Licensing

- Company Registration
- Foreign Investment Registration
- Representative Office Registration
- Branch Office Registration
- Business License Applications
- Industry-Specific Licenses
- Tax Registration
- Social Security Registration
- Company Amendments
- Business License Renewal

#### Visa & Immigration Services

- Business Visa
- Investor Visa
- Work Visa
- Work Permit
- Long-Term Stay Visa
- Visa Extension & Renewal
- Stay Permit
- Immigration Consulting
- Document Preparation
- Government Liaison

#### Corporate Legal Services

- Legal Consulting
- Contract Review
- Contract Drafting
- Corporate Compliance
- Due Diligence
- Trademark Registration
- Intellectual Property Support
- Company Legal Documentation
- Legal Liaison Support

#### Family & Personal Legal Services

- Marriage Registration for Lao and Foreign Nationals
- Marriage Certificate Translation and Legalisation Support
- Divorce Assistance
- Family Documentation
- Birth Certificate Support
- Family Book Support
- Long-Term Stay Support for Foreign Spouses

#### Accounting & Tax

- Accounting Services
- Bookkeeping
- Tax Registration
- Tax Filing
- Payroll Services
- Financial Reporting
- Annual Compliance Support
- Tax Advisory

---

### Business Setup Page

Sections:

- Overview
- Who this is for
- Common business structures
- Registration process overview
- Documents commonly required
- Timeline disclaimer
- How SV Consulting helps
- CTA

Important:
Do not state exact legal requirements unless sourced. Use cautious wording.

---

### Visa & Immigration Page

Sections:

- Overview
- Visa types supported
- Work permit support
- Investor visa support
- Long-term stay support
- Family stay support
- Document preparation
- Renewal and extension support
- CTA

---

### Legal & Family Services Page

Sections:

- Corporate legal support
- Contract support
- Compliance
- Due diligence
- Trademark and IP
- Marriage with Lao citizen
- Divorce assistance
- Family documentation
- Long-term stay support for foreign spouses
- CTA

---

### Accounting & Tax Page

Sections:

- Accounting overview
- Bookkeeping
- Tax registration
- Tax filing
- Payroll
- Reporting
- Annual compliance
- Tax knowledge articles
- CTA

---

## Knowledge Center

This is a major SEO and trust-building section.

Build category pages and starter articles.

### Categories

1. Starting a Business in Laos
2. Tax & Accounting
3. Visa & Immigration
4. Lao Law Basics
5. Labour & Employment
6. Investment in Laos
7. Marriage & Family
8. Living in Laos
9. Compliance Checklists

Each article should have:

- Title
- Summary
- Last Updated
- Reading Time
- Category
- Disclaimer
- Main content
- Related services
- Related articles
- CTA

### Starter Article Ideas

Create at least 12 starter articles with clear disclaimers:

1. How to Start a Business in Laos
2. Company Registration in Laos: Basic Steps
3. Business Licenses in Laos: What to Know
4. Tax Registration for New Companies in Laos
5. VAT in Laos: Simple Overview
6. Corporate Income Tax in Laos: Simple Overview
7. Work Visa and Work Permit in Laos
8. Investor Visa in Laos: What to Prepare
9. Long-Term Stay Options in Laos
10. Marriage Registration Between Lao and Foreign Nationals
11. Contract Review for Businesses in Laos
12. Annual Compliance Checklist for Companies in Laos

Articles can be concise but must be helpful and professional.

If factual details are not verified, mark clearly:
`Needs legal verification before publication`.

---

## Lao Laws Library

Purpose:
A searchable and filterable plain-language library about Lao laws and regulations relevant to businesses and individuals.

Do not reproduce full legal texts unless legally allowed. Explain in simple language.

Categories:

- Company Law
- Investment Law
- Tax Law
- Labour Law
- Immigration
- Family Law
- Intellectual Property
- Commercial Contracts

Each law guide page should contain:

- Law topic
- Plain-English summary
- Who it affects
- Key obligations
- Common mistakes
- Related services
- Related articles
- Verification status
- Source URLs if available
- Disclaimer

Starter law library pages:

1. Company Registration Rules
2. Foreign Investment Rules
3. Tax Obligations for Companies
4. Labour and Employment Basics
5. Work Permit Basics
6. Trademark Registration Basics
7. Marriage Registration Basics
8. Divorce Assistance Basics

---

## Business Guides

Build a guides section with downloadable-style guide cards.

At this stage, create web pages or PDF-ready content for:

1. Complete Guide to Starting a Business in Laos
2. Investor Guide to Laos
3. Work Visa and Work Permit Guide
4. Tax and Accounting Guide
5. Annual Company Compliance Checklist
6. Marriage and Long-Term Stay Guide

Each guide should include a lead capture CTA:

- Full Name
- Email
- Phone / WhatsApp
- Service Interest

Backend can be placeholder, but UI must be complete.

---

## News & Updates

Create a structure for:

- Legal updates
- Tax updates
- Visa updates
- Business notices
- Investment news
- Company announcements

Do not invent news.

For launch, include sample internal announcements only if clearly labelled:

```text
Sample content for layout only — replace before publishing.
```

Better: create an empty state and CMS-ready news structure.

---

## FAQ

Create FAQ sections:

### Business Setup

- Can foreigners register a company in Laos?
- How long does company registration take?
- What documents are needed?
- Do I need a local partner?
- What licenses are required?

### Visa & Immigration

- What is the difference between a visa and a work permit?
- Can investors apply for long-term stay?
- Can family members stay in Laos?
- How do visa extensions work?

### Legal

- Can SV Consulting draft contracts?
- Can contracts be reviewed before signing?
- What is due diligence?
- Can you help with trademark registration?

### Accounting & Tax

- Does every company need bookkeeping?
- When should a company register for tax?
- Can SV Consulting help with payroll?
- What annual compliance is required?

### Family & Personal

- Can foreigners marry Lao citizens?
- Can SV Consulting help with divorce documents?
- Can foreign spouses apply for long-term stay?

Use careful wording and disclaimers.

---

## Contact Page

Fields:

- Full Name
- Company Name
- Email
- Phone / WhatsApp
- Preferred Contact Method
- Service Needed
- Message

Include:

```text
SV Consulting
A business unit of Super Vision Co., Ltd.
Vientiane Capital, Lao PDR
Phone: [Add phone number]
Email: [Add email]
WhatsApp / LINE: [Add contact link]
```

Add floating WhatsApp and LINE buttons using placeholders.

---

## Technical Stack

Use:

- Next.js
- TypeScript
- Tailwind CSS
- App Router if suitable
- Static-first architecture
- Multilingual content files
- Reusable components
- Markdown or MDX support for articles
- SEO metadata per page
- Sitemap-ready structure
- Local development ready

Suggested content structure:

```text
/content/
  en/
    pages/
    services/
    articles/
    laws/
    guides/
  lo/
  th/
  vi/
  zh/
```

---

## Components to Build

Minimum components:

- Header
- Language Switcher
- Mobile Navigation
- Footer
- Hero Section
- Service Card
- CTA Section
- Article Card
- Guide Card
- Law Topic Card
- FAQ Accordion
- Contact Form
- Floating Contact Buttons
- Breadcrumbs
- Section Header
- Trust Badge
- Disclaimer Box
- Related Articles
- Related Services
- Search / Filter UI for Knowledge Center
- Search / Filter UI for Lao Laws Library

---

## SEO Requirements

Every page must have:

- Title
- Meta description
- Canonical-ready URL
- Open Graph title
- Open Graph description
- Open Graph image placeholder
- Proper headings
- Semantic HTML

Target keywords:

- business registration in Laos
- company registration Laos
- start business in Laos
- work visa Laos
- investor visa Laos
- legal consulting Laos
- accounting services Laos
- tax filing Laos
- marriage registration Laos
- long-term stay Laos
- foreign investment Laos
- corporate services Laos
- Lao tax guide
- Lao business law
- work permit Laos

---

## Accessibility Requirements

- WCAG AA contrast
- Keyboard navigation
- Visible focus states
- Semantic buttons and links
- Form labels
- Mobile readable font sizes
- Alt text for images
- Reduced motion consideration
- No text over images without contrast overlay

---

## Performance Requirements

- Sub-2s feel locally
- Optimized images
- Avoid heavy animation libraries unless necessary
- Minimize JavaScript
- Use static rendering where possible
- Clean bundle

---

## QA Requirements

Before finishing:

1. Run lint.
2. Run typecheck.
3. Run build.
4. Test home page desktop.
5. Test home page mobile.
6. Test navigation.
7. Test language switcher.
8. Test contact form UI.
9. Test Knowledge Center filters.
10. Test Lao Laws Library filters.
11. Check all internal links.
12. Check accessibility basics.
13. Check no fake legal claims are presented as verified.
14. Check all placeholders are clearly marked.
15. Take screenshots of desktop and mobile.

Save QA notes to:

```text
/qa/qa-report.md
```

Save screenshots to:

```text
/screenshots/
```

---

## Recap Page

Create:

```text
recap.html
```

It must explain:

- What was built
- How to run locally
- Site map
- Design direction
- Brand system
- Main components
- Knowledge Center structure
- Lao Laws Library structure
- SEO strategy
- Legal disclaimer strategy
- QA results
- Known limitations
- Future roadmap
- Links to all important files

A stranger should be able to open `recap.html` and understand the website in five minutes.

---

## README Requirement

Create:

```text
README.md
```

Include:

- Project overview
- Tech stack
- Install command
- Development command
- Build command
- Folder structure
- Language structure
- Content editing guide
- How to add new articles
- How to add new law guide pages
- How to update services
- How to replace placeholders
- Deployment notes for future

---

## Definition of Done

Do not stop until all are true:

- Website runs locally.
- Build passes.
- TypeScript passes.
- Main pages completed.
- English content completed.
- Lao, Thai, Vietnamese, Chinese translation structure prepared.
- Knowledge Center exists with starter articles.
- Lao Laws Library exists with starter law topics.
- Business Guides section exists.
- Contact form UI exists.
- Floating WhatsApp and LINE buttons exist.
- Legal disclaimer appears on relevant pages.
- No unverified legal/tax/immigration claims are presented as final facts.
- Mobile and desktop layouts checked.
- Screenshots saved.
- QA report written.
- Decision log written.
- Agent notes written.
- README written.
- recap.html written and links to all deliverables.
- Design follows the $10K website checklist.
- Code follows strong TypeScript and component quality standards.
- Nothing important is hidden in undocumented assumptions.

---

## Final Instruction

Build the strongest practical version possible.

Do not pause for approval.

Do not ask questions.

Make professional decisions, document them, and keep moving until the definition of done is met.
