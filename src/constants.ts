// src/constants.ts

export type Language = "pt" | "en" | "es";

export const UI_STRINGS = {
  pt: {
    about: "Conceito", services: "Serviços", gallery: "Galeria", gallerySubtitle: "Estilo neo-clássico e lazer.",
    reviews: "Críticas", location: "Localização", bookNow: "Agendar Agora", bookTreatment: "Reservar Cadeira",
    viewServices: "Ver Preçário", ourEssence: "A nossa arte", luxuryMeetsRelaxation: "Corte, Snooker e Convivio",
    ourServices: "Serviços Lisbon'Style", servicesSubtitle: "Excelência profissional com um toque de lazer no coração de Alvalade.",
    duration: "Duração", price: "Preço", visitUs: "Visite-nos", openingHours: "Horário",
    seeOnGoogleMaps: "Como Chegar", followUs: "Siga-nos", quickLinks: "Links", privacy: "Privacidade",
    terms: "Termos", allRightsReserved: "Todos os direitos reservados.",
    tagline: "Super inovador, neo-clássico e ambiente familiar em Alvalade.",
    footerDescription: "Lisbon'Style Barbershop: Um espaço de excelência profissional com mesa de snooker e ambiente exclusivo.",
    closed: "Fechado", team: "A Equipa", teamSubtitle: "Profissionais 5 estrelas ao seu dispor.",
    cookiesTitle: "Privacidade", cookiesText: "Usamos cookies para a melhor experiência.",
    cookiesAccept: "Aceitar", cookiesReject: "Recusar", cookiesMore: "Saber mais"
  },
  en: {
     about: "Concept", services: "Services", gallery: "Gallery", gallerySubtitle: "Neo-classic style & leisure.",
     reviews: "Reviews", location: "Location", bookNow: "Book Now", bookTreatment: "Book a Chair",
     viewServices: "Prices", ourEssence: "Our Art", luxuryMeetsRelaxation: "Cuts, Snooker & Lounge",
     ourServices: "Lisbon'Style Services", servicesSubtitle: "Professional excellence with a leisure touch in Alvalade.",
     duration: "Duration", price: "Price", visitUs: "Visit Us", openingHours: "Hours",
     seeOnGoogleMaps: "Directions", followUs: "Follow Us", quickLinks: "Links", privacy: "Privacy",
     terms: "Terms", allRightsReserved: "All rights reserved.", tagline: "Innovative, neo-classic and family vibe in Alvalade.",
     footerDescription: "Lisbon'Style Barbershop: Professional excellence with snooker table and exclusive lounge.",
     closed: "Closed", team: "The Team", teamSubtitle: "5-star professionals at your service.",
     cookiesTitle: "Privacy", cookiesText: "We use cookies.", cookiesAccept: "Accept", cookiesReject: "Decline", cookiesMore: "More"
  },
  es: {
     about: "Concepto", services: "Servicios", gallery: "Galería", gallerySubtitle: "Estilo neoclásico y ocio.",
     reviews: "Reseñas", location: "Ubicación", bookNow: "Reservar", bookTreatment: "Reservar Silla",
     viewServices: "Precios", ourEssence: "Nuestro Arte", luxuryMeetsRelaxation: "Corte, Snooker y Lounge",
     ourServices: "Servicios Lisbon'Style", servicesSubtitle: "Excelencia profesional con un toque de ocio en Alvalade.",
     duration: "Duración", price: "Precio", visitUs: "Visítanos", openingHours: "Horario",
     seeOnGoogleMaps: "Como llegar", followUs: "Síguenos", quickLinks: "Enlaces", privacy: "Privacidad",
     terms: "Términos", allRightsReserved: "Todos los derechos reservados.", tagline: "Innovador, neoclásico y ambiente familiar en Alvalade.",
     footerDescription: "Lisbon'Style Barbershop: Excelencia profesional con mesa de billar y lounge exclusivo.",
     closed: "Cerrado", team: "El Equipo", teamSubtitle: "Profesionales 5 estrellas a su servicio.",
     cookiesTitle: "Privacidad", cookiesText: "Usamos cookies.", cookiesAccept: "Aceptar", cookiesReject: "Rechazar", cookiesMore: "Saber más"
  }
};

