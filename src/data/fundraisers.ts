export interface PastFundraiser {
  name: string
  organizer: string
  date: string // ISO date
  amount: number
}

export interface UpcomingFundraiser {
  name: string
  organizer: string
  date: string // ISO date
  description?: string
}

export const PAST_FUNDRAISERS: PastFundraiser[] = [
  { name: 'Ice Cream Day', organizer: 'Lisa', date: '2026-08-09', amount: 295 },
  { name: 'Pizza Night', organizer: 'Lisa', date: '2026-08-01', amount: 265 },
  { name: 'Ornament Sale', organizer: 'Katie', date: '2026-07-18', amount: 240 },
  { name: 'Ice Cream Day', organizer: 'Lisa', date: '2026-06-27', amount: 310 },
  { name: 'Lap-a-thon', organizer: 'Lisa', date: '2026-06-13', amount: 1500 },
  { name: 'Ice Cream Day', organizer: 'Lisa', date: '2026-05-30', amount: 280 },
]

export const UPCOMING_FUNDRAISERS: UpcomingFundraiser[] = [
  {
    name: 'Fall Craft Fair',
    organizer: 'Lisa',
    date: '2026-10-17',
    description:
      'Handmade crafts, Christmas ornaments, poinsettias, and other Halloween and holiday gifts for sale',
  },
]

export const PAST_FUNDRAISERS_TOTAL = PAST_FUNDRAISERS.reduce(
  (sum, f) => sum + f.amount,
  0,
)
