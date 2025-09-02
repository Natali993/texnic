import { Footer } from './Footer';
import { Header } from './Header';
import { HeroSection } from '../components/HeroSection';
import { SpecializedServicesSection } from '../components/SpecializedServicesSection';
import { ServicesInfographicSection } from '../components/ServicesInfographicSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white">
        <HeroSection />
        <SpecializedServicesSection />
        <ServicesInfographicSection />
      </main>
      <Footer />
    </div>
  );
}