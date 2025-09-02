import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function SonychniElektrostancii() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Сонячні
              </span>{' '}
              електростанції
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Проектування, встановлення та підключення сонячних електростанцій для дому та бізнесу
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div id="proektuvannia-ses" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Проектування СЕС</h3>
              <p className="text-gray-600 mb-4">
                Індивідуальне проектування сонячних електростанцій з урахуванням ваших потреб та особливостей об'єкта.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Розрахунок потужності та енергоспоживання</li>
                <li>• Аналіз сонячної інсоляції</li>
                <li>• Вибір оптимального обладнання</li>
                <li>• 3D моделювання та візуалізація</li>
                <li>• Техніко-економічне обґрунтування</li>
              </ul>
            </div>

            <div id="montazh-panelei" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Монтаж панелей</h3>
              <p className="text-gray-600 mb-4">
                Професійний монтаж сонячних панелей на різних типах поверхонь з гарантією якості.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Монтаж на скатних дахах (черепиця, метал)</li>
                <li>• Монтаж на плоских дахах з баластом</li>
                <li>• Наземні конструкції та трекери</li>
                <li>• Фасадні сонячні системи</li>
                <li>• Навіси та паркінги з СЕС</li>
              </ul>
            </div>

            <div id="pidkliuchennia-do-merezhi" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Підключення до мережі</h3>
              <p className="text-gray-600 mb-4">
                Повний цикл підключення СЕС до електричної мережі та оформлення "зеленого тарифу".
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Підключення інверторів та оптимізаторів</li>
                <li>• Встановлення двонаправленого лічильника</li>
                <li>• Оформлення документів в облененерго</li>
                <li>• Отримання дозволів та сертифікатів</li>
                <li>• Введення в експлуатацію</li>
              </ul>
            </div>

            <div id="obslugovuvannia-ses" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Обслуговування СЕС</h3>
              <p className="text-gray-600 mb-4">
                Технічне обслуговування та моніторинг роботи сонячних електростанцій.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Планове технічне обслуговування</li>
                <li>• Очищення сонячних панелей</li>
                <li>• Діагностика та ремонт обладнання</li>
                <li>• Моніторинг продуктивності</li>
                <li>• Гарантійне та післягарантійне обслуговування</li>
              </ul>
            </div>

            <div id="akumuliatorni-systemy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Акумуляторні системи</h3>
              <p className="text-gray-600 mb-4">
                Встановлення систем накопичення енергії для максимальної ефективності СЕС.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Літій-іонні акумулятори</li>
                <li>• Гібридні інвертори</li>
                <li>• Системи управління енергією</li>
                <li>• Резервне живлення</li>
                <li>• Оптимізація споживання</li>
              </ul>
            </div>

            <div id="promyslovi-ses" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Промислові СЕС</h3>
              <p className="text-gray-600 mb-4">
                Великі сонячні електростанції для промислових підприємств та енергетичних компаній.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• СЕС потужністю від 1 МВт</li>
                <li>• Наземні сонячні парки</li>
                <li>• Промислові дахові системи</li>
                <li>• Системи трекінгу сонця</li>
                <li>• Підключення до мереж високої напруги</li>
              </ul>
            </div>
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

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Хочете встановити сонячну електростанцію?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Отримайте безкоштовну консультацію та розрахунок вартості проекту
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Безкоштовна консультація
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
