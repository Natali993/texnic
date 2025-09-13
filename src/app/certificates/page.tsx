"use client";
import { Layout } from '../../components/Layout';
import { CTASection } from '@/components/CTASection';
import { useState } from 'react';
import Image from 'next/image';

export default function PageCertificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      alt: 'Кваліфікаційний сертифікат інженера-проектувальника (І категорія, клас наслідкиів СС1)'
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
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="bg-white bg-clip-text text-transparent">
              Сертифікати,
            </span>{' '}
            дозвільні документи
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Сертифікати та дозвільні документи, необхідні для проведення електромонтажних робіт
          </p>
        </div>

        {/* Certificates Grid */}
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
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
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
        <div className="mb-16" />
        <CTASection title="Потрібна консультація з електромонтажних робіт?" description="Наші спеціалісти допоможуть підібрати оптимальне рішення для вашого проекту" />
      </div>

      {/* Modal for full-screen image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Сертифікат у повному розмірі"
              width={800}
              height={1000}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}