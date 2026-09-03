import { useState, type FormEvent } from 'react'
import type { Donation } from '../types'

interface Props {
  onAdd: (donation: Donation) => void
}

export default function DonationForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const parsedAmount = Number(amount)

    if (!anonymous && name.trim() === '') {
      setError('Please add a name, or check "Give anonymously."')
      return
    }
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a gift amount greater than $0.')
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim() || 'Anonymous',
      amount: parsedAmount,
      message: message.trim() || undefined,
      anonymous,
      date: new Date().toISOString().slice(0, 10),
    })

    setName('')
    setAmount('')
    setMessage('')
    setAnonymous(false)
    setError(null)
  }

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <h2>Log a gift</h2>
      <div className="form-row">
        <label htmlFor="donor-name">Name</label>
        <input
          id="donor-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="The Smith Family"
          disabled={anonymous}
        />
      </div>
      <div className="form-row">
        <label htmlFor="donor-amount">Amount (USD)</label>
        <input
          id="donor-amount"
          type="number"
          inputMode="decimal"
          min="1"
          step="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="100"
        />
      </div>
      <div className="form-row">
        <label htmlFor="donor-message">Message (optional)</label>
        <input
          id="donor-message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Go team playground!"
        />
      </div>
      <div className="form-row form-row-checkbox">
        <label>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          Give anonymously
        </label>
      </div>
      {error && <div className="form-error">{error}</div>}
      <button type="submit">Add gift</button>
    </form>
  )
}
