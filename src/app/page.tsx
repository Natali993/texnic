import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { SpecializedServicesSection } from '../components/SpecializedServicesSection';
import { ServicesInfographicSection } from '../components/ServicesInfographicSection';

export default function Home() {
  return (
    <Layout className="">
      <HeroSection />
      <SpecializedServicesSection />
      <ServicesInfographicSection />
    </Layout>
  );
}