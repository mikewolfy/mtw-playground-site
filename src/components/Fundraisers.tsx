import { PAST_FUNDRAISERS, PAST_FUNDRAISERS_TOTAL, UPCOMING_FUNDRAISERS } from '../data/fundraisers'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

export default function Fundraisers() {
  const past = [...PAST_FUNDRAISERS].sort((a, b) => b.date.localeCompare(a.date))
  const upcoming = [...UPCOMING_FUNDRAISERS].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <div className="fundraisers">
      <h2>Neighborhood fundraisers</h2>
      <p className="fundraisers-intro">
        Beyond online gifts, Queensmill families have been raising money in
        person too. Every dollar counts toward the goal above.
      </p>

      <h3 className="fundraisers-subhead">Past fundraisers</h3>
      <ul className="fundraiser-list">
        {past.map((f, i) => (
          <li className="fundraiser-item" key={`${f.name}-${f.date}-${i}`}>
            <div className="fundraiser-item-main">
              <span className="fundraiser-name">{f.name}</span>
              <span className="fundraiser-amount">{currency.format(f.amount)}</span>
            </div>
            <div className="fundraiser-meta">
              {dateFormat.format(new Date(f.date))} &middot; Organized by {f.organizer}
            </div>
          </li>
        ))}
      </ul>
      <div className="fundraiser-total">
        <span>Raised through past fundraisers</span>
        <span>{currency.format(PAST_FUNDRAISERS_TOTAL)}</span>
      </div>

      <h3 className="fundraisers-subhead">Upcoming fundraisers</h3>
      {upcoming.length > 0 ? (
        <ul className="fundraiser-list">
          {upcoming.map((f, i) => (
            <li className="fundraiser-item" key={`${f.name}-${f.date}-${i}`}>
              <div className="fundraiser-item-main">
                <span className="fundraiser-name">{f.name}</span>
              </div>
              <div className="fundraiser-meta">
                {dateFormat.format(new Date(f.date))} &middot; Organized by {f.organizer}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="fundraisers-empty">
          Nothing on the calendar yet — check back soon, or reach out if you'd
          like to organize one!
        </p>
      )}
    </div>
  )
}
