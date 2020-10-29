import { useEffect, useState } from "react"

export default function CounterAnimation({ label, countTo }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const callback = () => {
      if(value < countTo) setValue(value + 1)
    }
    const time = calculateTime(countTo, value)
    setTimeout(callback, time)
  }, [value])

  

  return (
    <div>
      <span style={{ fontSize: '2em' }}>{value}</span>
      <p style={{ margin: 0 }}>{label}</p>
    </div>
  )
}

function calculateTime(countTo, current) {
  // Calculate the time to next increment in the counter animation
  const totalTime = 2500
  const avgTime = totalTime / countTo
  const offset = (current - (countTo / 2)) / (countTo / 2) * avgTime
  const time = avgTime + offset
  return time
}
