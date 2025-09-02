import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function AntifireObrobka() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white page-content">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div id="dereviani-konstruktsii" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Дерев'яні конструкції</h3>
              <p className="text-gray-600 mb-4">
                Обробка дерев'яних елементів будівель спеціальними вогнезахисними просоченнями та фарбами.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Просочення антипіренами</li>
                <li>• Вогнезахисні фарби та лаки</li>
                <li>• Обробка стропильних систем</li>
                <li>• Захист дерев'яних перекриттів</li>
                <li>• Сертифіковані матеріали</li>
              </ul>
            </div>

            <div id="metalevi-konstruktsii" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Металеві конструкції</h3>
              <p className="text-gray-600 mb-4">
                Застосування вогнезахисних покриттів для металевих несучих конструкцій.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Вогнезахисні фарби та мастики</li>
                <li>• Вермикулітові плити</li>
                <li>• Базальтові мати</li>
                <li>• Захист балок та колон</li>
                <li>• Підвищення вогнестійкості до R120</li>
              </ul>
            </div>

            <div id="kabelni-linii" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Кабельні лінії</h3>
              <p className="text-gray-600 mb-4">
                Захист електричних кабелів спеціальними вогнестійкими матеріалами.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Вогнестійкі обмотки та стрічки</li>
                <li>• Кабельні короби з вогнезахистом</li>
                <li>• Протипожежні подушки</li>
                <li>• Герметизація кабельних проходок</li>
                <li>• Збереження функціональності при пожежі</li>
              </ul>
            </div>

            <div id="povitroprovodу" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Повітропроводи</h3>
              <p className="text-gray-600 mb-4">
                Обробка систем вентиляції вогнестійкими покриттями.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Вогнезахисні покриття для воздуховодів</li>
                <li>• Протипожежні клапани</li>
                <li>• Герметизація вентиляційних проходок</li>
                <li>• Запобігання поширенню диму</li>
                <li>• Відповідність нормам пожежної безпеки</li>
              </ul>
            </div>

            <div id="tekstylni-materialy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Текстильні матеріали</h3>
              <p className="text-gray-600 mb-4">
                Протипожежна обробка тканин, завіс та декоративних елементів.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Просочення тканин антипіренами</li>
                <li>• Обробка театральних завіс</li>
                <li>• Захист декоративних елементів</li>
                <li>• Килими та м'які меблі</li>
                <li>• Сертифікати вогнестійкості</li>
              </ul>
            </div>

            <div id="protypozhezhni-perehorodky" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Протипожежні перегородки</h3>
              <p className="text-gray-600 mb-4">
                Встановлення та обробка протипожежних перегородок і дверей.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Протипожежні двері та ворота</li>
                <li>• Вогнестійкі перегородки</li>
                <li>• Протипожежні віконні блоки</li>
                <li>• Герметизація стиків і швів</li>
                <li>• Межі вогнестійкості EI 30-240</li>
              </ul>
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