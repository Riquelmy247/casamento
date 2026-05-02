import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'
import Countdown from '../components/Countdown'

function formatLongDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(y, m - 1, d))
}

function formatTime(timeStr) {
  const [h, min] = timeStr.split(':').map(Number)
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(2000, 0, 1, h, min))
}

export default function WeddingInfoSection() {
  const { couple, wedding } = siteConfig
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(couple.venueAddress)}`

  return (
    <section id="evento" className="border-y border-cream-dark/50 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">
            Save the date
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-stone md:text-5xl">
            {wedding.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel flex gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive">
                <FaCalendarAlt className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-light">
                  Data
                </p>
                <p className="mt-1 capitalize text-stone">{formatLongDate(couple.weddingDate)}</p>
              </div>
            </div>

            <div className="glass-panel flex gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive">
                <FaClock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-light">
                  Horário
                </p>
                <p className="mt-1 text-stone">{formatTime(couple.weddingTime)}</p>
              </div>
            </div>

            <div className="glass-panel flex gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive">
                <FaMapMarkerAlt className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-light">
                  Local
                </p>
                <p className="mt-1 font-medium text-stone">{couple.venueName}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-light">
                  {couple.venueAddress}
                </p>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-olive underline-offset-4 hover:underline"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="mb-4 text-center text-sm font-medium text-stone-light">
                Contagem regressiva
              </p>
              <Countdown weddingDate={couple.weddingDate} weddingTime={couple.weddingTime} />
            </div>

            <div className="overflow-hidden rounded-2xl border border-cream-dark/60 shadow-lg">
              <iframe
                title="Mapa do local"
                src={wedding.mapEmbedUrl}
                className="aspect-video w-full grayscale-[20%] contrast-[0.95] sm:min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
