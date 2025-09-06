import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function Blyskaykozahyst() {
  // Define a consistent gradient for the service block
  const consistentGradient = "bg-gradient-to-br from-cyan-500 to-teal-600";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Системи
            </span>{' '}
            блискавкозахисту
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Професійне проектування та монтаж систем блискавкозахисту для будівель та споруд
          </p>
        </div>

        {/* Full-width Service Block with translucent background image */}
        <div className="flex justify-center mb-16">
          <div
            id="zovnishnii-blyskaykozahyst"
            className={`group relative w-full max-w-7xl overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 z-0 rounded-2xl"
              style={{
                backgroundImage: 'url(/bluskzaxpng.png)', // Path to your background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.25, // Adjust this value for desired translucency (0 to 1)
              }}
            ></div>

            {/* Overlay for additional styling (e.g., gradient) on top of the translucent image */}
            <div className={`absolute inset-0 ${consistentGradient} opacity-40 group-hover:opacity-30 transition-all duration-300 rounded-2xl z-10`}></div>

            {/* Content needs to be above all overlays */}
            <div className="relative z-20 h-full flex flex-col justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-3">Зовнішній блискавкозахист</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Встановлення блискавковідводів та заземлюючих пристроїв для захисту будівель від прямих ударів блискавки.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    Стрижневі блискавковідводи різної висоти
                  </li>
                  <li className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    Тросові блискавковідводи для великих об'єктів
                  </li>
                  <li className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    Сітчасті блискавковідводи для плоских дахів
                  </li>
                  <li className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    Заземлюючі контури та електроди
                  </li>
                  <li className="flex items-center text-white/80 text-sm">
                    <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    Струмовідводи та кріплення
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Important Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-12 mb-16 border border-red-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Чому важливий блискавкозахист?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Безпека людей</h3>
              <p className="text-gray-600">Захист від ураження блискавкою та пожеж</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Захист обладнання</h3>
              <p className="text-gray-600">Запобігання пошкодженню електронної техніки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Економія коштів</h3>
              <p className="text-gray-600">Уникнення витрат на ремонт та заміну</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Етапи роботи</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Обстеження</h3>
              <p className="text-gray-600">Аналіз об'єкта та розрахунок ризиків</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Проектування</h3>
              <p className="text-gray-600">Розробка проекту системи захисту</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Монтаж</h3>
              <p className="text-gray-600">Встановлення обладнання та заземлення</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Тестування</h3>
              <p className="text-gray-600">Перевірка працездатності системи</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Захистіть свій об'єкт від блискавки
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Отримайте професійну консультацію з блискавкозахисту
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