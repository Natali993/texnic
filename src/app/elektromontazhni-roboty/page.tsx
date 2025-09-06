import { Layout } from '../../components/Layout';
import Link from 'next/link';

export default function ElektromontazhniRoboty() {
  // Define a single, consistent gradient for all service blocks
  const consistentGradient = "bg-gradient-to-br from-blue-500 to-indigo-600"; // You can change this to your desired gradient

  const serviceBlocks = [
    {
      id: "zovnishni-elektrichni-merezhi",
      title: "Зовнішні електричні мережі",
      description: "Проектування та монтаж зовнішніх електричних мереж різної складності та потужності.",
      details: [
        "Повітряні лінії електропередач 0,4-35 кВ",
        "Кабельні лінії різних напруг",
        "Розподільні мережі населених пунктів",
        "Промислові електричні мережі"
      ],
      backgroundImage: '/external-electricai-networks.png',
      gradient: consistentGradient, // Use the consistent gradient
    },
    {
      id: "vstanovlennia-opor",
      title: "Встановлення опор",
      description: "Професійне встановлення опор електропередач різних типів та висот з використанням спецтехніки.",
      details: [
        "Залізобетонні стовпи СВ-95, СВ-110",
        "Металеві опори різних конструкцій",
        "Дерев'яні стовпи для сільських мереж",
        "Анкерні та проміжні опори"
      ],
      backgroundImage: '/installation.png',
      gradient: consistentGradient, // Use the consistent gradient
    },
    {
      id: "kabel-v-zemliu",
      title: "Прокладання кабелю в землю",
      description: "Підземна прокладка кабельних ліній з дотриманням всіх норм безпеки та захисту.",
      details: [
        "Траншейна прокладка з піщаною подушкою",
        "Горизонтально-направлене буріння",
        "Захист кабелів плитами та трубами",
        "Прокладка в кабельних каналах"
      ],
      backgroundImage: '/undeground-cable.png',
      gradient: consistentGradient, // Use the consistent gradient
    },
    {
      id: "transformatorni-pidstantsii",
      title: "Трансформаторні підстанції",
      description: "Встановлення та підключення трансформаторних підстанцій різної потужності та типу.",
      details: [
        "КТП (комплектні трансформаторні підстанції)",
        "Стовпові трансформатори",
        "Підстанції 10/0,4 кВ",
        "Розподільні пункти РП-10"
      ],
      backgroundImage: '/electrical-substation.png',
      gradient: consistentGradient, // Use the consistent gradient
    },
    {
      id: "generatory",
      title: "Генератори",
      description: "Встановлення та підключення генераторних установок для резервного електропостачання.",
      details: [
        "Дизельні генератори різної потужності",
        "Газові генераторні установки",
        "Системи автоматичного запуску АВР",
        "Підключення до мережі будівлі"
      ],
      backgroundImage: '/generator.png',
      gradient: consistentGradient, // Use the consistent gradient
    },
    {
      id: "elektropostachannia-budivel",
      title: "Електропостачання будівель",
      description: "Комплексне електропостачання житлових, комерційних та промислових об'єктів.",
      details: [
        "Підключення до мереж електропостачання",
        "Встановлення вводно-розподільних пристроїв",
        "Облікові щити та лічильники",
        "Системи резервного живлення"
      ],
      backgroundImage: '/electro-build.png',
      gradient: consistentGradient, // Use the consistent gradient
    },
  ];

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

        {/* Services Grid with translucent background images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceBlocks.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for translucency and readability */}
              <div className={`absolute inset-0 bg-black opacity-60 group-hover:opacity-50 transition-all duration-300 rounded-2xl`}></div>
              
              {/* Gradient overlay using the consistent gradient */}
              <div className={`absolute inset-0 ${service.gradient} opacity-40 group-hover:opacity-30 transition-all duration-300 rounded-2xl`}></div>

              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-white/80 text-sm">
                        <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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