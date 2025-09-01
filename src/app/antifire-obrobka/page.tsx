import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function AntifireObrobka() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Протипожежна
              </span>{' '}
              обробка
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Професійна протипожежна обробка дерев'яних та металевих конструкцій, кабельних ліній та повітропроводів для підвищення вогнестійкості
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                {/* Іконка для Дерев'яних конструкцій: стилізоване полум'я та дерев'яна балка */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4m0 0C9.697 5.768 7 8 7 8s2.784-2.222 5-2.222 5 2.222 5 2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Дерев'яних конструкцій</h3>
              <p className="text-gray-600 mb-4">
                Обробка дерев'яних елементів будівель спеціальними вогнезахисними просоченнями та фарбами для запобігання займанню та уповільнення горіння.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                {/* Іконка для Металевих конструкцій: металева балка під захистом */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Металевих конструкцій</h3>
              <p className="text-gray-600 mb-4">
                Застосування вогнезахисних фарб, мастик або плит для захисту металевих несучих конструкцій (балок, колон), що дозволяє їм зберігати міцність під час пожежі протягом тривалого часу, запобігаючи обвалу будівлі.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                {/* Іконка для Кабельних ліній: кабель з блискавкою, захищений від вогню */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM17 14V10a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Кабельних ліній</h3>
              <p className="text-gray-600 mb-4">
                Використання спеціальних вогнестійких матеріалів, обмоток, прокладок та кабельних коробок для захисту електричних кабелів. Це гарантує, що у випадку пожежі електричні системи залишатимуться функціональними, забезпечуючи роботу систем пожежної сигналізації та аварійного освітлення.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                {/* Іконка для Повітропроводів: повітропровід з контролем диму */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14l3-3m0 0l3 3m-3-3v8m5-10v0h.01M17 10v0h.01M6 10h.01M19 10h.01M6 14v0h.01M19 14v0h.01M6 18v0h.01M19 18v0h.01M13 18v0h.01M11 18v0h.01M9 18v0h.01M15 18v0h.01M17 18v0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Повітропроводів</h3>
              <p className="text-gray-600 mb-4">
                Обробка повітропроводів та систем вентиляції спеціальними вогнестійкими покриттями або обмотками, що запобігає поширенню вогню та диму по всій будівлі через вентиляційні канали, що є критичним для евакуації людей.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Захистіть свій об'єкт від пожежі вже сьогодні!
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Отримайте професійну консультацію з пожежної безпеки
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