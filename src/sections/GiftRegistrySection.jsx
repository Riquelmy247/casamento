import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineSearch } from 'react-icons/hi'
import CategoryFilter from '../components/CategoryFilter'
import GiftCard from '../components/GiftCard'
import { giftCategoryKeys, giftCategoryLabels, giftRegistry } from '../data/giftRegistry'

function matchesQuery(item, q) {
  if (!q) return true
  return item.name.toLowerCase().includes(q)
}

export default function GiftRegistrySection() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()

  const mode = useMemo(() => {
    if (q) return 'flat'
    if (category === 'all') return 'grouped'
    return 'single'
  }, [q, category])

  const flatItems = useMemo(() => {
    const keys = category === 'all' ? giftCategoryKeys : [category]
    return keys.flatMap((key) =>
      (giftRegistry[key] ?? []).filter((item) => matchesQuery(item, q)),
    )
  }, [category, q])

  const groupedBlocks = useMemo(() => {
    return giftCategoryKeys
      .map((key) => ({
        key,
        label: giftCategoryLabels[key],
        items: (giftRegistry[key] ?? []).filter((item) => matchesQuery(item, q)),
      }))
      .filter((block) => block.items.length > 0)
  }, [q])

  return (
    <section id="presentes" className="bg-page-pattern py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">
            Com muito carinho
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-stone md:text-5xl">
            Lista de presentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-light">
            Sua presença é o nosso maior presente. Se desejar nos presentear, deixamos algumas
            sugestões organizadas por ambiente — fique à vontade!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-12 max-w-xl"
        >
          <label className="relative block">
            <span className="sr-only">Buscar presente</span>
            <HiOutlineSearch
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-light"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome do presente..."
              className="w-full rounded-full border border-cream-dark bg-white/90 py-3.5 pl-12 pr-4 text-sm text-stone shadow-sm outline-none ring-olive/0 transition placeholder:text-stone-light focus:border-olive/40 focus:ring-2 focus:ring-olive/20"
            />
          </label>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        <div className="mt-14">
          {mode === 'grouped' ? (
            <div className="space-y-16">
              {groupedBlocks.map((block) => (
                <motion.div
                  key={block.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cream-dark" />
                    <h3 className="font-display text-2xl font-semibold text-olive md:text-3xl">
                      {block.label}
                    </h3>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cream-dark" />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {block.items.map((item, i) => (
                      <GiftCard key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              {mode === 'flat' ? (
                <h3 className="mb-8 text-center font-display text-2xl font-semibold text-olive">
                  {q ? 'Resultados da busca' : 'Presentes'}
                </h3>
              ) : (
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cream-dark" />
                  <h3 className="font-display text-2xl font-semibold text-olive md:text-3xl">
                    {giftCategoryLabels[category]}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cream-dark" />
                </div>
              )}

              {flatItems.length === 0 ? (
                <p className="text-center text-stone-light">
                  Nenhum presente encontrado com esses filtros.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {flatItems.map((item, i) => (
                    <GiftCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
