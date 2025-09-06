import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { consistentGradient } from '../../helpers/globalVar';
import { fullWidthServices } from './fullWidthServices';
import { CTASection } from '@/components/CTASection';

export default function SonychniElektrostancii() {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Сонячні
            </span>{' '}
            електростанції
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Проектування, встановлення та підключення сонячних електростанцій для дому та бізнесу
          </p>
        </div>

        {/* Full-width Service Blocks with translucent background images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {fullWidthServices.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300`}
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for translucency and readability */}
              <div className={`absolute inset-0 bg-black opacity-60 group-hover:opacity-50 transition-all duration-300 rounded-2xl`}></div>
              
              {/* Gradient overlay using the consistent gradient */}
              <div className={`absolute inset-0 ${consistentGradient} opacity-40 group-hover:opacity-30 transition-all duration-300 rounded-2xl`}></div>

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
              </div>
            </div>
          ))}
        </div>

        {/* Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Типи сонячних електростанцій</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Мережеві СЕС</h3>
              <p className="text-gray-600 mb-4">
                Підключені до загальної електромережі з можливістю продажу надлишків електроенергії за "зеленим тарифом".
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Економія на електроенергії</li>
                <li>✓ Продаж надлишків</li>
                <li>✓ Швидка окупність</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Автономні СЕС</h3>
              <p className="text-gray-600 mb-4">
                Незалежні системи з акумуляторами для забезпечення електроенергією віддалених об'єктів.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Повна незалежність</li>
                <li>✓ Резервне живлення</li>
                <li>✓ Екологічність</li>
              </ul>
            </div>
          </div>
        </div>

        <CTASection title="Хочете встановити сонячну електростанцію?" description="Отримайте безкоштовну консультацію та розрахунок вартості проекту" />
      </div>
    </Layout>
  );
}