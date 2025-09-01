import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function AntifireObrobka() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white pt-32">
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
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Проектування СЕС</h3>
              <p className="text-gray-600 mb-4">
                Індивідуальне проектування сонячних електростанцій з урахуванням ваших потреб.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Розрахунок потужності</li>
                <li>• Вибір оптимального обладнання</li>
                <li>• 3D моделювання</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Монтаж панелей</h3>
              <p className="text-gray-600 mb-4">
                Професійний монтаж сонячних панелей на дахах та наземних конструкціях.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Монтаж на скатних дахах</li>
                <li>• Монтаж на плоских дахах</li>
                <li>• Наземні конструкції</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Підключення до мережі</h3>
              <p className="text-gray-600 mb-4">
                Підключення СЕС до електричної мережі та оформлення "зеленого тарифу".
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Підключення інвертора</li>
                <li>• Встановлення лічильника</li>
                <li>• Оформлення документів</li>
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
