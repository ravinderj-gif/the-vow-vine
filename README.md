# THE VOW VINE — Premium Cinematic Wedding Portfolio

Luxury wedding photography & cinematic films website for **THE VOW VINE**.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React, Tailwind CSS, Framer Motion, GSAP, Lenis, Swiper |
| Backend | Node.js, Express, MongoDB (optional) |
| Instagram | Graph API + cached manifest fallback |
| Deploy | Vercel (frontend) + Render/Railway (backend) |

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev          # Next.js → http://localhost:3000
npm run server       # Express API → http://localhost:5000
npm run fetch-instagram  # Sync @thevowvine_ portfolio
```

## Pages

- `/` — Home (cinematic hero, previews)
- `/about` — Brand story
- `/portfolio` — Masonry gallery with filters
- `/films` — Wedding reels & cinematic films
- `/packages` — Luxury pricing
- `/testimonials` — Client stories
- `/contact` — Contact info
- `/booking` — Inquiry form + WhatsApp
- `/instagram` — Live Instagram feed
- `/admin` — Dashboard (refresh feed, analytics)

## Environment Variables

See `.env.example` for:
- `INSTAGRAM_ACCESS_TOKEN` / `INSTAGRAM_USER_ID` — Graph API
- `MONGODB_URI` — Inquiry storage
- `ADMIN_SECRET` — Admin dashboard auth
- `NEXT_PUBLIC_API_URL` — Backend URL

## Deployment

### Vercel (Frontend)
```bash
npm run build
vercel --prod
```

### Render/Railway (Backend)
- Start command: `node server/index.js`
- Set env vars from `.env.example`

## Brand

- **THE VOW VINE** — We Elevate Moments Into Legacy
- Instagram: [@thevowvine_](https://www.instagram.com/thevowvine_)
- Phone: +91 8686556019
- Email: thevowvine@gmail.com
