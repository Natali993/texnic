import { CTASection } from '@/components/CTASection';
import { Layout } from '../../components/Layout';
import { ServiceBlock } from '@/components/ServiceBlock';
import { BlockData } from './BlockData';
import { WhyImportantSection } from './localComponents/WhyImportantSection';
import { HeroSection } from './localComponents/HeroSection';
import { ProcessSection } from './localComponents/ProcessSection';

export default function Blyskaykozahyst() {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <HeroSection />
        <ServiceBlock service={BlockData} index={0} />
        <div className="mb-16" />
        <WhyImportantSection />
        <ProcessSection />
        <CTASection title="Захистіть свій об'єкт від блискавки" description="Отримайте професійну консультацію з блискавкозахисту" />
      </div>
    </Layout>
  );
}