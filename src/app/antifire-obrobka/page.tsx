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

        {/* Full-width Service Block with translucent background image */}
        <div className="flex justify-center mb-16">
          <div
            className="w-full max-w-7xl rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/untifie.png)', // Path to your background image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay for translucency and readability */}
            <div className="absolute inset-0 bg-white opacity-80 rounded-2xl"></div>

            <div className="relative z-10"> {/* Content needs to be above the overlay */}
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