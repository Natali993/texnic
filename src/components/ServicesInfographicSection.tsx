'use client';
import Link from 'next/link';

const ServiceInfographicCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <Link href={service.href} className="group block">
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        {/* Number Badge */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
          {index + 1}
        </div>
        
        {/* Icon Section */}
        <div className="p-8 text-center">
          <div className={`w-20 h-20 ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {service.icon}
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>
          
          {/* Services List */}
          <div className="space-y-2">
            {service.services.map((serviceItem: any, serviceIndex: number) => (
              <div key={serviceIndex} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{serviceItem.name}</span>
                <Link 
                  href={serviceItem.href}
                  className="text-cyan-500 hover:text-cyan-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  →
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export function ServicesInfographicSection() {
  const services = [
    {
      title: 'Електромонтажні роботи',
      description: 'Повний спектр зовнішніх електромонтажних робіт від проектування до введення в експлуатацію',
      href: '/elektromontazhni-roboty',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      services: [
        { name: 'Зовнішні електричні мережі', href: '/elektromontazhni-roboty#zovnishni-elektrichni-merezhi' },
        { name: 'Встановлення опор', href: '/elektromontazhni-roboty#vstanovlennia-opor' },
        { name: 'Кабель в землю', href: '/elektromontazhni-roboty#kabel-v-zemliu' },
        { name: 'Трансформаторні підстанції', href: '/elektromontazhni-roboty#transformatorni-pidstantsii' },
        { name: 'Генератори', href: '/elektromontazhni-roboty#generatory' }
      ]
    },
    {
      title: 'Електрична лабораторія',
      description: 'Професійні вимірювання та діагностика електрообладнання атестованою лабораторією',
      href: '/electrichna-laboratoria',
      gradient: 'bg-gradient-to-br from-purple-500 to-blue-600',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      services: [
        { name: 'Вимірювання опору ізоляції', href: '/electrichna-laboratoria#vymiriuvannia-oporu-izoliatsii' },
        { name: 'Вимірювання опору заземлення', href: '/electrichna-laboratoria#vymiriuvannia-oporu-zazemlennia' },
        { name: 'Перевірка релейного захисту', href: '/electrichna-laboratoria#pereviria-rele-zahystu' },
        { name: 'Параметри електромережі', href: '/electrichna-laboratoria#vymiriuvannia-parametriv-elektromerezhі' },
        { name: 'Тепловізорна діагностика', href: '/electrichna-laboratoria#teplovizorna-diagnostyka' }
      ]
    },
    {
      title: 'Блискавкозахист',
      description: 'Комплексні системи захисту від блискавки для будівель та промислових об\'єктів',
      href: '/blyskaykozahyst',
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      services: [
        { name: 'Зовнішній блискавкозахист', href: '/blyskaykozahyst#zovnishnii-blyskaykozahyst' },
        { name: 'Внутрішній блискавкозахист', href: '/blyskaykozahyst#vnutrishnii-blyskaykozahyst' },
        { name: 'Проектування систем', href: '/blyskaykozahyst#proektuvannia-blyskaykozahystu' },
        { name: 'Промислові об\'єкти', href: '/blyskaykozahyst#blyskaykozahyst-promyslovyh-obiektiv' },
        { name: 'Житлові будинки', href: '/blyskaykozahyst#blyskaykozahyst-zhytlovyh-budynkiv' }
      ]
    },
    {
      title: 'Протипожежна обробка',
      description: 'Професійна вогнезахисна обробка конструкцій та матеріалів сертифікованими засобами',
      href: '/antifire-obrobka',
      gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      services: [
        { name: 'Дерев\'яні конструкції', href: '/antifire-obrobka#dereviani-konstruktsii' },
        { name: 'Металеві конструкції', href: '/antifire-obrobka#metalevi-konstruktsii' },
        { name: 'Кабельні лінії', href: '/antifire-obrobka#kabelni-linii' },
        { name: 'Повітропроводи', href: '/antifire-obrobka#povitroprovodу' },
        { name: 'Протипожежні перегородки', href: '/antifire-obrobka#protypozhezhni-perehorodky' }
      ]
    },
    {
      title: 'Сонячні електростанції',
      description: 'Повний цикл створення сонячних електростанцій від проектування до обслуговування',
      href: '/sonychni-elektrostancii',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      services: [
        { name: 'Проектування СЕС', href: '/sonychni-elektrostancii#proektuvannia-ses' },
        { name: 'Монтаж панелей', href: '/sonychni-elektrostancii#montazh-panelei' },
        { name: 'Підключення до мережі', href: '/sonychni-elektrostancii#pidkliuchennia-do-merezhi' },
        { name: 'Акумуляторні системи', href: '/sonychni-elektrostancii#akumuliatorni-systemy' },
        { name: 'Промислові СЕС', href: '/sonychni-elektrostancii#promyslovi-ses' }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Детальна <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">ІНФОГРАФІКА</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Детальний огляд всіх наших послуг з можливістю переходу до конкретних розділів
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <ServiceInfographicCard key={index} service={service} index={index} />
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
