export default function CounterAnimation({ label, countTo }) {
  return (
    <div>
      <span style={{ fontSize: '2em' }}>{countTo}</span>
      <p>{label}</p>
    </div>
  )
}
