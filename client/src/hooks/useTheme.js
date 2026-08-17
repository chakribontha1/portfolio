import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

// India runs on IST (UTC+5:30) with no DST — safe to compute as a fixed offset.
const getISTHour = () => {
  const now = new Date()
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000
  const ist = new Date(utcMs + 5.5 * 60 * 60 * 1000)
  return ist.getHours()
}

// Daytime in Hyderabad (6am–6pm IST) reads light; otherwise dark — matches
// when Chakri is actually online, so the site quietly reflects local time.
const timeBasedTheme = () => {
  const hour = getISTHour()
  return hour >= 6 && hour < 18 ? 'light' : 'dark'
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem(STORAGE_KEY) || timeBasedTheme()
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  // Only reflects `theme` visually here — does NOT write to localStorage.
  // A visit with no explicit choice should keep re-evaluating IST on every
  // load, not get locked into whatever the clock happened to read once.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, toggle }
}
