import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { ServiceBlock } from '../../components/ServiceBlock';
import { serviceBlocks } from './serviceBlocksaData';

export default function ElektromontazhniRoboty() {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Потрібна консультація з електромонтажних робіт?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Наші спеціалісти допоможуть підібрати оптимальне рішення для вашого проекту
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Залишити заявку
            </Link>
            <Link
              href="/posluhy"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              ПОСЛУГИ
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}