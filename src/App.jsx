import { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import WeddingInfoSection from './sections/WeddingInfoSection'
import GiftRegistrySection from './sections/GiftRegistrySection'
import { siteConfig } from './data/siteConfig'
import { createWhatsAppUrl } from './utils/whatsapp'

export default function App() {
  useEffect(() => {
    document.title = `${siteConfig.couple.names} — Casamento`
  }, [])

  const wa = createWhatsAppUrl(
    siteConfig.couple.whatsapp,
    'Olá! Vim pelo site do casamento. ❤️',
  )

  return (
    <div className="bg-page-pattern min-h-svh">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WeddingInfoSection />
        <GiftRegistrySection />
      </main>
      <Footer />

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-olive text-white shadow-xl ring-2 ring-white/80 transition hover:scale-105 hover:bg-olive-dark md:bottom-8 md:right-8"
        aria-label="Conversar no WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  )
}
