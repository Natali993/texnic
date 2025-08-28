import React from 'react';


export const SectionSixth = () => {
  
  return (
       <div className="bg-white min-h-screen">
        <h1 className="text-center font-serif uppercase tracking-[0.06em] leading-none text-[#133553] text-[42px] md:text-[56px] lg:text-[64px]">
         НАШІ ПАРТНЕРИ
        </h1>

        <section className="w-full flex flex-col md:flex-row justify-center items-center gap-4 py-8 px-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <a href="https://osushiteli.ua/" target="_blank" rel="noopener noreferrer">
              <img
                src="partner1.png"
                alt="Partner logo 1"
                className="w-full max-w-xl object-contain cursor-pointer"
              />
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="partner2.png"
              alt="Partner logo 2"
              className="w-full max-w-xl object-contain"
            />
          </div>
        </section>
      </div>
  
  );
};


