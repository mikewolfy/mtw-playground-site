import { BUDGET_CATEGORIES, BUDGET_TOTAL, categoryTotal } from '../data/budget'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function BudgetBreakdown() {
  const categories = [...BUDGET_CATEGORIES].sort((a, b) => categoryTotal(b) - categoryTotal(a))

  return (
    <div className="budget">
      <h2>How the funds will be used</h2>
      <p className="budget-intro">
        An itemized estimate for a new play area this size, based on typical costs for
        comparable community playground projects. Expand a category for the detailed
        line items.
      </p>
      <ul className="budget-list">
        {categories.map((category) => {
          const amount = categoryTotal(category)
          const pct = (amount / BUDGET_TOTAL) * 100
          return (
            <li className="budget-row" key={category.label}>
              <details>
                <summary>
                  <div className="budget-row-header">
                    <span className="budget-label">{category.label}</span>
                    <span className="budget-amount">
                      {currency.format(amount)}
                      <span className="budget-pct"> · {pct.toFixed(0)}%</span>
                    </span>
                  </div>
                  <div className="budget-track" aria-hidden="true">
                    <div className="budget-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="budget-description">{category.description}</p>
                </summary>
                <ul className="budget-items">
                  {category.items.map((item) => (
                    <li key={item.label} className="budget-item">
                      <span>{item.label}</span>
                      <span>{currency.format(item.amount)}</span>
                    </li>
                  ))}
                </ul>
              </details>
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
