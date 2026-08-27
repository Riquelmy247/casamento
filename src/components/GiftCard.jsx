import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'
import WhatsAppButton from './WhatsAppButton'

const placeholder =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#F5F1EA" width="400" height="240"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9A958C" font-family="system-ui" font-size="14">Imagem ilustrativa</text></svg>`,
  )

export default function GiftCard({ item, index = 0 }) {
  const { whatsapp } = siteConfig.couple
  const img = item.image?.trim() ? item.image : placeholder
  const jaPresenteado = String(item.presentiado ?? 'Não').trim().toLowerCase() === 'sim'
  const presenteadoPor = String(item.presenteadoPor ?? '').trim()
  const linkLabel = item.linkLabel ?? 'Exemplo'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35) }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-md ring-olive/0 transition ${
        jaPresenteado
          ? 'border-stone/20 opacity-[0.72] grayscale'
          : 'border-cream-dark/80 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-olive/15'
      }`}
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-cream">
        <img
          src={img}
          alt=""
          className={`h-full w-full object-cover transition duration-500 ${jaPresenteado ? '' : 'group-hover:scale-105'}`}
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-olive shadow-sm backdrop-blur-sm">
          {item.category}
        </span>
        {jaPresenteado ? (
          <span className="absolute right-3 top-3 rounded-full bg-stone-700/90 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            Já presenteado
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl font-semibold text-stone">{item.name}</h3>
          {item.notes ? (
            <p className="mt-1 text-sm leading-relaxed text-stone-light">{item.notes}</p>
          ) : null}
          {jaPresenteado && presenteadoPor ? (
            <p className="mt-2 text-sm text-stone">
              Presenteado por <span className="font-medium text-olive">{presenteadoPor}</span>
            </p>
          ) : null}
        </div>
        <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {jaPresenteado ? (
            <span
              className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-stone/20 bg-stone-100 px-4 py-2.5 text-sm font-medium text-stone-light"
              aria-label="Este presente já foi presenteado; o link não está mais disponível."
            >
              {presenteadoPor ? `Presente de ${presenteadoPor}` : 'Presenteado ✅'}
            </span>
          ) : (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-stone/15 bg-cream/60 px-4 py-2.5 text-sm font-medium text-stone transition hover:border-olive/40 hover:bg-white"
            >
              {linkLabel}
              <FaExternalLinkAlt className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </a>
          )}
          {jaPresenteado ? null : <WhatsAppButton phone={whatsapp} productName={item.name} className="flex-1" />}
        </div>
      </div>
    </motion.article>
  )
}
