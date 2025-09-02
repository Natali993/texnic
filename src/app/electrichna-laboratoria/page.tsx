import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function ElectrichnaLaboratoria() {
  const services = [
    {
      id: "vymiriuvannia-oporu-izoliatsii",
      title: "Вимірювання опору ізоляції",
      description: "Професійні заміри опору ізоляції електричних мереж, кабелів та електрообладнання до 1000В та вище",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-600",
      details: [
        "Вимірювання опору ізоляції кабельних ліній",
        "Перевірка ізоляції електродвигунів",
        "Контроль стану ізоляції трансформаторів",
        "Заміри опору ізоляції розподільних щитів"
      ]
    },
    {
      id: "vymiriuvannia-oporu-zazemlennia",
      title: "Вимірювання опору заземлення",
      description: "Точні заміри опору заземлюючих пристроїв та перевірка ефективності систем заземлення",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
      details: [
        "Вимірювання опору заземлення електроустановок",
        "Перевірка контуру заземлення будівель",
        "Контроль заземлення блискавкозахисту",
        "Заміри опору заземлення обладнання"
      ]
    },
    {
      id: "pereviria-rele-zahystu",
      title: "Перевірка релейного захисту",
      description: "Налаштування та перевірка систем релейного захисту електроустановок",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-purple-500 to-blue-500",
      details: [
        "Налаштування максимально-струмового захисту",
        "Перевірка диференційного захисту",
        "Тестування автоматичних вимикачів",
        "Калібрування реле часу та струму"
      ]
    },
    {
      id: "vymiriuvannia-parametriv-elektromerezhі",
      title: "Вимірювання параметрів електромережі",
      description: "Комплексні заміри електричних параметрів мереж та якості електроенергії",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
      details: [
        "Вимірювання напруги та частоти",
        "Аналіз якості електроенергії",
        "Заміри коефіцієнта потужності",
        "Контроль гармонічних спотворень"
      ]
    },
    {
      id: "teplovizorna-diagnostyka",
      title: "Тепловізорна діагностика",
      description: "Безконтактна діагностика електрообладнання за допомогою тепловізора",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-red-500 to-pink-500",
      details: [
        "Виявлення перегрівів електрообладнання",
        "Діагностика контактних з'єднань",
        "Перевірка розподільних щитів",
        "Контроль кабельних ліній"
      ]
    }
  ];

  return (
    <Layout>
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
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
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} id={service.id} className={`group relative overflow-hidden rounded-2xl ${service.gradient} p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-white/80 text-sm">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

          {/* Advantages Section */}
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

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Потрібні вимірювання електрообладнання?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Зв'яжіться з нами для консультації та замовлення послуг електричної лабораторії
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Замовити вимірювання
              </Link>
              <a
                href="tel:+380673607520"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Подзвонити зараз
              </a>
            </div>
          </div>
        </div>
    </Layout>
  );
}