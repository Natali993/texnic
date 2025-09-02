"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex px-8 items-center">
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

  const services = [
    { name: 'Електромонтажні роботи', href: '/elektromontazhni-roboty' },
    { name: 'Електрична лабораторія', href: '/electrichna-laboratoria' },
    { name: 'Сонячні електростанції', href: '/sonychni-elektrostancii' },
    { name: 'Блискавкозахист', href: '/blyskaykozahyst' },
    { name: 'Протипожежна обробка', href: '/antifire-obrobka' },
  ];

  return (
    <>
      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-8 text-white">
          <li
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center space-x-1">
              <span>Послуги</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 z-50 ${
              isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="py-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 transition-all duration-200 font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
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
        className="lg:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 border-t border-gray-700 z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4 text-white">
              <li>
                <div className="mb-2">
                  <span className="block text-cyan-400 font-medium mb-2">Послуги:</span>
                  <div className="pl-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block hover:text-cyan-400 transition-colors duration-300 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Link href="/contact" className="block text-cyan-400" onClick={() => setIsMenuOpen(false)}>
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
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
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+38 (067) 360 75 20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center max-w-[1140px] py-4 px-4">
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
