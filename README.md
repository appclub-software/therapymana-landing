# Therapymana — Landing Page

Marketing site for **Therapymana**, management software for massage & spa studios.

Built with Vite + React + TypeScript + Tailwind CSS v4. Static output, so it deploys to Vercel with zero config.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
npm test         # run tests
```

## Configuration

| Variable       | Default                       | Purpose                                                                 |
| -------------- | ----------------------------- | ----------------------------------------------------------------------- |
| `VITE_APP_URL` | `https://app.therapymana.com` | Base URL of the web app. CTAs link to `${VITE_APP_URL}/login` and `/signup`. |

Copy `.env.example` to `.env.local` to override locally. On Vercel, set it under
**Project → Settings → Environment Variables** and redeploy (Vite inlines it at build time).

## Deploying to Vercel

1. Import this repository in Vercel.
2. Framework preset **Vite** is detected automatically (build: `npm run build`, output: `dist`).
3. Optionally set `VITE_APP_URL`, then deploy.

## Structure

```
src/
  App.tsx                      # Navbar, Hero, Features, Pricing, Footer
  config.ts                    # App URL / CTA links (reads VITE_APP_URL)
  components/Button.tsx        # Button-styled link
  components/SchedulePreview.tsx  # Hero booking-schedule mockup
  components/icons.tsx         # Inline SVG icons
```
