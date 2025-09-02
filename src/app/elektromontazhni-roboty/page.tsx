import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function ElektromontazhniRoboty() {
  return (
    <Layout>
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Електромонтажні
              </span>{' '}
              роботи
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Професійні зовнішні електромонтажні роботи з встановлення електричних мереж
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div id="zovnishni-elektrichni-merezhi" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Зовнішні електричні мережі</h3>
              <p className="text-gray-600 mb-4">
                Проектування та монтаж зовнішніх електричних мереж різної складності та потужності.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Повітряні лінії електропередач 0,4-35 кВ</li>
                <li>• Кабельні лінії різних напруг</li>
                <li>• Розподільні мережі населених пунктів</li>
                <li>• Промислові електричні мережі</li>
              </ul>
            </div>

            <div id="vstanovlennia-opor" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Встановлення опор</h3>
              <p className="text-gray-600 mb-4">
                Професійне встановлення опор електропередач різних типів та висот з використанням спецтехніки.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Залізобетонні стовпи СВ-95, СВ-110</li>
                <li>• Металеві опори різних конструкцій</li>
                <li>• Дерев'яні стовпи для сільських мереж</li>
                <li>• Анкерні та проміжні опори</li>
              </ul>
            </div>

            <div id="kabel-v-zemliu" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Прокладання кабелю в землю</h3>
              <p className="text-gray-600 mb-4">
                Підземна прокладка кабельних ліній з дотриманням всіх норм безпеки та захисту.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Траншейна прокладка з піщаною подушкою</li>
                <li>• Горизонтально-направлене буріння</li>
                <li>• Захист кабелів плитами та трубами</li>
                <li>• Прокладка в кабельних каналах</li>
              </ul>
            </div>

            <div id="transformatorni-pidstantsii" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Трансформаторні підстанції</h3>
              <p className="text-gray-600 mb-4">
                Встановлення та підключення трансформаторних підстанцій різної потужності та типу.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• КТП (комплектні трансформаторні підстанції)</li>
                <li>• Стовпові трансформатори</li>
                <li>• Підстанції 10/0,4 кВ</li>
                <li>• Розподільні пункти РП-10</li>
              </ul>
            </div>

            <div id="generatory" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Генератори</h3>
              <p className="text-gray-600 mb-4">
                Встановлення та підключення генераторних установок для резервного електропостачання.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Дизельні генератори різної потужності</li>
                <li>• Газові генераторні установки</li>
                <li>• Системи автоматичного запуску АВР</li>
                <li>• Підключення до мережі будівлі</li>
              </ul>
            </div>

            <div id="elektropostachannia-budivel" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Електропостачання будівель</h3>
              <p className="text-gray-600 mb-4">
                Комплексне електропостачання житлових, комерційних та промислових об'єктів.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Підключення до мереж електропостачання</li>
                <li>• Встановлення вводно-розподільних пристроїв</li>
                <li>• Облікові щити та лічильники</li>
                <li>• Системи резервного живлення</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Потрібна консультація з електромонтажних робіт?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Наші спеціалісти допоможуть підібрати оптимальне рішення для вашого проекту
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
    </Layout>
  );
}
