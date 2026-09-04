export interface BudgetItem {
  label: string
  amount: number
  description: string
}

export const BUDGET_ITEMS: BudgetItem[] = [
  {
    label: 'Play structures & equipment',
    amount: 48000,
    description: 'Two play systems for ages 5–12: slides, climbers, and multiple entry points',
  },
  {
    label: 'Installation & labor',
    amount: 18000,
    description: 'Certified crew to assemble, anchor, and safety-check all equipment',
  },
  {
    label: 'Safety surfacing',
    amount: 12000,
    description: 'ASTM-compliant engineered wood fiber mulch under and around all equipment',
  },
  {
    label: 'Site preparation & grading',
    amount: 8000,
    description: 'Clearing, grading, and drainage prep for the play area footprint',
  },
  {
    label: 'ADA-accessible pathways',
    amount: 7000,
    description: 'Accessible route connecting parking, seating, and the play area',
  },
  {
    label: 'Borders & drainage',
    amount: 6000,
    description: 'Containment edging and subsurface drainage under the surfacing',
  },
  {
    label: 'Shade structure',
    amount: 6000,
    description: 'Fabric shade sail over the main play structure',
  },
  {
    label: 'Benches & site furnishings',
    amount: 5000,
    description: 'Benches, trash receptacles, and a bike rack for parents and caregivers',
  },
  {
    label: 'Design, engineering & permits',
    amount: 3000,
    description: 'Site plan, safety review, and permitting fees',
  },
  {
    label: 'Contingency',
    amount: 2000,
    description: 'Buffer for material cost changes and unforeseen site conditions',
  },
]

export const BUDGET_TOTAL = BUDGET_ITEMS.reduce((sum, item) => sum + item.amount, 0)
