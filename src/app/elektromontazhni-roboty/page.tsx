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
              ПОСЛУГИ
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
