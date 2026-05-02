import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { siteConfig } from '../data/siteConfig'

const links = [
  { to: '#hero', label: 'Início' },
  { to: '#historia', label: 'História' },
  { to: '#evento', label: 'Evento' },
  { to: '#presentes', label: 'Presentes' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href={import.meta.env.BASE}
          className="font-display text-lg font-semibold tracking-wide text-olive sm:text-xl"
        >
          {siteConfig.couple.names}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="text-sm font-medium text-stone transition hover:text-olive"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-xl border border-cream-dark/80 bg-white/80 p-2 text-stone backdrop-blur md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div
        className={`mx-4 mt-2 overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-lg backdrop-blur-md transition-all md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="rounded-xl px-4 py-3 text-sm font-medium text-stone hover:bg-cream"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-white via-white/90 to-transparent transition-opacity ${
          scrolled ? 'opacity-100' : 'opacity-70'
        }`}
        aria-hidden
      />
    </header>
  )
}
