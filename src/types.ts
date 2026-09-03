export interface Donation {
  id: string
  name: string
  amount: number
  message?: string
  anonymous: boolean
  date: string // ISO date
}

export interface FundState {
  goal: number
  donations: Donation[]
}

export interface Milestone {
  amount: number
  label: string
}
