import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { ServiceBlock } from '../../components/ServiceBlock';
import { serviceBlocks } from './serviceBlocksaData';
import { CTASection } from '@/components/CTASection';

export default function ElektromontazhniRoboty() {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-white bg-clip-text text-transparent">
              Електромонтажні
            </span>{' '}
            роботи
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Професійні зовнішні електромонтажні роботи з встановлення електричних мереж
          </p>
        </div>

        {/* Services Grid with translucent background images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceBlocks.map((service, index) => (
            <ServiceBlock key={index} service={service} index={index} />
          ))}
        </div>
        <div className="mb-16" />
        <CTASection title="Потрібна консультація з електромонтажних робіт?" description="Наші спеціалісти допоможуть підібрати оптимальне рішення для вашого проекту" />
      </div>
    </Layout>
  );
}