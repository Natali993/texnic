import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { services } from './services';
import { CTASection } from '@/components/CTASection';

const LabHeroSection = () => {
  return (<div className="text-center mb-12 sm:mb-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
      <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
        Електрична
      </span>{' '}
      лабораторія
    </h1>
    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
      Професійні вимірювання та діагностика електрообладнання. Атестована лабораторія з сучасним обладнанням
    </p>
  </div>);
}

const ServiceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {services.map((service, index) => (
        <div
          key={index}
          id={service.id}
          className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
          style={{
            backgroundImage: `url(${service.backgroundImage})`, // Use the specific background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for translucency and readability */}
          <div className={`absolute inset-0 bg-black opacity-60 group-hover:opacity-50 transition-all duration-300 rounded-2xl`}></div>

          {/* Optional: Add a gradient overlay on top of the image overlay for extra style */}
          <div className={`absolute inset-0 ${service.gradient} opacity-40 group-hover:opacity-30 transition-all duration-300 rounded-2xl`}></div>

          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/90 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            {service.icon && <div className="mt-6 flex justify-end">{service.icon}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

const AdvantagesSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Чому обирають нашу лабораторію
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Атестована лабораторія</h3>
          <p className="text-gray-600">Офіційна атестація та сертифікати відповідності</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Сучасне обладнання</h3>
          <p className="text-gray-600">Високоточні вимірювальні прилади провідних виробників</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Швидке виконання</h3>
          <p className="text-gray-600">Оперативне проведення вимірювань та оформлення протоколів</p>
        </div>
      </div>
    </div>
  );
}

export default function ElectrichnaLaboratoria() {

  return (
    <Layout className=''>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <LabHeroSection />
        <ServiceSection />
        <AdvantagesSection />
        {/* <CTASection title="Потрібні вимірювання електрообладнання?" description="Зв'яжіться з нами для консультації та замовлення послуг електричної лабораторії" /> */}
      </div>
    </Layout>
  );
}