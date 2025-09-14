"use client";
export const HeroSection = () => {
  return (
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
  );
};
