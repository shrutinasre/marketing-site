# Vighnex Marketing Site

Next.js + TypeScript + Tailwind CSS marketing site for Vighnex, a managed IT infrastructure
partner for startups and growing businesses.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in real values:

```bash
cp .env.local.example .env.local
```

This includes the site URL, contact details, analytics IDs (GA/GTM/Meta Pixel/LinkedIn — all
optional, scripts only render when set), and `DATABASE_URL` for lead storage.

## Database Setup (Lead Storage)

The consultation form and IT requirement calculator both post to `/api/lead`, which persists
submissions to Postgres. Point `DATABASE_URL` in `.env.local` at your database, then run the
migration once:

```bash
psql "$DATABASE_URL" -f db/migrations/001_create_leads.sql
```

If `DATABASE_URL` isn't set, or the `leads` table doesn't exist yet, submissions still succeed
for the visitor — they're logged server-side instead of persisted, so nothing breaks in local
dev without a database.

## Project Structure

- `app/` — routes (App Router)
- `components/` — UI, layout, home-page sections, forms, animations
- `data/` — centralized, CMS-ready content (services, packages, FAQs, nav, blog, etc.)
- `lib/` — utilities, site config, DB pool, lead validation/persistence
- `db/migrations/` — SQL migrations

## Deployment

Standard Next.js deployment (Vercel or any Node host). Make sure environment variables are
configured on the host, and that the `leads` table migration has been applied to the
production database before launch.
