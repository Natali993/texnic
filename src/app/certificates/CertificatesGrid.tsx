"use client";
import Image from 'next/image';

export const CertificatesGrid = ({ setSelectedImage }: { setSelectedImage: (src: string) => void; }) => {
  const certificates = [
    {
      id: 1,
      src: '/5343527271933279413.webp',
      alt: 'Дозвіл №168.12.56 (випробування електричного устатковання)'
    },
    {
      id: 2,
      src: '/5343527271933279414.webp',
      alt: 'Свідоцтво про відповідність системи керування вимірюваннями'
    },
    {
      id: 3,
      src: '/5343527271933279415.webp',
      alt: 'Кваліфікаційний сертифікат інженера-проектувальника (ІI категорія, клас наслідкиів СС1)'
    },
    {
      id: 4,
      src: '/5343527271933279418.webp',
      alt: 'Кваліфікаційний сертифікат інженера-проектувальника (І категорія, клас наслідкиів СС2)'
    },
    {
      id: 5,
      src: '/5343527271933279419.webp',
      alt: 'Ліцензія Державної інспекції техногенної безпеки України'
    },
    {
      id: 6,
      src: '/5343527271933279421.webp',
      alt: 'Дозвіл №1125.12.30 (роботи в діючих електроустановках)'
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => setSelectedImage(certificate.src)}
        >
          <div className="relative h-64 w-full">
            <Image
              src={certificate.src}
              alt={certificate.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {certificate.alt}
            </h3>
            <p className="text-gray-600 text-sm">
              Натисніть для перегляду у повному розмірі
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
