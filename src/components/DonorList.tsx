import type { Donation } from '../types'

interface Props {
  donations: Donation[]
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
})

export default function DonorList({ donations }: Props) {
  const sorted = [...donations].sort((a, b) => b.date.localeCompare(a.date))

  if (sorted.length === 0) {
    return (
      <div className="donor-list-empty">
        No gifts logged yet — be the first to add one below!
      </div>
    )
  }

  return (
    <ul className="donor-list">
      {sorted.map((d) => (
        <li className="donor-item" key={d.id}>
          <div className="donor-item-main">
            <span className="donor-name">{d.anonymous ? 'Anonymous' : d.name}</span>
            <span className="donor-amount">{currency.format(d.amount)}</span>
          </div>
          {d.message && <div className="donor-message">"{d.message}"</div>}
          <div className="donor-date">{dateFormat.format(new Date(d.date))}</div>
        </li>
      ))}
    </ul>
  )
}
