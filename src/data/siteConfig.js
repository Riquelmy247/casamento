const IMAGENS = {
  capa: './foto.jpg',
  nossaHistoria: './foto1.jpg',
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
    image: './foto.jpg',
    imageAlt: 'Foto do casal — capa do site',
  },
  about: {
    title: 'Nossa História',
    text: 'Uma história que começou na adolescência, quando dois corações se encontraram e descobriram que o amor podia ser lar. Entre sonhos, risadas e planos, fomos crescendo juntos e aprendendo que o melhor de nós só existe quando estamos um ao lado do outro. Celebramos não apenas um dia, mas a promessa de uma vida inteira feita de amor e fé. Obrigado por fazerem parte desse novo capítulo.',
    image: './foto1.jpg',
    imageAlt: 'Foto do casal — nossa história',
  },
  wedding: {
    title: 'Informações do Casamento',
    mapEmbedUrl:
      'https://www.google.com/maps?q=-18.9117274,-48.3500254&z=17&output=embed',
  },
  padrinhos: {
    title: 'Manual dos Padrinhos',
    arrival: 'Chegar com 1 hora de antecedência',
    note: 'Emocionem-se conosco e divirtam-se',
    gratitude:
      'O nosso dia está se aproximando, e desejamos que vocês estejam ao nosso lado nesse momento tão importante da nossa história!',
    madrinha: {
      title: 'Madrinha',
      intro:
        'Queremos que você se sinta linda e confortável no nosso grande dia, por isso fizemos algumas observações abaixo:',
      items: ['Vestido longo', 'Modelo da sua preferência', 'Cor: verde oliva'],
      image: './vestido.png',
      imageAlt: 'Referência de vestido longo verde oliva para as madrinhas',
    },
    padrinho: {
      title: 'Padrinho',
      intro:
        'Queremos que você se sinta elegante e confortável no nosso grande dia, por isso temos essas escolhas abaixo:',
      items: ['Terno: cinza', 'Camisa: branca', 'Gravata: verde oliva', 'Sapato: marrom'],
      image: './camisa.png',
      imageAlt: 'Referência de terno cinza, camisa branca, gravata verde oliva e sapato marrom',
    },
  },
  // Números com DDI + DDD + número, só dígitos. Ex.: 5534992308318
  contacts: {
    title: 'Contatos',
    intro: 'Ficou com alguma dúvida? Fale com a gente pelo WhatsApp.',
    people: [
      {
        role: 'Noiva',
        name: 'Annaylle',
        phone: '5534991238603',
        message: 'Olá, Annaylle! Sou padrinho(a) e gostaria de tirar uma dúvida.',
      },
      {
        role: 'Noivo',
        name: 'Riquelmy',
        phone: '5534992308318',
        message: 'Olá, Riquelmy! Sou padrinho(a) e gostaria de tirar uma dúvida.',
      },
      {
        role: 'Cerimonialista',
        name: 'Ethel',
        phone: '5534988494198',
        message:
          'Olá! Sou padrinho(a) do casamento de Riquelmy e Annaylle e gostaria de tirar uma dúvida.',
      },
    ],
  },
  footer: {
    thanks:
      'Obrigado por fazer parte da nossa história. Mal podemos esperar para celebrar com você!',
  },
}
