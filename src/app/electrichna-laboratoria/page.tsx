import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function ElectrichnaLaboratoria() {
  const services = [
    {
      id: "vymiriuvannia-oporu-izoliatsii",
      title: "Вимірювання опору ізоляції",
      description: "Професійні заміри опору ізоляції електричних мереж, кабелів та електрообладнання до 1000В та вище",

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
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-white/80 text-sm">

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