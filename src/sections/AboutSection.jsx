import { motion } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'

export default function AboutSection() {
  const { about } = siteConfig

  return (
    <section id="historia" className="bg-page-pattern py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">
            Um pouco sobre nós
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-stone md:text-5xl">
            {about.title}
          </h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="absolute -left-4 top-8 hidden h-40 w-40 rounded-full border border-olive/20 lg:block" />
            <div className="overflow-hidden rounded-2xl border border-cream-dark/60 shadow-xl">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-2xl p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-stone md:text-xl">{about.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
