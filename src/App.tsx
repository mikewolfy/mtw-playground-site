import { useEffect, useMemo, useState } from 'react'
import type { Donation, FundState } from './types'
import { loadState, saveState } from './storage'
import ProgressThermometer from './components/ProgressThermometer'
import StatsRow from './components/StatsRow'
import DonationForm from './components/DonationForm'
import DonorList from './components/DonorList'
import Milestones from './components/Milestones'
import BudgetBreakdown from './components/BudgetBreakdown'
import PlaygroundIllustration from './components/PlaygroundIllustration'
import './App.css'

export default function App() {
  const [state, setState] = useState<FundState>(() => loadState())
  const [editingGoal, setEditingGoal] = useState(false)
  const [goalInput, setGoalInput] = useState(String(state.goal))

  useEffect(() => {
    saveState(state)
  }, [state])

  const raised = useMemo(
    () => state.donations.reduce((sum, d) => sum + d.amount, 0),
    [state.donations],
  )

  const averageGift = state.donations.length > 0 ? raised / state.donations.length : 0

  function addDonation(donation: Donation) {
    setState((prev) => ({ ...prev, donations: [...prev.donations, donation] }))
  }

  function removeDonation(id: string) {
    setState((prev) => ({
      ...prev,
      donations: prev.donations.filter((d) => d.id !== id),
    }))
  }

  function saveGoal() {
    const parsed = Number(goalInput)
    if (Number.isFinite(parsed) && parsed > 0) {
      setState((prev) => ({ ...prev, goal: parsed }))
    }
    setEditingGoal(false)
  }

  return (
    <div className="page">
      <div className="hero-image">
        <PlaygroundIllustration />
      </div>
      <header className="hero">
        <h1>Queensmill Playground Fund</h1>
        <p className="tagline">
          Help us replace the old play structure at Queensmill Park with something
          our kids (and knees) deserve.
        </p>
        <ProgressThermometer raised={raised} goal={state.goal} />
        <StatsRow
          raised={raised}
          goal={state.goal}
          donorCount={state.donations.length}
          averageGift={averageGift}
        />
        <div className="goal-edit">
          {editingGoal ? (
            <span className="goal-edit-row">
              <input
                type="number"
                min="1"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                aria-label="Fundraising goal"
              />
              <button onClick={saveGoal}>Save goal</button>
              <button
                className="link-button"
                onClick={() => {
                  setGoalInput(String(state.goal))
                  setEditingGoal(false)
                }}
              >
                Cancel
              </button>
            </span>
          ) : (
            <button className="link-button" onClick={() => setEditingGoal(true)}>
              Edit goal
            </button>
          )}
        </div>
      </header>

      <main className="content">
        <section className="panel">
          <DonationForm onAdd={addDonation} />
        </section>

        <section className="panel">
          <Milestones raised={raised} goal={state.goal} />
        </section>

        <section className="panel panel-wide">
          <BudgetBreakdown />
        </section>

        <section className="panel panel-wide">
          <h2>Recent gifts</h2>
          <DonorList donations={state.donations} />
          {state.donations.length > 0 && (
            <details className="manage-gifts">
              <summary>Manage gifts</summary>
              <ul className="manage-list">
                {[...state.donations]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((d) => (
                    <li key={d.id}>
                      <span>
                        {d.anonymous ? 'Anonymous' : d.name} — ${d.amount}
                      </span>
                      <button className="link-button" onClick={() => removeDonation(d.id)}>
                        Remove
                      </button>
                    </li>
                  ))}
              </ul>
            </details>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>
          Data is stored in this browser only. Use "Manage gifts" to correct entries,
          and ask a neighbor to send you their numbers if you're tracking totals from
          multiple devices.
        </p>
      </footer>
    </div>
  )
}
