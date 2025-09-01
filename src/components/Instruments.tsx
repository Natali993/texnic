import Image from 'next/image';
import Link from 'next/link';
import { CustomTitle } from './Title';

export const Instruments = () => {
  const categories = [
    {
      name: 'ЕЛЕКТРОІНСТРУМЕНТ',
      imageSrc: '/power-drill.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Power tools',
      href: '/elektroinstrument/',
    },
    {
      name: 'ДЛЯ БЕТОННИХ РОБІТ',
      imageSrc: '/concrete-mixer.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'For concrete work',
      href: '/dla-betonuh-robit/',
    },
    {
      name: 'ВІДБІЙНІ МОЛОТКИ',
      imageSrc: '/jackhammer.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Demolition hammers',
      href: '/vidbiuni-molotku/',
    },
    {
      name: 'КЛІНІНГОВА техніка',
      imageSrc: '/cleaning-equipment.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Cleaning equipment',
      href: '/kliningova-tehnika/',
    },
    {
      name: 'ВІБРОПЛИТИ',
      imageSrc: '/concrete-mixer.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Vibrating plates',
      href: '/vibriplutu/'
    },
    {
      name: 'ПЕРФОРАТОРИ BOSCH',
      imageSrc: '/power-drill.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Bosch perforators',
      href: '/pervorator-bosch/',
    },
    {
      name: 'БЕНЗИНОВІ ГЕНЕРАТОРИ',
      imageSrc: '/electrical-substation.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Gasoline generators',
      href: '/benzynovi-generatoru/',
    },
    {
      name: 'САДОВИЙ інструмент',
      imageSrc: '/garden-tools.jpg',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Garden tools',
      href: '/sadovui-instrument/',
    }
  ];

  return (
    <div className="container mx-auto px-4 ">
      <CustomTitle>
        Інструмент в ПРОКАТ
      </CustomTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={category.imageSrc}
                alt={category.altText}
                width={category.imageWidth}
                height={category.imageHeight}
                sizes="(max-width: 390px) 100vw, 390px"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2 text-black">
              {category.name}
            </h3>
            <Link href={category.href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300">
              ДЕТАЛЬНІШЕ
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}