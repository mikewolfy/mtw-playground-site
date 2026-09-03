interface Props {
  raised: number
  goal: number
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function ProgressThermometer({ raised, goal }: Props) {
  const pct = goal > 0 ? Math.min(100, (raised / goal) * 100) : 0

  return (
    <div className="thermometer">
      <div className="thermometer-labels">
        <span className="thermometer-raised">{currency.format(raised)} raised</span>
        <span className="thermometer-goal">Goal: {currency.format(goal)}</span>
      </div>
      <div
        className="thermometer-track"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Fundraising progress"
      >
        <div className="thermometer-fill" style={{ width: `${pct}%` }}>
          {pct > 12 && <span className="thermometer-pct">{pct.toFixed(0)}%</span>}
        </div>
      </div>
      {pct <= 12 && <div className="thermometer-pct-outside">{pct.toFixed(0)}%</div>}
    </div>
  )
}
