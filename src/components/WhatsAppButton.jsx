import { FaWhatsapp } from 'react-icons/fa'
import { createWhatsAppLink } from '../utils/whatsapp'

export default function WhatsAppButton({
  phone,
  productName,
  className = '',
  children,
  variant = 'solid',
}) {
  const href = createWhatsAppLink(phone, productName)

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive'

  const styles =
    variant === 'solid'
      ? 'bg-olive px-4 py-2.5 text-sm text-white shadow-md hover:bg-olive-dark'
      : 'border border-olive/30 bg-white/80 px-4 py-2.5 text-sm text-olive hover:border-olive hover:bg-cream'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
      {children ?? 'Presentear via WhatsApp'}
    </a>
  )
}
