export interface BudgetLineItem {
  label: string
  amount: number
}

export interface BudgetCategory {
  label: string
  description: string
  items: BudgetLineItem[]
}

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    label: 'Play structures & equipment',
    description:
      'A more elaborate play system for ages 5–12: dual towers, a climbing wall, bridge, slide, fireman\'s pole, spring riders, spinner, and seesaw',
    items: [
      { label: 'Primary play tower (ages 8–12, roofed deck with slide & fireman\'s pole)', amount: 30000 },
      { label: 'Secondary climbing tower (ages 5–7, climbing wall entry)', amount: 14000 },
      { label: 'Connecting bridge between towers', amount: 4000 },
      { label: 'Spring riders (2)', amount: 3000 },
      { label: 'Standalone spinner', amount: 2500 },
      { label: 'Seesaw', amount: 1500 },
      { label: 'Monkey bars add-on', amount: 2000 },
      { label: 'Freight & delivery', amount: 3000 },
    ],
  },
  {
    label: 'Installation & labor',
    description: 'Certified crew to assemble, anchor, and safety-check all equipment',
    items: [
      { label: 'Certified installation crew (labor)', amount: 9500 },
      { label: 'Equipment anchoring & concrete footings', amount: 2500 },
      { label: 'Post-install safety inspection & certification', amount: 1000 },
    ],
  },
  {
    label: 'Safety surfacing',
    description: 'ASTM-compliant engineered wood fiber mulch under and around all equipment',
    items: [
      { label: 'Engineered wood fiber mulch (material)', amount: 5000 },
      { label: 'Surfacing installation & compaction', amount: 2000 },
      { label: 'ASTM fall-height compliance testing', amount: 1000 },
    ],
  },
  {
    label: 'Site preparation & grading',
    description: 'Clearing, grading, and drainage prep for the play area footprint',
    items: [
      { label: 'Clearing & tree/root removal', amount: 1500 },
      { label: 'Excavation & grading', amount: 2500 },
      { label: 'Subgrade drainage prep', amount: 1000 },
    ],
  },
  {
    label: 'ADA-accessible pathways',
    description: 'Accessible route connecting parking, seating, and the play area',
    items: [
      { label: 'Poured concrete accessible path', amount: 5000 },
      { label: 'Accessible transfer point at play structure', amount: 1500 },
      { label: 'Path signage', amount: 500 },
    ],
  },
  {
    label: 'Borders & drainage',
    description: 'Containment edging and subsurface drainage under the surfacing',
    items: [
      { label: 'Playground border / edging', amount: 3500 },
      { label: 'Subsurface drainage piping & gravel base', amount: 2000 },
      { label: 'Weed barrier fabric', amount: 500 },
    ],
  },
  {
    label: 'Shade structure',
    description: 'Fabric shade sail over the main play structure',
    items: [
      { label: 'Shade sail fabric & hardware', amount: 3500 },
      { label: 'Steel posts & footings', amount: 2000 },
      { label: 'Installation labor', amount: 500 },
    ],
  },
  {
    label: 'Benches & site furnishings',
    description: 'Benches, trash receptacles, and a bike rack for parents and caregivers',
    items: [
      { label: 'Park benches (3)', amount: 2400 },
      { label: 'Trash & recycling receptacles (2)', amount: 1200 },
      { label: 'Bike rack', amount: 600 },
      { label: 'Furnishing installation', amount: 800 },
    ],
  },
  {
    label: 'Design, engineering & permits',
    description: 'Site plan, safety review, and permitting fees',
    items: [
      { label: 'Site plan & landscape design', amount: 1500 },
      { label: 'Structural / engineering review', amount: 1000 },
      { label: 'Municipal permit fees', amount: 500 },
    ],
  },
  {
    label: 'Contingency',
    description: 'Buffer for material cost changes and unforeseen site conditions',
    items: [
      { label: 'Material price contingency', amount: 1200 },
      { label: 'Unforeseen site conditions', amount: 800 },
    ],
  },
]

export function categoryTotal(category: BudgetCategory): number {
  return category.items.reduce((sum, item) => sum + item.amount, 0)
}

export const BUDGET_TOTAL = BUDGET_CATEGORIES.reduce(
  (sum, category) => sum + categoryTotal(category),
  0,
)
