'use client';

import Link from 'next/link';

const ServiceTile = ({ service }: { service: any }) => {
  return (
    <div className="group block">
      <div
        className="relative rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-40 sm:h-44 bg-cover bg-center border border-gray-200 dark:border-gray-700"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

        {/* Content */}
        <div className="relative z-10 p-3 sm:p-4 h-full flex flex-col justify-end">
          <h3 className="text-lg font-bold text-white drop-shadow-md group-hover:text-cyan-300 transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {service.category}
          </p>
        </div>

        {/* Full-tile clickable link (covers entire image area) */}
        <Link href={service.href} className="absolute inset-0 z-20" aria-label={service.name}>
          <span className="sr-only">Перейти: {service.name}</span>
        </Link>
      </div>
    </div>
  );
};

export function ServicesInfographicSection() {
  const services = [
    {
      name: 'Зовнішні електричні мережі',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#zovnishni-elektrichni-merezhi',
      image: '/external-electricai-networks.png',
    },
    {
      name: 'Встановлення опор',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#vstanovlennia-opor',
      image: '/installation.png',
    },
    {
      name: 'Прокладання кабелю в землю',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#kabel-v-zemliu',
      image: '/undeground-cable.png',
    },
    {
      name: 'Трансформаторні підстанції',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#transformatorni-pidstantsii',
      image: '/electrical-substation.png',
    },
    {
      name: 'Генератори',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#generatory',
      image: '/generator.png',
    },
    {
      name: 'Електропостачання будівель',
      category: 'Електромонтажні роботи',
      href: '/elektromontazhni-roboty#elektropostachannia-budivel',
      image: '/electro-build.png',
    },
    {
      name: 'Вимірювання та випробування електричного устаткування',
      category: 'Електротехнічна лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-oporu-izoliatsii',
      image: '/el-lab-incide-lab.webp',
    },
    {
      name: 'Вимірювання та випробування електроустановок напругою до 1 кВ',
      category: 'Електротехнічна лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-oporu-zazemlennia',
      image: '/opir-zazem.png',
    },
    {
      name: 'Випробування електрозахисних засобів',
      category: 'Електротехнічна лабораторія',
      href: '/electrichna-laboratoria#vymiriuvannia-elecktro-zashysnykh-zasobiv',
      image: '/electrotehnicna-lab.webp',
    },
    {
      name: 'Зовнішній блискавкозахист',
      category: 'Блискавкозахист',
      href: '/blyskaykozahyst#zovnishniy-blyskavozakhist',
      image: '/flash-2.webp',
    },
    {
      name: 'Активний зовнішній блискавкозахист',
      category: 'Блискавкозахист',
      href: '/blyskaykozahyst#active-blyskaykozahyst',
      image: '/active-flesh-protection.webp',
    },
    {
      name: 'Оформлення та видача технічної документації',
      category: 'Блискавкозахист',
      href: '/blyskaykozahyst#docs-blyskaykozahyst',
      image: '/el-docs.webp',
    },
    {
      name: 'Протипожежна обробка деревʼяних конструкцій',
      category: 'Протипожежна обробка',
      href: '/antifire-obrobka#dereviani-konstruktsii',
      image: '/untifie.png',
    },
    {
      name: 'Монтаж панелей',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#montazh-paneley',
      image: '/sunpan.png',
    },  
    {
      name: 'Промислові СЕС',
      category: 'Сонячні електростанції',
      href: '/sonychni-elektrostancii#promyslovi-ses',
      image: '/promSES.png',
    },
    {
      name: 'Немає потрібної послуги?',
      category: 'Напишіть нам',
      href: '/contact#contact-form',
      image: '/contacts.png',
    },
  ];

  return (
    <div id={"posluhy"} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">НАШІ ПОСЛУГИ</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceTile key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
