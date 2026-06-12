# JJ Events — component split (drop-in for your Next.js + Payload project)

This is the approved demo, rebuilt as real components matching your existing
structure. Copy the `src/` tree into your project (merge, don't blind-overwrite —
back up first), then follow the steps below.

## What's here

```
src/
  app/
    globals.css                 ← REPLACES yours (same tokens + all section styles)
    page.tsx                    ← REPLACES yours (same imports you already had)
    api/enquiry/route.ts        ← NEW: writes contact submissions into Payload
  providers/
    LenisProvider.tsx           ← REPLACES yours (now uses lenis/react root)
  lib/
    utils.ts                    ← cn() helper (skip if you already have one)
  data/
    index.ts                    ← ALL copy/content, typed (single source of truth)
  components/
    navigation/Navbar.tsx
    ui/                         Reveal, AnimatedCounter, BackToTop, Button
    sections/                   Hero, MarqueeAndStats, About, Services, Portfolio,
                                Testimonials, Packages (NEW — was missing), Blog,
                                FAQ, Contact, Footer
  payload/
    collections/index.ts        ← NEW: Services, Projects, Testimonials, Packages,
                                  Posts, Faqs, Media, Enquiries
```

`layout.tsx` needs no change — it already imports `@/providers/LenisProvider`.

## Setup steps

1. **Install the Lenis React binding** (you already have `lenis@^1.1.0`, which
   ships it):
   ```
   pnpm add lenis
   ```
   The provider imports from `lenis/react`. If your version predates that
   subpath, bump to the latest 1.x.

2. **Register the collections.** In `src/payload/payload.config.ts`:
   ```ts
   import { collections } from '@/payload/collections';

   export default buildConfig({
     // ...your existing config (db, editor, admin, Users, etc.)
     collections: [...collections /*, ...your other collections */],
   });
   ```
   Keep your existing `Users` (auth) collection — the admin won't boot without one.

3. **Generate types and run:**
   ```
   pnpm payload generate:types
   pnpm dev
   ```
   In dev, Payload pushes the schema to Postgres automatically. For production,
   create and run a migration.

4. **Add a first admin user** at `/admin`, then the **Enquiries** tab will start
   collecting form submissions (the form posts to `/api/enquiry`).

## Two intentional shortcuts to finish

- **Images** currently use Unsplash via plain `<img>` so the build matches the
  approved demo exactly. To go production: upload real photos to the **Media**
  collection, reference them on `Projects`/`Posts`, and switch those `<img>` tags
  to `next/image`. If you keep any external URLs, add the host to
  `next.config.ts → images.remotePatterns`.

- **Content is static** (from `src/data`). Each section accepts an optional
  `items` prop, so once you seed a collection you can swap to Payload without
  touching component markup — see the commented example in `app/page.tsx`:
  ```ts
  const { docs } = await payload.find({ collection: 'services', sort: 'order' });
  // <Services items={docs} />
  ```
  The `src/data` arrays double as a ready-made seed script source.

## Notes

- Sections that animate, hold state, or read scroll are `'use client'`
  (Hero, Navbar, Testimonials, FAQ, Contact, Footer, and the `ui/` primitives).
  Static sections (About, Services, Portfolio, Packages, Blog) are Server
  Components that simply render client children — no extra `'use client'` needed.
- Smooth-scrolling on every `#anchor` link is handled once, centrally, inside
  `LenisProvider`. Don't re-init Lenis anywhere else.
- `lucide-react` has no Pinterest/WhatsApp brand glyph — `Contact.tsx` maps those
  to stand-ins with a comment. Swap in a brand-icon set if you want the real marks.
