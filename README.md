# JJ Events — Luxury Wedding & Event Management Website

A premium, fully responsive website for **JJ Events**, built with **Next.js 15**, **Payload CMS 3.0**, **Vercel Postgres**, and **Lenis smooth scrolling**.

## Tech Stack

| Layer       | Technology                                |
|-------------|-------------------------------------------|
| Framework   | Next.js 15 (App Router)                   |
| CMS         | Payload CMS 3.0 (embedded in Next.js)     |
| Database    | Vercel Postgres                            |
| Storage     | Vercel Blob (media uploads)                |
| Styling     | Tailwind CSS 3.4 + Custom CSS Variables    |
| Scrolling   | Lenis (smooth scroll engine)               |
| Animations  | Intersection Observer scroll reveals       |
| Icons       | Lucide React                               |
| Hosting     | Vercel Pro                                 |
| Language    | TypeScript                                 |

## Getting Started (Local Development)

### Prerequisites

- Node.js 18.17+ (recommended: 20 LTS)
- pnpm (`iwr https://get.pnpm.io/install.ps1 -useb | iex`)
- VS Code
- A Vercel account (Pro)

### 1. Install dependencies

```powershell
cd jj-events
pnpm install
```

### 2. Create Vercel Storage (one-time setup)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create a new project (or link this repo later)
3. **Storage → Create Database → Postgres** → name it `jj-events-db`
4. **Storage → Create Store → Blob** → name it `jj-events-media`
5. Go to the Postgres database → **.env.local tab** → copy all variables
6. Go to the Blob store → **Tokens tab** → copy the read-write token

### 3. Configure environment

```powershell
Copy-Item .env.example .env
```

Paste in your Vercel Postgres variables and Blob token.

Generate a Payload secret (run in PowerShell):
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Max 256 }) -as [byte[]])
```

### 4. Run development server

```powershell
pnpm dev
```

- **Website**: [http://localhost:3000](http://localhost:3000)
- **Payload Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

On first visit to `/admin`, you'll create your admin user.

### 5. Deploy to Vercel

```powershell
# Install Vercel CLI if needed
pnpm add -g vercel

# Link & deploy
vercel link
vercel env pull .env.local    # pulls storage env vars automatically
vercel deploy
```

Or just push to GitHub — Vercel auto-deploys on push.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, SEO, Lenis)
│   ├── page.tsx                # Homepage (composes all sections)
│   ├── globals.css             # Tailwind + custom theme
│   └── (payload)/
│       ├── admin/              # Payload CMS admin panel
│       └── api/                # Payload REST + GraphQL API
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx          # Sticky nav with mobile menu
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero
│   │   ├── MarqueeAndStats.tsx # Scrolling marquee + stat counters
│   │   ├── About.tsx           # About section with features
│   │   ├── Services.tsx        # Tabbed services section
│   │   ├── Portfolio.tsx       # Filterable event gallery
│   │   ├── Testimonials.tsx    # Client reviews grid
│   │   ├── Packages.tsx        # Pricing tiers
│   │   ├── Blog.tsx            # Blog preview cards
│   │   ├── FAQ.tsx             # Accordion FAQ
│   │   ├── Contact.tsx         # Inquiry form + contact info
│   │   └── Footer.tsx          # Site footer
│   └── ui/
│       ├── Reveal.tsx          # Scroll-triggered animation wrapper
│       ├── AnimatedCounter.tsx  # Number counter animation
│       └── BackToTop.tsx       # Back-to-top button
├── payload/
│   ├── payload.config.ts       # Payload CMS configuration
│   └── collections/            # 11 CMS collections
├── providers/
│   └── LenisProvider.tsx       # Lenis smooth scroll provider
├── data/
│   └── constants.ts            # Static fallback data
└── lib/
    └── utils.ts                # Utility functions
```

## Payload CMS Collections

| Collection       | Purpose                                         |
|------------------|--------------------------------------------------|
| **Users**        | Admin panel authentication                        |
| **Media**        | Image/video uploads (auto-resized)                |
| **Events**       | Portfolio with galleries, case studies, SEO        |
| **Services**     | Service pages with features and pricing            |
| **Testimonials** | Client reviews with ratings and video links       |
| **BlogPosts**    | Blog articles with categories, tags, SEO          |
| **TeamMembers**  | Team bios with photos and socials                 |
| **Venues**       | Partner venues with coordinates and amenities     |
| **Inquiries**    | Lead capture from contact form (mini CRM)         |
| **FAQ**          | Frequently asked questions                         |
| **Packages**     | Pricing tiers with feature lists                   |

## Next Steps

- [ ] Replace gradient placeholders with real event photos
- [ ] Connect contact form → Payload Inquiries API
- [ ] Add WhatsApp chat widget
- [ ] Set up Resend for inquiry email notifications
- [ ] Build individual service pages (`/services/[slug]`)
- [ ] Build event case study pages (`/portfolio/[slug]`)
- [ ] Build full blog with pagination (`/blog`, `/blog/[slug]`)
- [ ] Add budget calculator tool
- [ ] Add Google Analytics 4 + Meta Pixel
- [ ] Add multi-language support (Hindi + English)
