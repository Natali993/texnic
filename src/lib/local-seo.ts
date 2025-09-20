import { baseMetadata } from './metadata';

// Local business information for Rivne, Ukraine
export const localBusinessInfo = {
  name: 'Технік',
  legalName: 'Технік - Електромонтажні послуги',
  description: 'Професійні електромонтажні послуги в Рівному та Рівненській області',
  
  // Contact information
  phone: '+380673606483',
  email: 'texnik.ua@gmail.com',
  website: 'https://www.texnikua.com',
  
  // Address information
  address: {
    street: 'вул. Київська, 42',
    city: 'Рівне',
    region: 'Рівненська область',
    postalCode: '33000',
    country: 'Україна',
    countryCode: 'UA'
  },
  
  // Geographic coordinates
  coordinates: {
    latitude: 50.6199,
    longitude: 26.2516
  },
  
  // Business hours
  businessHours: {
    monday: { open: '08:00', close: '18:00' },
    tuesday: { open: '08:00', close: '18:00' },
    wednesday: { open: '08:00', close: '18:00' },
    thursday: { open: '08:00', close: '18:00' },
    friday: { open: '08:00', close: '18:00' },
    saturday: { open: 'За домовленістю', close: 'За домовленістю' },
    sunday: { open: 'За домовленістю', close: 'За домовленістю' }
  },
  
  // Service areas
  serviceAreas: [
    'Рівне',
    'Дубно',
    'Костопіль',
    'Сарни',
    'Березне',
    'Здолбунів',
    'Острог',
    'Корець',
    'Дубровиця',
    'Радивилів',
    'Володимирець',
    'Рокитне',
    'Млинів',
    'Гоща',
    'Демидівка',
    'Рівненська область'
  ],
  
  // Services offered
  services: [
    {
      name: 'Електромонтажні роботи',
      description: 'Професійний монтаж електричних мереж, електропроводки',
      keywords: ['електромонтаж', 'монтаж електропроводки', 'електричні мережі']
    },
    {
      name: 'Блискавкозахист',
      description: 'Проектування та монтаж систем блискавкозахисту',
      keywords: ['блискавкозахист', 'громовідвід', 'заземлення']
    },
    {
      name: 'Сонячні електростанції',
      description: 'Проектування та монтаж сонячних електростанцій',
      keywords: ['сонячні панелі', 'зелений тариф', 'альтернативна енергетика']
    },
    {
      name: 'Електротехнічна лабораторія',
      description: 'Вимірювання та діагностика електрообладнання',
      keywords: ['електричні вимірювання', 'діагностика', 'протоколи']
    },
    {
      name: 'Протипожежна обробка',
      description: 'Протипожежна обробка дерев\'яних конструкцій',
      keywords: ['вогнезахист', 'протипожежна обробка']
    }
  ],
  
  // Business details
  foundingYear: 2004,
  experience: '20+ років',
  employeeCount: '10-50',
  priceRange: '$$',
  paymentMethods: ['Готівка', 'Банківський переказ', 'Картка'],
  
  // Certifications and licenses
  certifications: [
    'Ліцензія на електромонтажні роботи',
    'Сертифікат електротехнічної лабораторії',
    'Дозвіл на роботи з блискавкозахисту'
  ],
  
  // Social media (if available)
  socialMedia: {
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: ''
  }
};

// Generate local business structured data
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor"],
    "name": localBusinessInfo.name,
    "alternateName": localBusinessInfo.legalName,
    "description": localBusinessInfo.description,
    "url": localBusinessInfo.website,
    "telephone": localBusinessInfo.phone,
    "email": localBusinessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": localBusinessInfo.address.street,
      "addressLocality": localBusinessInfo.address.city,
      "addressRegion": localBusinessInfo.address.region,
      "postalCode": localBusinessInfo.address.postalCode,
      "addressCountry": localBusinessInfo.address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": localBusinessInfo.coordinates.latitude,
      "longitude": localBusinessInfo.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": localBusinessInfo.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Електромонтажні послуги",
      "itemListElement": localBusinessInfo.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    },
    "foundingDate": localBusinessInfo.foundingYear.toString(),
    "numberOfEmployees": localBusinessInfo.employeeCount,
    "priceRange": localBusinessInfo.priceRange,
    "paymentAccepted": localBusinessInfo.paymentMethods,
    "currenciesAccepted": "UAH"
  };
}

// Generate service area pages data
export function generateServiceAreaData(city: string) {
  return {
    title: `Електромонтажні послуги ${city} | Електрик ${city} - Технік`,
    description: `Професійні електромонтажні послуги в ${city}. Електричні мережі, блискавкозахист, сонячні електростанції. Виїзд по Рівненській області. ☎ +38 (067) 360-64-83`,
    keywords: [
      `електромонтажні роботи ${city}`,
      `електрик ${city}`,
      `електричні послуги ${city}`,
      `монтаж електропроводки ${city}`,
      `блискавкозахист ${city}`,
      `сонячні електростанції ${city}`,
      `виклик електрика ${city}`,
      `аварійний електрик ${city}`
    ]
  };
}
