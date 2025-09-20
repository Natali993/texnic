import { baseMetadata, serviceAreas } from './metadata';

// Main organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ElectricalContractor"],
  "name": "Технік",
  "alternateName": "Технік - Електромонтажні послуги",
  "description": "Професійні електромонтажні послуги в Рівному та Рівненській області. Електричні мережі, блискавкозахист, сонячні електростанції, електротехнічна лабораторія. Понад 20 років досвіду.",
  "url": baseMetadata.siteUrl,
  "logo": `${baseMetadata.siteUrl}/tehnic-removebg-preview.png`,
  "image": `${baseMetadata.siteUrl}/tehnic-removebg-preview.png`,
  "telephone": baseMetadata.phone,
  "email": baseMetadata.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "вул. Київська, 42",
    "addressLocality": "Рівне",
    "addressRegion": "Рівненська область",
    "postalCode": "33000",
    "addressCountry": "UA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": baseMetadata.coordinates.lat,
    "longitude": baseMetadata.coordinates.lng
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa-Su by appointment"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "UAH",
  "paymentAccepted": ["Cash", "Bank Transfer", "Card"],
  "areaServed": serviceAreas.map(area => ({
    "@type": "City",
    "name": area
  })),
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": baseMetadata.coordinates.lat,
      "longitude": baseMetadata.coordinates.lng
    },
    "geoRadius": "100000"
  },
  "foundingDate": "2004",
  "numberOfEmployees": "10-50",
  "slogan": "Професійні електромонтажні послуги понад 20 років",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Service-specific structured data
export const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Електромонтажні послуги",
  "description": "Повний спектр електромонтажних послуг в Рівному та області",
  "provider": {
    "@type": "Organization",
    "name": "Технік"
  },
  "areaServed": serviceAreas,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Електромонтажні послуги",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Електромонтажні роботи",
          "description": "Професійний монтаж електричних мереж, електропроводки в квартирах, будинках та офісах",
          "serviceType": "Електромонтаж"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Блискавкозахист",
          "description": "Проектування та монтаж систем блискавкозахисту, громовідводів, заземлення",
          "serviceType": "Блискавкозахист"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Сонячні електростанції",
          "description": "Проектування, монтаж та підключення сонячних електростанцій, зелений тариф",
          "serviceType": "Альтернативна енергетика"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Електротехнічна лабораторія",
          "description": "Вимірювання опору ізоляції, заземлення, діагностика електрообладнання",
          "serviceType": "Електричні вимірювання"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Протипожежна обробка",
          "description": "Протипожежна обробка дерев'яних конструкцій та матеріалів",
          "serviceType": "Протипожежні роботи"
        }
      }
    ]
  }
};

// FAQ structured data for better SEO
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Які електромонтажні послуги ви надаєте в Рівному?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ми надаємо повний спектр електромонтажних послуг в Рівному та Рівненській області: монтаж електропроводки, підключення електрики, блискавкозахист, сонячні електростанції, електротехнічна лабораторія, протипожежна обробка. Працюємо з 2004 року."
      }
    },
    {
      "@type": "Question",
      "name": "Чи виїжджаєте ви по Рівненській області?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так, ми обслуговуємо всю Рівненську область, включаючи Дубно, Костопіль, Сарни, Березне, Здолбунів, Острог, Корець, Дубровицю, Радивилів, Володимирець та інші населені пункти."
      }
    },
    {
      "@type": "Question",
      "name": "Скільки коштують електромонтажні роботи в Рівному?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Вартість електромонтажних робіт залежить від обсягу та складності проекту. Ми надаємо безкоштовну консультацію та розрахунок вартості. Зателефонуйте +38 (067) 360-64-83 для отримання детальної інформації."
      }
    },
    {
      "@type": "Question",
      "name": "Чи є у вас ліцензії та сертифікати?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так, ми маємо всі необхідні ліцензії та сертифікати для виконання електромонтажних робіт. Наша компанія працює з 2004 року та має понад 20 років досвіду в галузі електромонтажу."
      }
    },
    {
      "@type": "Question",
      "name": "Як швидко ви можете приїхати на виклик в Рівному?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ми працюємо з понеділка по п'ятницю з 8:00 до 18:00. У випадку аварійних ситуацій можемо приїхати в позаробочий час за домовленістю. Зазвичай виїжджаємо на об'єкт протягом 1-2 годин після дзвінка."
      }
    },
    {
      "@type": "Question",
      "name": "Чи надаєте ви гарантію на виконані роботи?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так, ми надаємо гарантію на всі виконані електромонтажні роботи. Термін гарантії залежить від виду робіт та обговорюється індивідуально з кожним клієнтом."
      }
    }
  ]
};

// Breadcrumb structured data
export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Головна",
      "item": baseMetadata.siteUrl
    }
  ]
};

// Local business schema for Google My Business
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseMetadata.siteUrl}#organization`,
  "name": "Технік",
  "image": `${baseMetadata.siteUrl}/tehnic-removebg-preview.png`,
  "telephone": "+380673606483",
  "email": baseMetadata.email,
  "url": baseMetadata.siteUrl,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "вул. Київська, 42",
    "addressLocality": "Рівне",
    "addressRegion": "Рівненська область",
    "postalCode": "33000",
    "addressCountry": "UA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.6199,
    "longitude": 26.2516
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
      "validFrom": "2025-01-01",
      "validThrough": "2025-12-31"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "UAH",
  "paymentAccepted": ["Cash", "Bank Transfer", "Card"],
  "hasMap": `https://www.google.com/maps/place/50.6199,26.2516`,
  "isAccessibleForFree": false,
  "smokingAllowed": false
};

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseMetadata.siteUrl}#website`,
  "url": baseMetadata.siteUrl,
  "name": "Технік - Електромонтажні послуги",
  "description": "Професійні електромонтажні послуги в Рівному та Рівненській області",
  "publisher": {
    "@id": `${baseMetadata.siteUrl}#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseMetadata.siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "uk-UA"
};
