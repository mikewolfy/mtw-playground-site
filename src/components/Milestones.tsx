import type { Milestone } from '../types'

interface Props {
  raised: number
  goal: number
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function buildMilestones(goal: number): Milestone[] {
  return [
    { amount: Math.round(goal * 0.15), label: 'Site survey & permits' },
    { amount: Math.round(goal * 0.4), label: 'Order play structure & safety surfacing' },
    { amount: Math.round(goal * 0.75), label: 'Installation crew booked' },
    { amount: goal, label: 'Ribbon-cutting! 🎉' },
  ]
}

export default function Milestones({ raised, goal }: Props) {
  const milestones = buildMilestones(goal)

  return (
    <div className="milestones">
      <h2>Milestones</h2>
      <ul className="milestone-list">
        {milestones.map((m) => {
          const reached = raised >= m.amount
          return (
            <li key={m.label} className={reached ? 'milestone reached' : 'milestone'}>
              <span className="milestone-marker">{reached ? '✓' : ''}</span>
              <span className="milestone-label">{m.label}</span>
              <span className="milestone-amount">{currency.format(m.amount)}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
