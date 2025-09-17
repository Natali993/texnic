import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

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
    default: "Технік - Електромонтажні послуги",
    template: "%s | Технік"
  },
  description: "Професійні електромонтажні послуги в Україні. Електричні мережі, блискавкозахист, сонячні електростанції, електротехнічна лабораторія. Понад 20 років досвіду.",
  keywords: [
    "електромонтажні роботи",
    "електричні мережі",
    "блискавкозахист",
    "сонячні електростанції",
    "електротехнічна лабораторія",
    "електромонтаж",
    "електрик",
    "електричні послуги",
    "Україна"
  ],
  authors: [{ name: "Технік" }],
  creator: "Технік",
  publisher: "Технік",
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
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://www.texnikua.org',
    siteName: 'Технік',
    title: 'Технік - Електромонтажні послуги',
    description: 'Професійні електромонтажні послуги в Україні. Понад 20 років досвіду.',
    images: [
      {
        url: '/tehnic-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Технік - Електромонтажні послуги',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Технік - Електромонтажні послуги',
    description: 'Професійні електромонтажні послуги в Україні. Понад 20 років досвіду.',
    images: ['/tehnic-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://www.texnikua.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Технік",
    "description": "Професійні електромонтажні послуги в Україні",
    "url": "https://www.texnikua.org",
    "logo": "https://www.texnikua.org/tehnic-removebg-preview.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "texnik.ua@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
    },
    "sameAs": [],
    "foundingDate": "2004",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "Country",
      "name": "Ukraine"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Електромонтажні послуги",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Електромонтажні роботи",
            "description": "Професійний монтаж електричних мереж"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Блискавкозахист",
            "description": "Системи захисту від блискавки"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Сонячні електростанції",
            "description": "Проектування та монтаж сонячних електростанцій"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Електротехнічна лабораторія",
            "description": "Вимірювання та діагностика електрообладнання"
          }
        }
      ]
    }
  };

  return (
    <html lang="uk">
      <head>
        <meta name="google-site-verification" content="OB1Xdd9F-XjDxY4Z0PrL4AAwd7OzT6yoaI5INa9w_js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
