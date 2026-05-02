import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'
import Countdown from '../components/Countdown'

export default function HeroSection() {
  const { couple, hero } = siteConfig

  const scrollToGifts = () => {
    document.getElementById('presentes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-cream/40 pt-24 pb-16 md:pt-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-olive/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-cream-dark/80 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive">
            {couple.location}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-stone sm:text-5xl lg:text-6xl">
            {couple.names}
          </h1>
          <p className="font-display text-2xl italic text-olive/90 sm:text-3xl">{hero.title}</p>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-light lg:mx-0">
            {hero.subtitle}
          </p>

          <div className="mx-auto mt-10 max-w-lg lg:mx-0">
            <Countdown weddingDate={couple.weddingDate} weddingTime={couple.weddingTime} />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={scrollToGifts}
              className="inline-flex items-center gap-2 rounded-full bg-olive px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:bg-olive-dark"
            >
              Lista de presentes
              <FaChevronDown className="h-3.5 w-3.5" aria-hidden />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-olive/20 via-transparent to-cream-dark/60 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 shadow-2xl ring-1 ring-stone/5">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:aspect-[4/5]"
                fetchPriority="high"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
