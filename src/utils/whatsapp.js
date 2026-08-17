export const createWhatsAppLink = (phone, productName) => {
  const message = `Olá! Gostaria de presentear vocês com: ${productName}.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const createWhatsAppUrl = (phone, text) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

export function formatPhoneDisplay(phone) {
  const digits = String(phone).replace(/\D/g, '')
  const local = digits.startsWith('55') ? digits.slice(2) : digits
  if (local.length === 11) {
    return `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`
  }
  if (local.length === 10) {
    return `(${local.slice(0, 2)}) ${local.slice(2, 6)}-${local.slice(6)}`
  }
  return phone
}
