"use client";
import Image from 'next/image';

export const ImageModal = ({ imageSrc, onClose }: { imageSrc: string; onClose: (value: any) => void; }) => {
  return (
    <>
      {imageSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => onClose(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => onClose(null)}
              className="absolute top-4 right-4 cursor-pointer text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
            >
              ×
            </button>
            <Image
              src={imageSrc}
              alt="Сертифікат у повному розмірі"
              width={800}
              height={1000}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
};
