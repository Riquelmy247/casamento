export const createWhatsAppLink = (phone, productName) => {
  const message = `Olá! Gostaria de presentear vocês com: ${productName}.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const createWhatsAppUrl = (phone, text) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
