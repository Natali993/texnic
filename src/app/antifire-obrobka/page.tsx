import { Layout } from '../../components/Layout';
import { ServiceBlock } from '@/components/ServiceBlock';
import { CTASection } from '@/components/CTASection';
import { blockData } from './blockData';
import { HeroSection } from './HeroSection';

export default function AntifireObrobka() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <HeroSection />
        <ServiceBlock service={blockData} index={0} />
        <div className="mb-16" />
        <CTASection title="Захистіть свій об'єкт від пожежі" description="Отримайте професійну консультацію з пожежної безпеки" />
      </div>
    </Layout>
  );
}