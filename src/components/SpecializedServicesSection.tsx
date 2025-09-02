import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ category, index }: { category: any, index: number }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={category.imageSrc}
            alt={category.altText}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link 
            href={category.href}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
          >
            ДЕТАЛЬНІШЕ
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
          {category.name}
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>

      {/* Number Badge */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
        {index + 1}
      </div>
    </div>
  );
};

export function SpecializedServicesSection() {
  const categories = [
    {
      name: 'ЕЛЕКТОМОНТАЖНІ РОБОТИ',
      imageSrc: '/pictures8.png',
      altText: 'Професійний електрик європейської зовнішності встановлює внутрішню електропроводку',
      href: '/elektromontazhni-roboty',
    },
    {
      name: 'ЕЛЕКТРИЧНА ЛАБОРАТОРІЯ',
      imageSrc: '/pictures5.png',
      altText: 'Послуги вимірювання ізоляції',
      href: '/osvitlennya/',
    },
    {
      name: 'БЛИСКАВКОЗАХИСТ',
      imageSrc: '/pictures3.png',
      altText: 'Встановлення камер відеоспостереження та систем безпеки',
      href: '/systemy-bezpeky/',
    },
    {
      name: 'ПРОТИПОЖЕЖНА ОБРОБКА',
      imageSrc: '/pictures2.png',
      altText: 'Встановлення протипожежних систем та електричної сигналізації',
      href: '/protypozhezhna-obrobka/',
    },
    {
      name: 'СОНЯЧНІ ЕЛЕКСТРОСТАНЦІЇ',
      imageSrc: '/pictures4.png',
      altText: 'Електричні панелі управління та системи автоматизації',
      href: '/avtomatyzaciya/'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Види <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">ПОСЛУГ</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Оберіть категорію, щоб дізнатись деталі
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Потрібна консультація спеціаліста?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Зв'яжіться з нами, і ми допоможемо підібрати найкраще рішення для ваших електромонтажних потреб
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
        </div>
      </div>
    </div>
  );
}
