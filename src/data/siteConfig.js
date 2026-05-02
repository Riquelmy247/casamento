// Arquivos em public/images/ — URLs começam com /images/
const IMAGENS = {
  capa: '/images/capa.jpg',
  nossaHistoria: '/images/nossa-historia.jpg',
}

export const siteConfig = {
  couple: {
    names: 'Riquelmy & Annaylle',
    weddingDate: '2027-03-13',
    weddingTime: '16:30',
    location: 'Uberlândia, MG',
    venueName: 'Chácara Spaço Verde',
    venueAddress: 'Anel Viário St. Oeste - Luizote de Freitas, Uberlândia - MG',
    whatsapp: '5534992308318',
  },
  theme: {
    primary: '#6B7A46',
    cream: '#F5F1EA',
    muted: '#9A958C',
  },
  imagens: IMAGENS,
  hero: {
    title: 'Estamos nos casando!',
    subtitle: 'E queremos compartilhar esse momento com você.',
    image: '/images/foto.jpg',
    imageAlt: 'Foto do casal — capa do site',
  },
  about: {
    title: 'Nossa História',
    text: 'Nos conhecemos em um fim de tarde de primavera e, desde então, cada conversa virou plano, cada plano virou risada e cada risada nos lembrou de que o amor é simples quando é verdadeiro. Hoje celebramos a escolha de caminharmos juntos e queremos que você faça parte desse capítulo.',
    image: '/images/foto1.jpg',
    imageAlt: 'Foto do casal — nossa história',
  },
  wedding: {
    title: 'Informações do Casamento',
    mapEmbedUrl:
      'https://www.google.com/maps?q=-18.9117274,-48.3500254&z=17&output=embed',
  },
  footer: {
    thanks:
      'Obrigado por fazer parte da nossa história. Mal podemos esperar para celebrar com você!',
  },
}
