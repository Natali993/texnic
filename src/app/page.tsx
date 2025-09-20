import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { SpecializedServicesSection } from '../components/SpecializedServicesSection';
import { ServicesInfographicSection } from '../components/ServicesInfographicSection';
import { Metadata } from 'next';
import { baseMetadata, commonKeywords, faqData } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Технік - Електромонтажні послуги в Рівному | Електрик Рівне ☎ +38 (067) 360-64-83',
  description: 'Професійні електромонтажні послуги в Рівному та Рівненській області. Електричні мережі, блискавкозахист, сонячні електростанції, електротехнічна лабораторія. Понад 20 років досвіду. Виїзд по області.',
  keywords: [
    'електромонтажні послуги Рівне',
    'електрик Рівне',
    'електричні роботи Рівне',
    'монтаж електропроводки Рівне',
    'блискавкозахист Рівне',
    'сонячні електростанції Рівне',
    'електротехнічна лабораторія Рівне',
    'виклик електрика Рівне',
    'аварійний електрик Рівне',
    'електромонтаж Рівне',
    'електричні мережі Рівне',
    'заміна електропроводки Рівне',
    'підключення електрики Рівне',
    'вимірювання опору ізоляції Рівне',
    'громовідвід Рівне',
    'заземлення Рівне',
    'сонячні панелі Рівне',
    'зелений тариф Рівне',
    'протипожежна обробка Рівне',
    ...commonKeywords
  ],
  openGraph: {
    title: 'Технік - Електромонтажні послуги в Рівному | Електрик Рівне',
    description: 'Професійні електромонтажні послуги в Рівному та Рівненській області. Понад 20 років досвіду. ☎ +38 (067) 360-64-83',
    url: baseMetadata.siteUrl,
    siteName: baseMetadata.siteName,
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Технік - Електромонтажні послуги в Рівному | Електрик Рівне',
    description: 'Професійні електромонтажні послуги в Рівному та Рівненській області. Понад 20 років досвіду. ☎ +38 (067) 360-64-83',
  },
  alternates: {
    canonical: baseMetadata.siteUrl,
  },
};

export default function Home() {
  return (
    <Layout className="">
      <HeroSection />
      <SpecializedServicesSection />
      <ServicesInfographicSection />
    </Layout>
  );
}