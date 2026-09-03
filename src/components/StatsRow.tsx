interface Props {
  raised: number
  goal: number
  donorCount: number
  averageGift: number
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function StatsRow({ raised, goal, donorCount, averageGift }: Props) {
  const remaining = Math.max(0, goal - raised)
  const stats = [
    { label: 'Donors', value: donorCount.toString() },
    { label: 'Average gift', value: currency.format(averageGift || 0) },
    { label: 'Still needed', value: currency.format(remaining) },
  ]

  return (
    <div className="stats-row">
      {stats.map((s) => (
        <div className="stat-card" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
