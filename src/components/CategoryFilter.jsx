import { giftCategoryLabels } from '../data/giftRegistry'

const keys = Object.keys(giftCategoryLabels)

export default function CategoryFilter({ active, onChange }) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Filtrar por categoria"
    >
      <button
        type="button"
        role="tab"
        aria-selected={active === 'all'}
        onClick={() => onChange('all')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          active === 'all'
            ? 'bg-olive text-white shadow-md'
            : 'border border-cream-dark bg-white/80 text-stone hover:border-olive/40'
        }`}
      >
        Todas
      </button>
      {keys.map((key) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={active === key}
          onClick={() => onChange(key)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            active === key
              ? 'bg-olive text-white shadow-md'
              : 'border border-cream-dark bg-white/80 text-stone hover:border-olive/40'
          }`}
        >
          {giftCategoryLabels[key]}
        </button>
      ))}
    </div>
  )
}
