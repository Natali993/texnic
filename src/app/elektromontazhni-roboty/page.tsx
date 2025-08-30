import { Header } from '../Header';
import { Footer } from '../Footer';
import Link from 'next/link';

export default function ElektromontazhniRoboty() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Електромонтажні
              </span>{' '}
              роботи
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Професійні зовнішні електромонтажні роботи з встановлення електричних мереж
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
                <li>• Повітряні лінії електропередач</li>
                <li>• Кабельні лінії</li>
                <li>• Розподільні мережі</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Встановлення стовпів</h3>
              <p className="text-gray-600 mb-4">
                Професійне встановлення опор електропередач різних типів та висот.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Залізобетонні стовпи</li>
                <li>• Металеві опори</li>
                <li>• Дерев'яні стовпи</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Прокладання кабелю в землю</h3>
              <p className="text-gray-600 mb-4">
                Підземна прокладка кабельних ліній з дотриманням всіх норм безпеки.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Траншейна прокладка</li>
                <li>• Горизонтально-направлене буріння</li>
                <li>• Захист кабелів</li>
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
      </main>
      <Footer />
    </div>
  );
}
