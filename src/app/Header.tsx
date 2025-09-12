"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex px-8 h-14 overflow-hidden items-center">
      <Image
        src="/logotup.png"
        alt="Company Logo"
        width={100}
        height={50}
        className="object-contain"
      />
    </Link>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const services = [
    { name: 'Електромонтажні роботи', href: '/elektromontazhni-roboty' },
    { name: 'Електрична лабораторія', href: '/electrichna-laboratoria' },
    { name: 'Сонячні електростанції', href: '/sonychni-elektrostancii' },
    { name: 'Блискавкозахист', href: '/blyskaykozahyst' },
    { name: 'Протипожежна обробка', href: '/antifire-obrobka' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-8 text-white">
          <li
            ref={dropdownRef}
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="relative hover:text-cyan-400 transition-all duration-300 font-medium flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group-hover:shadow-lg"
            >
              <span className="relative">
                Послуги
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg
                className={`w-4 h-4 transition-all duration-300 ${isServicesOpen ? 'rotate-180 text-cyan-400' : 'group-hover:text-cyan-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-3 w-72 bg-white/95 rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-500 z-50 overflow-hidden ${isServicesOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-4 scale-95'
              }`}>
              {/* Dropdown Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4">
                <h3 className="text-white font-bold text-lg">ПОСЛУГИ</h3>
                <p className="text-cyan-100 text-sm">Оберіть категорію</p>
              </div>

              <div className="py-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group/item flex items-center px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 transition-all duration-300 font-medium border-l-4 border-transparent hover:border-cyan-400"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform scale-0 group-hover/item:scale-100">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1 transform group-hover/item:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">{service.name}</div>
                      <div className="text-xs text-gray-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        Детальніше →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Dropdown Footer */}
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                <Link
                  href="/contact#contact-form"
                  className="text-sm text-cyan-600 hover:text-cyan-700 font-medium flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <span>Потрібна консультація?</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium shadow-lg"
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white p-3 rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
      >
        <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-800/95 border-t border-gray-700 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-6 text-white">
            <li>
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span className="text-cyan-400 font-bold text-lg">Послуги</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Контакти</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const Subheader = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2">
      <div className="container mx-auto max-w-[1140px] px-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+38 (067) 360 75 20</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm font-semibold">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Нам понад 20 років</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg relative">
      <div className="container mx-auto flex items-center md:h-18 justify-between items-center max-w-[1140px] py-0 px-4">
        <Logo />
        <NavigationMenu />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Subheader />
      <MainHeader />
    </header>
  );
};
