import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const SectionFirst = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <Link href="/orenda-elektroinstrymentiv">
            <Image
              src="/sectionFirst.png"
              alt="Слайдер"
              width={2500}
              height={900}
              layout="responsive"
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
