# Maple Terrace West Playground Fund

A small reactive site for tracking our neighborhood's fundraising progress toward
a new playground: a live progress bar toward the goal, milestones, a donor list,
and a form to log new gifts.

## Stack

React + TypeScript + Vite, no backend — donations are stored in the browser via
`localStorage` (see `src/storage.ts`). That keeps the site free to host as a
static site (e.g. GitHub Pages, Netlify, Vercel) but means totals aren't shared
automatically across devices; someone tracking the master total should log gifts
from one browser, or periodically merge numbers from co-organizers.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint      # lint
```

## Customizing

- Edit the fundraising goal from the "Edit goal" link on the page, or update the
  `goal` value in `src/storage.ts`'s `SEED_STATE`.
- Milestones are computed as percentages of the goal in
  `src/components/Milestones.tsx` — edit the labels/percentages there.
- Seed/demo donations live in `SEED_STATE` in `src/storage.ts` and are only used
  the first time the site loads with no saved data.
