'use client';
import Link from 'next/link';

const ServiceTile = ({ service, index }: { service: any, index: number }) => {
  return (
    <Link href={service.href} className="group block">
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 h-32 sm:h-36">
        {/* Background Gradient */}
        <div className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

        {/* Content */}
        <div className="relative z-10 p-3 sm:p-4 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              {service.icon}
            </div>
            <div className="text-xs text-gray-400 font-medium">
              #{index + 1}
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300 leading-tight">
              {service.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {service.category}
            </p>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export function ServicesInfographicSection() {
  const services = [
    // Електромонтажні роботи
    {
      name: 'Зовнішні електричні мережі',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#zovnishni-elektrichni-merezhi',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Встановлення опор',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#vstanovlennia-opor',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Прокладання кабелю в землю',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#kabel-v-zemliu',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: 'Трансформаторні підстанції',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#transformatorni-pidstantsii',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'Генератори',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#generatory',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: 'Електропостачання будівель',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#elektropostachannia-budivel',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },

    // Електрична лабораторія
    {
      name: 'Вимірювання опору ізоляції',
      category: 'Електрична лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-oporu-izoliatsii',
      gradient: 'bg-gradient-to-br from-purple-500 to-blue-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Вимірювання опору заземлення',
      category: 'Електрична лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-oporu-zazemlennia',
      gradient: 'bg-gradient-to-br from-purple-500 to-blue-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },

    // Блискавкозахист
    {
      name: 'Зовнішній блискавкозахист',
      category: 'Блискавкозахист',
      href: '/blyskaykozahyst#zovnishnii-blyskaykozahyst',
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
    },


    // Протипожежна обробка
    {
      name: 'Дерев\'яні конструкції',
      category: 'Протипожежна обробка',
      href: '/antifire-obrobka#dereviani-konstruktsii',
      gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },

    // Сонячні електростанції
    {
      name: 'Підключення до мережі',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#pidkliuchennia-do-merezhi',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Обслуговування СЕС',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#obslugovuvannia-ses',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },

    {
      name: 'Промислові СЕС',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#promyslovi-ses',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: 'Монтаж панелей',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#montazh-paneli',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">ПОСЛУГИ</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Детальний огляд всіх наших послуг
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto ">
          {services.map((service, index) => (
            <ServiceTile key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Не знайшли потрібну послугу?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Зв'яжіться з нами, і ми знайдемо рішення для вашого проекту
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              >
                Консультація спеціаліста
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
