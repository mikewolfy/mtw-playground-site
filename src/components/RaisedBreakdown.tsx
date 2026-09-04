interface Props {
  onlineRaised: number
  fundraiserRaised: number
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function RaisedBreakdown({ onlineRaised, fundraiserRaised }: Props) {
  const total = onlineRaised + fundraiserRaised
  const onlinePct = total > 0 ? (onlineRaised / total) * 100 : 0
  const fundraiserPct = total > 0 ? (fundraiserRaised / total) * 100 : 0

  return (
    <div className="raised-breakdown">
      <div className="raised-breakdown-bar" aria-hidden="true">
        <div className="raised-breakdown-segment segment-online" style={{ width: `${onlinePct}%` }} />
        <div className="raised-breakdown-segment segment-fundraisers" style={{ width: `${fundraiserPct}%` }} />
      </div>
      <div className="raised-breakdown-legend">
        <span className="raised-breakdown-item">
          <span className="raised-breakdown-swatch swatch-online" />
          Online donations
          <strong>{currency.format(onlineRaised)}</strong>
        </span>
        <span className="raised-breakdown-item">
          <span className="raised-breakdown-swatch swatch-fundraisers" />
          Neighborhood fundraisers
          <strong>{currency.format(fundraiserRaised)}</strong>
        </span>
      </div>
    </div>
  )
}
