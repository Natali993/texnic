import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ href, title, description, icon, gradient }: any) => {
  return (
    <Link href={href}>
      <div className={`group relative overflow-hidden rounded-2xl ${gradient} p-8 h-80 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="relative z-10 h-full flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              {icon}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-white/90 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Чому обирають нас</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <div className="text-gray-600">Інструментів в наявності</div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-600">Підтримка клієнтів</div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-gray-600">Років досвіду</div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
            <div className="text-gray-600">Задоволених клієнтів</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionSecond = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Наші <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Послуги</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Професійний прокат інструментів та якісні послуги для вашого бізнесу та особистих потреб
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <ServiceCard
            href="/prokat"
            title="Прокат інструментів"
            description="Широкий вибір професійних інструментів для будівництва, ремонту та садівництва"
            gradient="bg-gradient-to-br from-cyan-500 to-teal-600"
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          />
          
          <ServiceCard
            href="/posluhy"
            title="Послуги"
            description="Професійні послуги з монтажу, ремонту та технічного обслуговування обладнання"
            gradient="bg-gradient-to-br from-teal-500 to-cyan-600"
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          
          <ServiceCard
            href="/remont-honda"
            title="Ремонт Honda GX"
            description="Спеціалізований ремонт та обслуговування двигунів Honda GX серії"
            gradient="bg-gradient-to-br from-cyan-600 to-teal-500"
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <StatsSection />
    </div>
  );
};
