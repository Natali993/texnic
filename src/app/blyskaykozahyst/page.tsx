import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function Blyskaykozahyst() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white page-content">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Системи
              </span>{' '}
              блискавкозахисту
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Професійне проектування та монтаж систем блискавкозахисту для будівель та споруд
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div id="zovnishnii-blyskaykozahyst" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Зовнішній блискавкозахист</h3>
              <p className="text-gray-600 mb-4">
                Встановлення блискавковідводів та заземлюючих пристроїв для захисту будівель від прямих ударів блискавки.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Стрижневі блискавковідводи різної висоти</li>
                <li>• Тросові блискавковідводи для великих об'єктів</li>
                <li>• Сітчасті блискавковідводи для плоских дахів</li>
                <li>• Заземлюючі контури та електроди</li>
                <li>• Струмовідводи та кріплення</li>
              </ul>
            </div>

            <div id="vnutrishnii-blyskaykozahyst" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Внутрішній блискавкозахист</h3>
              <p className="text-gray-600 mb-4">
                Захист електричного обладнання від імпульсних перенапруг та наведених струмів.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• УЗІП класів I, II, III</li>
                <li>• Розрядники для високовольтних мереж</li>
                <li>• Обмежувачі перенапруг ОПН</li>
                <li>• Екранування кабелів та приміщень</li>
                <li>• Еквіпотенціальне з'єднання</li>
              </ul>
            </div>

            <div id="proektuvannia-blyskaykozahystu" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Проектування систем</h3>
              <p className="text-gray-600 mb-4">
                Розробка проектної документації систем блискавкозахисту відповідно до діючих норм.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Розрахунок зон захисту</li>
                <li>• Оцінка ризику ураження блискавкою</li>
                <li>• Технічні рішення та специфікації</li>
                <li>• Кошторисна документація</li>
                <li>• Погодження в контролюючих органах</li>
              </ul>
            </div>

            <div id="obslugovuvannia-blyskaykozahystu" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Обслуговування систем</h3>
              <p className="text-gray-600 mb-4">
                Технічне обслуговування та перевірка працездатності систем блискавкозахисту.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Планові огляди та вимірювання</li>
                <li>• Перевірка опору заземлення</li>
                <li>• Діагностика УЗІП та розрядників</li>
                <li>• Ремонт пошкоджених елементів</li>
                <li>• Ведення технічної документації</li>
              </ul>
            </div>

            <div id="blyskaykozahyst-promyslovyh-obiektiv" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Промислові об'єкти</h3>
              <p className="text-gray-600 mb-4">
                Спеціалізовані рішення блискавкозахисту для промислових підприємств та складних об'єктів.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Захист резервуарів та ємностей</li>
                <li>• Блискавкозахист димових труб</li>
                <li>• Системи для вибухонебезпечних зон</li>
                <li>• Захист кранів та високих споруд</li>
                <li>• Комплексні рішення для заводів</li>
              </ul>
            </div>

            <div id="blyskaykozahyst-zhytlovyh-budynkiv" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Житлові будинки</h3>
              <p className="text-gray-600 mb-4">
                Надійний захист приватних будинків, котеджів та багатоповерхових будівель.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Блискавковідводи для приватних будинків</li>
                <li>• Захист багатоповерхових будівель</li>
                <li>• УЗІП для побутової техніки</li>
                <li>• Заземлення електроустановок</li>
                <li>• Консультації для власників</li>
              </ul>
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
                Всі послуги
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
