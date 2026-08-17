import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaHeart, FaHourglassHalf, FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'
import { createWhatsAppUrl, formatPhoneDisplay } from '../utils/whatsapp'

function formatShortDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function formatDisplayTime(timeStr) {
  const [h, min] = timeStr.split(':')
  return min === '00' ? `${Number(h)}h` : `${Number(h)}h${min}`
}

function DressCard({ role, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark/80 bg-white shadow-md"
    >
      <div className="flex h-72 w-full shrink-0 items-center justify-center bg-cream/50 sm:h-96">
        <img
          src={role.image}
          alt={role.imageAlt}
          className="max-h-full max-w-full object-contain p-5 sm:p-8"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <h3 className="font-display text-3xl font-semibold text-olive">{role.title}</h3>
        <p className="text-sm leading-relaxed text-stone md:text-base">{role.intro}</p>
        <ul className="mt-auto space-y-2.5">
          {role.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-stone">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function PadrinhosSection() {
  const { couple, padrinhos, contacts } = siteConfig

  const highlights = [
    { icon: FaHourglassHalf, label: 'Chegada', value: padrinhos.arrival },
    { icon: FaCalendarAlt, label: 'Data', value: formatShortDate(couple.weddingDate) },
    { icon: FaClock, label: 'Horário', value: formatDisplayTime(couple.weddingTime) },
    { icon: FaHeart, label: 'O mais importante', value: padrinhos.note },
  ]

  return (
    <section id="padrinhos" className="bg-cream/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">
            Para quem caminha conosco
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-stone md:text-5xl">
            {padrinhos.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass-panel rounded-2xl p-5 text-center"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-olive/10 text-olive">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-stone-light">
                {label}
              </p>
              <p className="mt-1 font-medium leading-snug text-stone">{value}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-olive/15 bg-cream/60 px-8 py-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">Gratidão</p>
          <p className="mt-4 font-display text-2xl leading-relaxed text-stone italic md:text-3xl">
            “{padrinhos.gratitude}”
          </p>
        </motion.blockquote>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          <DressCard role={padrinhos.madrinha} />
          <DressCard role={padrinhos.padrinho} delay={0.08} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-20 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">
            Estamos por perto
          </span>
          <h3 className="mt-3 font-display text-3xl font-semibold text-stone md:text-4xl">
            {contacts.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-stone-light">{contacts.intro}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.people.map((person, i) => {
            const href = person.phone
              ? createWhatsAppUrl(person.phone, person.message)
              : null

            return (
              <motion.article
                key={person.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass-panel flex flex-col items-center rounded-2xl p-6 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-olive">
                  {person.role}
                </p>
                {person.name ? (
                  <p className="mt-2 font-display text-2xl font-semibold text-stone">
                    {person.name}
                  </p>
                ) : null}
                {person.phone ? (
                  <p className="mt-1 text-sm text-stone-light">{formatPhoneDisplay(person.phone)}</p>
                ) : (
                  <p className="mt-1 text-sm text-stone-light">Número em breve</p>
                )}
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-olive-dark"
                  >
                    <FaWhatsapp className="h-4 w-4" aria-hidden />
                    WhatsApp
                  </a>
                ) : null}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
