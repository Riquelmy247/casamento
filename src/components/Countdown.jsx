import { useCountdown } from '../hooks/useCountdown'

const pad = (n) => String(n).padStart(2, '0')

const units = [
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
]

export default function Countdown({ weddingDate, weddingTime, className = '' }) {
  const { days, hours, minutes, seconds, isPast } = useCountdown(weddingDate, weddingTime)

  if (isPast) {
    return (
      <p
        className={`text-center font-display text-xl font-medium text-olive ${className}`}
      >
        O grande dia chegou — obrigado por celebrar com a gente!
      </p>
    )
  }

  const values = { days, hours, minutes, seconds }

  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 ${className}`}
      role="timer"
      aria-live="polite"
    >
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="glass-panel rounded-2xl px-3 py-4 text-center shadow-md ring-1 ring-olive/10"
        >
          <span className="font-display text-3xl font-semibold text-olive sm:text-4xl">
            {key === 'seconds' || key === 'minutes' || key === 'hours'
              ? pad(values[key])
              : values[key]}
          </span>
          <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-stone-light">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
