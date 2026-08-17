import { useEffect, useState } from 'react'
import { HiCalendar, HiGift, HiHeart, HiHome, HiUsers } from 'react-icons/hi'
import { siteConfig } from '../data/siteConfig'

const links = [
  { to: '#hero', label: 'Início', icon: HiHome },
  { to: '#historia', label: 'História', icon: HiHeart },
  { to: '#evento', label: 'Evento', icon: HiCalendar },
  { to: '#padrinhos', label: 'Padrinhos', icon: HiUsers },
  { to: '#presentes', label: 'Presentes', icon: HiGift },
]

export default function Header() {
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

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex" aria-label="Principal">
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
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-white via-white/90 to-transparent transition-opacity ${
          scrolled ? 'opacity-100' : 'opacity-70'
        }`}
        aria-hidden
      />

      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-cream-dark/80 bg-white/92 backdrop-blur-md md:hidden"
        aria-label="Navegação mobile"
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {links.map(({ to, label, icon: Icon }) => (
            <a
              key={to}
              href={to}
              className="flex flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-1 text-stone-light transition-colors active:text-olive"
            >
              <Icon className="h-5 w-5" aria-hidden />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
