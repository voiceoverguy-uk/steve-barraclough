# Steve Barraclough Gas Engineers Website

A clean, modern, mobile-first single-page website for a local father-and-son gas engineering business based in Pontefract, West Yorkshire.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: Node.js 22
- **Ready for**: Vercel deployment

## Project Structure

```
app/
  layout.tsx       - Root layout with metadata and Google Fonts (Inter)
  page.tsx         - Main page assembling all sections
  globals.css      - Global styles + Tailwind v4 @import + theme tokens

components/
  Header.tsx       - Sticky nav with hamburger menu (client component)
  Hero.tsx         - Full-screen hero with CTAs and trust highlights
  TrustBadges.tsx  - Four trust credential cards below hero
  About.tsx        - About section with image placeholder and stats
  Services.tsx     - 12 service cards in two groups (Gas & Heating / Plumbing)
  WhyChooseUs.tsx  - 8 benefit cards on dark navy background
  AreasCovered.tsx - Area tags + map placeholder
  Testimonials.tsx - 3 customer review cards
  FAQ.tsx          - Accordion FAQ (client component)
  Contact.tsx      - Contact form + phone numbers (client component, Resend-ready)
  Footer.tsx       - Footer with nav, contact, credentials (client component)
  MobileCallButton.tsx - Sticky bottom call button on mobile
```

## Colour Palette

- **Dark navy**: `#0d1b2a` (hero, why-choose-us, header backgrounds)
- **Worcester Bosch blue**: `#003da5` (primary accent)
- **Gas Safe yellow**: `#ffce00` (secondary accent, hover underlines, badges)
- **White**: `#ffffff`

## Business Details

- Business: Steve Barraclough Gas Engineers
- Location: Pontefract, West Yorkshire
- Gas Safe No.: 99236
- Worcester Bosch Accredited Installer
- Father & son team, 20+ years experience

## Key Features

- Sticky header with animated yellow underline on nav hover
- Mobile hamburger menu
- Sticky mobile call button at bottom of screen
- Smooth scroll via CSS `scroll-behavior: smooth`
- FAQ accordion (CSS transition-based)
- Contact form UI ready for Resend integration (see Contact.tsx `handleSubmit`)
- SEO metadata + Open Graph in layout.tsx
- Placeholder phone numbers to be replaced: `01977 123 456` / `07700 000 000`

## Running Locally

```bash
npm run dev   # Starts on port 5000
npm run build # Production build
npm start     # Production server on port 5000
```

## Vercel Deployment

The project is ready for Vercel. No additional config needed. Deploy by connecting the GitHub repo to Vercel.

## Pitch Deck

A 10-slide website pitch deck is available at `/pitch-deck`. It uses Montserrat (display) + Inter (body) fonts with a warm professional palette (navy, amber/gold, off-white). Slides cover: title, problem, opportunity, website overview, features, local SEO, testimonials, hosting, pricing (placeholders), and closing CTA. Generated images are in `public/images/pitch-*.png`.

## TODO / Future Additions

- [ ] Replace placeholder phone numbers
- [ ] Add real team photo to About section
- [ ] Add Gas Safe and Worcester Bosch logo images to public/ and reference in TrustBadges / Footer
- [ ] Integrate Resend in Contact.tsx `handleSubmit` for email submissions
- [ ] Embed Google Maps iframe in AreasCovered section
- [ ] Add LocalBusiness / HVAC schema markup in layout.tsx
