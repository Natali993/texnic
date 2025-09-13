import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { SpecializedServicesSection } from '../components/SpecializedServicesSection';
import { ServicesInfographicSection } from '../components/ServicesInfographicSection';
import { LegacyFallback } from '../components/LegacyFallback';
import { LegacyHeroSection } from '../components/LegacyHeroSection';
import { LegacySpecializedServicesSection } from '../components/LegacySpecializedServicesSection';

export default function Home() {
  return (
    <Layout className="">
      <LegacyFallback
        fallback={<LegacyHeroSection />}
      >
        <HeroSection />
      </LegacyFallback>

      <LegacyFallback
        fallback={<LegacySpecializedServicesSection />}
      >
        <SpecializedServicesSection />
      </LegacyFallback>

      <ServicesInfographicSection />
    </Layout>
  );
}