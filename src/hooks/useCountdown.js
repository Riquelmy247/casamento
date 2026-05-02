import { useEffect, useMemo, useState } from 'react'

function parseTarget(dateStr, timeStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const [hh, mm] = (timeStr || '00:00').split(':').map(Number)
  return new Date(y, m - 1, d, hh || 0, mm || 0, 0, 0).getTime()
}

function getRemaining(targetMs) {
  const now = Date.now()
  const diff = Math.max(0, targetMs - now)
  const isPast = targetMs <= now

  const seconds = Math.floor((diff / 1000) % 60)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24)
  const days = Math.floor(diff / 1000 / 60 / 60 / 24)

  return { days, hours, minutes, seconds, isPast, totalMs: diff }
}

export function useCountdown(weddingDate, weddingTime = '00:00') {
  const targetMs = useMemo(
    () => parseTarget(weddingDate, weddingTime),
    [weddingDate, weddingTime],
  )

  const [remaining, setRemaining] = useState(() => getRemaining(targetMs))

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(targetMs))
    const id = setInterval(tick, 1000)
    queueMicrotask(tick)
    return () => clearInterval(id)
  }, [targetMs])

  return remaining
}
