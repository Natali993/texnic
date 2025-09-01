// components/PageContent.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomTitle } from './Title';


const NavBlock = ({ href, src, alt, width, height }: any) => {
    return (
        <div className="w-full md:w-1/2">
            <Link href={href}>
                <div className="w-image align_center transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        layout="responsive"
                    />
                </div>
            </Link>
        </div>
    )
}

export const ProcatPoslugi = () => {
    return (
        <div className="">
            <div className="container mx-auto px-4">
                <CustomTitle>ПРОКАТ</CustomTitle>
                <div className="flex flex-col md:flex-row gap-8">
                    <NavBlock href={"/prokat"} src={"/power-drill.jpg"} alt={"Прокат"} width={600} height={400} />
                    <div className="w-full md:w-1/2">
                        <Link href="/posluhy">
                            <div className="w-image align_center transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/electrician-work.jpg"
                                    alt="Послуги"
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


