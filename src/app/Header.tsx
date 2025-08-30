"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/picturesHeader/logo.png"
        alt="Company Logo"
        width={150}
        height={50}
        className="object-contain"
      />
    </Link>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-8 text-white">
          <li>
            <Link href="/" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Головна
            </Link>
          </li>
          <li>
            <Link href="/prokat" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Прокат
            </Link>
          </li>
          <li>
            <Link href="/posluhy" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Послуги
            </Link>
          </li>
          <li>
            <Link href="/remont-honda" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Ремонт Honda GX
            </Link>
          </li>
          <li>
            <Link href="/zluka" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Злука
            </Link>
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
                <Link href="/" className="block hover:text-cyan-400 transition-colors duration-300">
                  Головна
                </Link>
              </li>
              <li>
                <Link href="/prokat" className="block hover:text-cyan-400 transition-colors duration-300">
                  Прокат
                </Link>
              </li>
              <li>
                <Link href="/posluhy" className="block hover:text-cyan-400 transition-colors duration-300">
                  Послуги
                </Link>
              </li>
              <li>
                <Link href="/remont-honda" className="block hover:text-cyan-400 transition-colors duration-300">
                  Ремонт Honda GX
                </Link>
              </li>
              <li>
                <Link href="/zluka" className="block hover:text-cyan-400 transition-colors duration-300">
                  Злука
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block text-cyan-400">
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
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>techprokat.rv.ua@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs">м. Рівне, вул Київська, 42</span>
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
