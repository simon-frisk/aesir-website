export default function CounterAnimation({ label, countTo }) {
  return (
    <div>
      <span style={{ fontSize: '2em' }}>{countTo}</span>
      <p style={{ margin: 0 }}>{label}</p>
    </div>
  )
}
