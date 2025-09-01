import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function Posluhy() {
  const services = [
    {
      title: "Електромонтажні роботи",
      description: "Зовнішні електричні мережі, встановлення стовпів, прокладання кабелю в землю",
      href: "/elektromontazhni-roboty",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-600"
    },
    {
      title: "Трансформаторні підстанції",
      description: "Встановлення та підключення трансформаторних підстанцій різної потужності",
      href: "/transformatorni-pidstancii",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-600"
    },
    {
      title: "Сонячні електростанції",
      description: "Проектування, встановлення та підключення сонячних електростанцій",
      href: "/sonychni-elektrostancii",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      title: "Блискавкозахист",
      description: "Системи блискавкозахисту для будівель та споруд",
      href: "/blyskaykozahyst",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-purple-500 to-blue-500"
    },
     {
      title: "Протипожежна обробка",
      description: "Системи протипожежної обробки для будівель та споруд",
      href: "/antifire-obrobka",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-purple-500 to-blue-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Наші <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Послуги</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Повний спектр електромонтажних робіт від проектування до введення в експлуатацію
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className={`group relative overflow-hidden rounded-2xl ${service.gradient} p-8 h-80 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Готові розпочати ваш проект?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Зв'яжіться з нами для безкоштовної консультації та розрахунку вартості
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Залишити заявку
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
      </main>
      <Footer />
    </div>
  );
}