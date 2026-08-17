import { useEffect, useState } from 'react'

const formatIST = () =>
  new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())

// Live-updating local time in Hyderabad — a small, honest signal to recruiters
// in other timezones of when Chakri is actually online.
export const useISTClock = () => {
  const [time, setTime] = useState(formatIST)

  useEffect(() => {
    const id = setInterval(() => setTime(formatIST()), 30_000)
    return () => clearInterval(id)
  }, [])

  return time
}
