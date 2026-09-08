import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaHeart } from 'react-icons/fa'
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
      className={`group flex h-full flex-col overflow-hidden rounded-[1.6rem] border bg-white shadow-md transition ${
        jaPresenteado
          ? 'border-olive/25 shadow-olive/10'
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
        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-medium tracking-wide text-olive shadow-sm backdrop-blur-sm">
          {item.category}
        </span>
        {jaPresenteado ? (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-olive px-3 py-1 text-xs font-medium text-white shadow-sm">
            <FaHeart className="h-2.5 w-2.5" aria-hidden />
            Já presenteado
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="min-h-[4.75rem]">
          <h3 className="line-clamp-2 font-display text-xl font-semibold leading-snug text-stone">
            {item.name}
          </h3>
          <p className="mt-1.5 line-clamp-1 text-sm leading-relaxed text-stone-light">
            {item.notes || '\u00A0'}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2.5">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-stone/15 bg-cream/70 px-4 text-sm font-medium text-stone transition hover:border-olive/40 hover:bg-white"
          >
            {linkLabel}
            <FaExternalLinkAlt className="h-3 w-3 opacity-70" aria-hidden />
          </a>

          {jaPresenteado ? (
            <div
              className="flex h-[4.5rem] flex-col items-center justify-center rounded-2xl border border-olive/20 bg-gradient-to-br from-olive/10 to-cream px-3 text-center"
              aria-label="Este presente já foi presenteado."
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-olive">
                Presente de
              </p>
              <p className="mt-0.5 line-clamp-2 font-display text-base font-semibold leading-tight text-olive-dark">
                {presenteadoPor || 'Alguém especial'}
              </p>
            </div>
          ) : (
            <WhatsAppButton
              phone={whatsapp}
              productName={item.name}
              className="h-[4.5rem] w-full"
            />
          )}
        </div>
      </div>
    </motion.article>
  )
}
