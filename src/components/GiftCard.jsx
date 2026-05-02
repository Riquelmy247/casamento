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

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35) }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark/80 bg-white shadow-md ring-olive/0 transition hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-olive/15"
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-cream">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-olive shadow-sm backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl font-semibold text-stone">{item.name}</h3>
          {item.notes ? (
            <p className="mt-1 text-sm leading-relaxed text-stone-light">{item.notes}</p>
          ) : null}
        </div>
        <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-stone/15 bg-cream/60 px-4 py-2.5 text-sm font-medium text-stone transition hover:border-olive/40 hover:bg-white"
          >
            Ver produto
            <FaExternalLinkAlt className="h-3.5 w-3.5 opacity-70" aria-hidden />
          </a>
          <WhatsAppButton phone={whatsapp} productName={item.name} className="flex-1" />
        </div>
      </div>
    </motion.article>
  )
}
