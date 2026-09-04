import { BUDGET_ITEMS, BUDGET_TOTAL } from '../data/budget'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function BudgetBreakdown() {
  const items = [...BUDGET_ITEMS].sort((a, b) => b.amount - a.amount)

  return (
    <div className="budget">
      <h2>How the funds will be used</h2>
      <p className="budget-intro">
        An itemized estimate for a new play area this size, based on typical costs for
        comparable community playground projects.
      </p>
      <ul className="budget-list">
        {items.map((item) => {
          const pct = (item.amount / BUDGET_TOTAL) * 100
          return (
            <li className="budget-row" key={item.label}>
              <div className="budget-row-header">
                <span className="budget-label">{item.label}</span>
                <span className="budget-amount">
                  {currency.format(item.amount)}
                  <span className="budget-pct"> · {pct.toFixed(0)}%</span>
                </span>
              </div>
              <div className="budget-track" aria-hidden="true">
                <div className="budget-fill" style={{ width: `${pct}%` }} />
              </div>
              <p className="budget-description">{item.description}</p>
            </li>
          )
        })}
      </ul>
      <div className="budget-total">
        <span>Total project budget</span>
        <span>{currency.format(BUDGET_TOTAL)}</span>
      </div>
    </div>
  )
}
