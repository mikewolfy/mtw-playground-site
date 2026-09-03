import type { FundState } from './types'

const STORAGE_KEY = 'mtw-playground-fund-v1'

const SEED_STATE: FundState = {
  goal: 45000,
  donations: [
    {
      id: 'seed-1',
      name: 'The Alvarez Family',
      amount: 500,
      message: 'For the kids on Maple Court!',
      anonymous: false,
      date: '2026-06-12',
    },
    {
      id: 'seed-2',
      name: 'Anonymous',
      amount: 1000,
      anonymous: true,
      date: '2026-07-02',
    },
    {
      id: 'seed-3',
      name: 'Terrace West HOA',
      amount: 5000,
      message: 'Matching the first $5,000 raised.',
      anonymous: false,
      date: '2026-07-20',
    },
    {
      id: 'seed-4',
      name: 'Priya N.',
      amount: 150,
      anonymous: false,
      date: '2026-08-05',
    },
  ],
}

export function loadState(): FundState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return SEED_STATE
    const parsed = JSON.parse(raw) as FundState
    if (!Array.isArray(parsed.donations) || typeof parsed.goal !== 'number') {
      return SEED_STATE
    }
    return parsed
  } catch {
    return SEED_STATE
  }
}

export function saveState(state: FundState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
