import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Технік - Електромонтажні послуги в Рівному | Електрик Рівне",
    template: "%s | Технік - Електромонтажні послуги Рівне"
  },
  description: "Професійні електромонтажні послуги в Рівному та Рівненській області. Електричні мережі, блискавкозахист, сонячні електростанції, електротехнічна лабораторія. Понад 20 років досвіду. Виїзд по Рівненській області. ☎ +38 (067) 360-64-83",
  keywords: [
    // Основні послуги з локалізацією
    "електромонтажні роботи Рівне",
    "електрик Рівне",
    "електричні мережі Рівне",
    "блискавкозахист Рівне",
    "сонячні електростанції Рівне",
    "електротехнічна лабораторія Рівне",
    "електромонтаж Рівне",
    "електричні послуги Рівне",

    // Рівненська область
    "електрик Рівненська область",
    "електромонтажні роботи Рівненська область",
    "електричні мережі Рівненська область",

    // Конкретні райони та міста
    "електрик Дубно",
    "електрик Костопіль",
    "електрик Сарни",
    "електрик Березне",
    "електрик Здолбунів",
    "електрик Острог",
    "електрик Корець",
    "електрик Дубровиця",
    "електрик Радивилів",
    "електрик Володимирець",

    // Специфічні послуги
    "монтаж електропроводки Рівне",
    "заміна електропроводки Рівне",
    "підключення електрики Рівне",
    "електромонтаж квартир Рівне",
    "електромонтаж будинків Рівне",
    "електромонтаж офісів Рівне",
    "промислові електромонтажні роботи Рівне",
    "аварійний електрик Рівне",
    "виклик електрика Рівне",
    "електрик на дім Рівне",

    // Вимірювання та діагностика
    "вимірювання опору ізоляції Рівне",
    "вимірювання опору заземлення Рівне",
    "електричні вимірювання Рівне",
    "діагностика електрообладнання Рівне",
    "протокол електричних вимірювань Рівне",

    // Сонячна енергетика
    "встановлення сонячних панелей Рівне",
    "сонячні батареї Рівне",
    "зелений тариф Рівне",
    "альтернативна енергетика Рівне",

    // Блискавкозахист
    "громовідвід Рівне",
    "система блискавкозахисту Рівне",
    "заземлення Рівне",

    // Загальні терміни
    "Україна",
    "Рівненська область",
    "Волинь",
    "електричні роботи",
    "сертифіковані електрики"
  ],
  authors: [{ name: "Технік - Електромонтажні послуги" }],
  creator: "Технік",
  publisher: "Технік",
  category: "Електромонтажні послуги",
  classification: "Електричні роботи та послуги",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "OB1Xdd9F-XjDxY4Z0PrL4AAwd7OzT6yoaI5INa9w_js"
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://www.texnikua.com',
    siteName: 'Технік - Електромонтажні послуги Рівне',
    title: 'Технік - Електромонтажні послуги в Рівному | Електрик Рівне',
    description: 'Професійні електромонтажні послуги в Рівному та Рівненській області. Електричні мережі, блискавкозахист, сонячні електростанції. Понад 20 років досвіду. ☎ +38 (067) 360-64-83',
    images: [
      {
        url: '/tehnic-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Технік - Електромонтажні послуги в Рівному',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Технік - Електромонтажні послуги в Рівному | Електрик Рівне',
    description: 'Професійні електромонтажні послуги в Рівному та Рівненській області. Понад 20 років досвіду. ☎ +38 (067) 360-64-83',
    images: ['/tehnic-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://www.texnikua.com',
  },
  other: {
    'geo.region': 'UA-56',
    'geo.placename': 'Рівне',
    'geo.position': '50.6199;26.2516',
    'ICBM': '50.6199, 26.2516',
    'DC.title': 'Технік - Електромонтажні послуги в Рівному',
    'DC.creator': 'Технік',
    'DC.subject': 'Електромонтажні роботи, електричні мережі, блискавкозахист',
    'DC.description': 'Професійні електромонтажні послуги в Рівному та Рівненській області',
    'DC.publisher': 'Технік',
    'DC.contributor': 'Технік',
    'DC.date': '2004',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.texnikua.com',
    'DC.language': 'uk',
    'DC.coverage': 'Рівне, Рівненська область, Україна',
    'DC.rights': 'Copyright 2025 Технік',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Import structured data from separate file for better organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ElectricalContractor"],
    "name": "Технік",
    "alternateName": "Технік - Електромонтажні послуги",
    "description": "Професійні електромонтажні послуги в Рівному та Рівненській області. Електричні мережі, блискавкозахист, сонячні електростанції, електротехнічна лабораторія. Понад 20 років досвіду.",
    "url": "https://www.texnikua.com",
    "logo": "https://www.texnikua.com/tehnic-removebg-preview.png",
    "image": "https://www.texnikua.com/tehnic-removebg-preview.png",
    "telephone": "+380673606483",
    "email": "texnik.ua@gmail.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+380673606483",
        "email": "texnik.ua@gmail.com",
        "availableLanguage": "Ukrainian",
        "areaServed": "Рівненська область"
      },
      {
        "@type": "ContactPoint",
        "contactType": "emergency",
        "telephone": "+380673606483",
        "availableLanguage": "Ukrainian",
        "hoursAvailable": "24/7"
      }
    ],
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
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa-Su by appointment"
    ],
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
    "sameAs": [],
    "foundingDate": "2004",
    "numberOfEmployees": "10-50",
    "slogan": "Професійні електромонтажні послуги понад 20 років",
    "priceRange": "$$",
    "currenciesAccepted": "UAH",
    "paymentAccepted": ["Cash", "Bank Transfer", "Card"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Рівне",
        "containedInPlace": {
          "@type": "State",
          "name": "Рівненська область"
        }
      },
      {
        "@type": "State",
        "name": "Рівненська область",
        "containedInPlace": {
          "@type": "Country",
          "name": "Україна"
        }
      }
    ],
    "serviceArea": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 50.6199,
          "longitude": 26.2516
        },
        "geoRadius": "100000"
      }
    ],
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
            "provider": {
              "@type": "Organization",
              "name": "Технік"
            },
            "areaServed": "Рівненська область"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Блискавкозахист",
            "description": "Проектування та монтаж систем блискавкозахисту, громовідводів, заземлення",
            "provider": {
              "@type": "Organization",
              "name": "Технік"
            },
            "areaServed": "Рівненська область"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Сонячні електростанції",
            "description": "Проектування, монтаж та підключення сонячних електростанцій, зелений тариф",
            "provider": {
              "@type": "Organization",
              "name": "Технік"
            },
            "areaServed": "Рівненська область"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Електротехнічна лабораторія",
            "description": "Вимірювання опору ізоляції, заземлення, діагностика електрообладнання, протоколи вимірювань",
            "provider": {
              "@type": "Organization",
              "name": "Технік"
            },
            "areaServed": "Рівненська область"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Протипожежна обробка",
            "description": "Протипожежна обробка дерев'яних конструкцій та матеріалів",
            "provider": {
              "@type": "Organization",
              "name": "Технік"
            },
            "areaServed": "Рівненська область"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Олександр М."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Професійна команда, якісно виконали електромонтажні роботи в нашому будинку. Рекомендую!"
      }
    ]
  };

  // Additional structured data for local business
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Технік",
    "image": "https://www.texnikua.com/tehnic-removebg-preview.png",
    "telephone": "+380673606483",
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
    "url": "https://www.texnikua.com",
    "openingHours": "Mo-Fr 08:00-18:00"
  };

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Технік - Електромонтажні послуги",
    "url": "https://www.texnikua.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.texnikua.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Технік"
    }
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Головна",
        "item": "https://www.texnikua.com"
      }
    ]
  };

  return (
    <html lang="uk">
      <head>
        <meta name="google-site-verification" content="OB1Xdd9F-XjDxY4Z0PrL4AAwd7OzT6yoaI5INa9w_js" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Geo meta tags */}
        <meta name="geo.region" content="UA-56" />
        <meta name="geo.placename" content="Рівне" />
        <meta name="geo.position" content="50.6199;26.2516" />
        <meta name="ICBM" content="50.6199, 26.2516" />

        {/* Additional meta tags for local SEO */}
        <meta name="locality" content="Рівне" />
        <meta name="region" content="Рівненська область" />
        <meta name="country" content="Україна" />
        <meta name="coverage" content="Рівне, Рівненська область" />
        <meta name="distribution" content="local" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="subject" content="Електромонтажні послуги, електричні роботи" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
