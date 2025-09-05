import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function SonychniElektrostancii() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Сонячні
            </span>{' '}
            електростанції
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Проектування, встановлення та підключення сонячних електростанцій для дому та бізнесу
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

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
              ПОСЛУГИ
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
