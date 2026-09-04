const QUOTES = [
  {
    text: "Play is often talked about as if it were a relief from serious learning. But for children, play is serious learning.",
    author: 'Fred Rogers',
  },
  {
    text: 'Play is the work of childhood.',
    author: 'Jean Piaget, developmental psychologist',
  },
  {
    text: "Play is our brain's favorite way of learning.",
    author: 'Diane Ackerman, author of Deep Play',
  },
]

export default function PlayQuotes() {
  return (
    <div className="quotes">
      <div className="quotes-grid">
        {QUOTES.map((q) => (
          <blockquote className="quote-card" key={q.author}>
            <p>“{q.text}”</p>
            <cite>— {q.author}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
