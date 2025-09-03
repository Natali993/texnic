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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Вимірювання опору ізоляції',
      category: 'Електрична лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-oporu-izoliatsii',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Вимірювання опору заземлення',
      category: 'Електрична лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-oporu-zazemlennia',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Зовнішній блискавкозахист',
      category: 'Блискавкозахист',
      href: '/blyskaykozahyst#zovnishniy-blyskavozakhist',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Протипожежна обробка дерев\'яних конструкцій',
      category: 'Протипожежна обробка',
      href: '/antifire-obrobka#dereviani-konstruktsii',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Монтаж панелей',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#montazh-paneley',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Підключення до мережі',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#pidkliuchennia-do-merezhi',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Обслуговування СЕС',
      category: 'Електромонтажні роботи',
      href: '/sonychni-elektrostancii#obslugovuvannia-ses',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Промислові СЕС',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#promyslovi-ses',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },


  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">НАШІ ПОСЛУГИ</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceTile key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}