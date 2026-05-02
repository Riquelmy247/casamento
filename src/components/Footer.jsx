import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'
import { createWhatsAppUrl } from '../utils/whatsapp'

function formatDisplayDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(y, m - 1, d))
}

export default function Footer() {
  const { names, weddingDate, whatsapp } = siteConfig.couple
  const generalWa = createWhatsAppUrl(
    whatsapp,
    'Olá! Gostaria de tirar uma dúvida sobre o casamento. ❤️',
  )

  return (
    <footer className="border-t border-cream-dark/60 bg-cream/50">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <p className="font-display text-2xl font-semibold text-olive">{names}</p>
        <p className="mt-2 text-sm text-stone-light">{formatDisplayDate(weddingDate)}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={generalWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-olive/25 bg-white px-5 py-2.5 text-sm font-medium text-olive shadow-sm transition hover:border-olive"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden />
            WhatsApp
          </a>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-stone">
          {siteConfig.footer.thanks}
        </p>
        <p className="mt-8 text-xs text-stone-light">Feito com carinho para nossos convidados.</p>
      </div>
    </footer>
  )
}
