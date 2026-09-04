import { UPCOMING_FUNDRAISERS } from '../data/fundraisers'
import FundraiserIconGraphic from './FundraiserIcons'

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
})

export default function UpcomingFundraiserWidgets() {
  const upcoming = [...UPCOMING_FUNDRAISERS].sort((a, b) => a.date.localeCompare(b.date))

  if (upcoming.length === 0) return null

  return (
    <div className="upcoming-widgets">
      <p className="upcoming-widgets-kicker">Save the date</p>
      <div className="upcoming-widgets-row">
        {upcoming.map((f) => (
          <div className="upcoming-widget" key={`${f.name}-${f.date}`}>
            <div className="upcoming-widget-icon">
              <FundraiserIconGraphic icon={f.icon} />
            </div>
            <div className="upcoming-widget-body">
              <span className="upcoming-widget-name">{f.name}</span>
              <span className="upcoming-widget-date">{dateFormat.format(new Date(f.date))}</span>
              <span className="upcoming-widget-organizer">Organized by {f.organizer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
