import Image from "next/image";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="w-full md:w-1/3 mb-8 md:mb-0">
      <h4 className="text-xl font-bold mb-6 text-white">Контакти</h4>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-gray-300">м. Рівне, вул Київська, 42</p>
        </div>
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <p className="text-gray-300">+38 (067) 360 64 83</p>
        </div>
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <a
            href="mailto:texnik.ua@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            texnik.ua@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
      <div className="text-center px-8">
        <Image
          src="/logotup.png"
          alt="Company Logo"
          width={400}
          height={400}
          className="object-contain mb-4 mx-auto"
        />
        <p className="text-gray-400 text-sm max-w-xs">
          Професійні електромонтажні роботи, монтаж електричних мереж та сонячних електростанцій
        </p>
      </div>
    </div>
  );
};

const CategoriesMenu = () => {
  return (
    <div className="w-full md:w-1/3">
      <h4 className="text-xl font-bold mb-6 text-white">Категорії</h4>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Головна
          </Link>
        </li>
        <li>
          <Link href="/elektromontazhni-roboty" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Електромонтажні роботи
          </Link>
        </li>
        <li>
          <Link href="/electrichna-laboratoria" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Електротехнічна лабораторія
          </Link>
        </li>
        <li>
          <Link href="/sonychni-elektrostancii" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Сонячні електростанції
          </Link>
        </li>
        <li>
          <Link href="/blyskaykozahyst" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Блискавкозахист
          </Link>
        </li>
        <li>
          <Link href="/antifire-obrobka" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Протипожежна обробка
          </Link>
        </li>
      </ul>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 pt-8 border-t border-gray-700">
      <a
        href="#"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        aria-label="Facebook"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        aria-label="Instagram"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
        </svg>
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mt-auto">
      <div className="max-w-[1140px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <Contacts />
          <Logo />
          <CategoriesMenu />
        </div>
        <SocialLinks />
        <div className="text-center pt-8 border-t border-gray-700 mt-8">
          <p className="text-gray-400 text-sm">
            © 2025 ТЕХНІК. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};
