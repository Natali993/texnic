import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProcatBanner = () => {
  return (
    <div className="container mx-auto">
      <Link className="relative w-full overflow-hidden rounded-lg shadow-lg" href="/orenda-elektroinstrymentiv">
        <Image
          src="/power-lines.jpg"
          alt="Слайдер"
          width={800}
          height={600}
          layout="responsive"
          className="rounded-lg"
        />
      </Link>
    </div>
  );
};