export const SALON_DATA = {
  name: "Lisbon'Style Barbershop",
  tagline: {
    pt: "Super inovador, conceito neo-clássico e ambiente familiar em Alvalade.",
    en: "Innovative neo-classic concept and family vibe in Alvalade.",
    es: "Concepto neoclásico innovador y ambiente familiar en Alvalade."
  },
  description: {
    pt: "A Lisbon'Style Barbershop em Alvalade é um espaço inovador que funde a barbearia clássica com uma zona de lazer única, incluindo mesa de snooker e sofás. Oferecemos um serviço de excelência profissional num ambiente familiar pensado para o seu bem-estar.",
    en: "Lisbon'Style in Alvalade is an innovative space merging classic barbering with a unique leisure area, featuring snooker and lounge. Professional excellence in a family vibe.",
    es: "Lisbon'Style en Alvalade es un espacio innovador que fusiona la barbería clásica con una zona de ocio única, incluyendo mesa de billar y lounge."
  },
  address: "Av. do Brasil 149, 1700-067 Lisboa",
  phoneNumber: "+351937561999",
  googleMapsUrl: "https://www.google.com/maps/dir//Lisbon'Style+Barbershop+Alvalade,+Av.+do+Brasil+149,+1700-067+Lisboa",
  bookingUrl: "https://wa.me/351937561999?text=Olá! Gostaria de agendar um serviço na Lisbon'Style Alvalade.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.9687483642353!2d-9.1458!3d38.754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331000000000%3A0x0!2sLisbon'Style%20Barbershop%20Alvalade!5e0!3m2!1spt!2spt!4v1740860000000",
  
  images: {
    heroBg: "/hero-bg.webp",
    aboutPrincipal: "/sobre-principal.webp",
    aboutDetail: "/sobre-detalhe.webp"
  },

  socialLinks: { instagram: "https://www.instagram.com/lisbonstylealvalade/", facebook: "", tiktok: "" },

  galleryPhotos: [
    "https://i.ibb.co/JFqMZPw6/pexels-gustavo-fring-7447150.jpg",
    "https://i.ibb.co/MxjKjv56/pexels-cottonbro-3998429.jpg", 
    "https://i.ibb.co/HLHrv5xq/pexels-thgusstavo-2881253.jpg", 
  ],

  team: [
    { name: "Bruno", role: { pt: "Barbeiro", en: "Barber", es: "Barbero" }, image: "https://i.ibb.co/HRPzBhV/pexels-hikaique-331989.jpg" },
    { name: "Cássio", role: { pt: "Barbeiro", en: "Barber", es: "Barbero" }, image: "" }
  ],
  
  services: [
    { name: { pt: "Corte Estilo", en: "Style Cut", es: "Corte Estilo" }, price: "15", duration: "45min", description: { pt: "Corte personalizado com lavagem e styling.", en: "Custom cut with wash and styling.", es: "Corte personalizado con lavado y peinado." } },
    { name: { pt: "Ritual Barba", en: "Beard Ritual", es: "Ritual Barba" }, price: "12", duration: "30min", description: { pt: "Barba à navalha com toalha quente.", en: "Razor beard with hot towel.", es: "Barba a navaja con toalla caliente." } }
  ],
  
  hours: [
    { day: { pt: "Segunda a Sábado", en: "Mon to Sat", es: "Lun a Sáb" }, time: "10:00 - 22:00" },
    { day: { pt: "Domingo", en: "Sunday", es: "Domingo" }, time: "Fechado" }
  ],
  
  features: {
    pt: ["Mesa de Snooker", "Zona Lounge", "Ambiente Familiar", "Acessível", "Neo-Clássico", "Especialistas em Barba"],
    en: ["Pool Table", "Lounge Area", "Family Vibe", "Accessible", "Neo-Classic", "Beard Specialists"],
    es: ["Mesa de Billar", "Zona Lounge", "Ambiente Familiar", "Accesible", "Neo-Clásico", "Expertos en Barba"]
  },
  
  reviews: [
    { author: "Gonçalo Silva", text: { pt: "Quem me cortou o cabelo foi o Bruno, brasileiro, cinco estrelas.", en: "Bruno cut my hair, 5 stars.", es: "Bruno me cortó el pelo, 5 estrellas." }, rating: 5 },
    { author: "Nelson Amendoeira", text: { pt: "Super inovador, conceito neo-clássico, ambiente muito familiar.", en: "Very innovative, neo-classic concept, great family vibe.", es: "Muy innovador, concepto neoclásico, gran ambiente familiar." }, rating: 5 }
  ]
};