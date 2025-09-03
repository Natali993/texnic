import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function AntifireObrobka() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Протипожежна
            </span>{' '}
            обробка
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">Протипожежна обробка дерев'яних конструкцій</h3>
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
              ПОСЛУГИ
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}