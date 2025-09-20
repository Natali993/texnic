import { Metadata } from 'next';
import { baseMetadata, commonKeywords } from '@/lib/metadata';

export const contactMetadata: Metadata = {
  title: 'Контакти - Технік | Електромонтажні послуги Рівне ☎ +38 (067) 360-64-83',
  description: `Контакти компанії Технік в Рівному. Електромонтажні послуги, консультації, виклик електрика. Адреса: ${baseMetadata.address}. Телефон: ${baseMetadata.phone}. Email: ${baseMetadata.email}`,
  keywords: [
    'контакти електрик Рівне',
    'телефон електрика Рівне',
    'адреса електромонтажної компанії Рівне',
    'виклик електрика Рівне',
    'консультація електрика Рівне',
    'замовити електромонтажні роботи Рівне',
    'електричні послуги контакти Рівне',
    ...commonKeywords
  ],
  openGraph: {
    title: 'Контакти - Технік | Електромонтажні послуги Рівне',
    description: `Зв'яжіться з нами для консультації та замовлення електромонтажних послуг в Рівному. ${baseMetadata.phone}`,
    url: `${baseMetadata.siteUrl}/contact`,
    siteName: baseMetadata.siteName,
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакти - Технік | Електромонтажні послуги Рівне',
    description: `Зв'яжіться з нами для консультації та замовлення електромонтажних послуг в Рівному. ${baseMetadata.phone}`,
  },
  alternates: {
    canonical: `${baseMetadata.siteUrl}/contact`,
  },
};
