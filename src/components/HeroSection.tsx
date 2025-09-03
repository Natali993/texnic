import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center pt-20 md:pt-33">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  ЕЛЕКТРОМОНТАЖНІ
                </span>
                <br />
                <span className="text-white">РОБОТИ</span>
              </h1>

              <div className="w-16 lg:w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mb-6"></div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Професійні електромонтажні роботи, встановлення електричних мереж,
                трансформаторних підстанцій та сонячних електростанцій.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Проектів</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Років досвіду</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Підтримка</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/posluhy"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-sm sm:text-base"
                >
                  ПОСЛУГИ
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Залишити заявку
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-30"></div>

              {/* Image Container with Floating Cards */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
                <Image
                  src="/pictures9.png"
                  alt="Електромонтажники європейської зовнішності працюють на вишці"
                  width={400}
                  height={200}
                  className="rounded-xl shadow-2xl w-full h-auto"
                />

                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 lg:p-4 border border-white/20 hidden sm:block">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm lg:text-base">Якість</div>
                      <div className="text-white text-xs lg:text-sm">Сертифіковані роботи</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 lg:p-4 border border-white/20 hidden sm:block">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm lg:text-base">Швидко</div>
                      <div className="text-white text-xs lg:text-sm">Терміни виконання</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};