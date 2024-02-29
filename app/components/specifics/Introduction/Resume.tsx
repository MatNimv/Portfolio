"use client";

import Image from 'next/image';
import { useState } from 'react';
import Button from '../../atoms/Button';
import Header from '../../atoms/texts/Header';
import { CarouselImageFlipper } from '../../molecules/CarouselImageFlipper';
//import { FaRegFilePdf } from 'react-icons/fa';
//import CV_ENG from '../../../../public/CV_MN_ENG.pdf';
//import CV_SWE from '../../../../public/CV_MN_SWE.pdf';


export default function Certificates({ images }: { images: any[]}) {

    return (
        <div className='flex flex-col items-center relative z-10'>
            <CarouselImageFlipper width={1000} height={1000} images={images} styling=""></CarouselImageFlipper>

        </div>
    )
}

/*            <Header text="Download my resumé here!" text_color="beige" size="h6" styling="mb-3 mt-6 text-center"></Header>
            <div className='flex flex-row justify-around w-full'>
                <Button
                    text="English CV"
                    text_color="dark-blue"
                    bg_color="beige"
                    handleClick={() => test()}
                    disabled={false}
                    href="../../../media/CV_MN_ENG.pdf"
                    styling="lg:">
                </Button>
                <FaRegFilePdf className='mt-3 h-8 w-8 md:h-12 md:w-12'></FaRegFilePdf>
                <Button
                    text="Swedish CV"
                    text_color="dark-blue"
                    bg_color="light-blue"
                    handleClick={() => test()}
                    disabled={false}
                    href="../../../media/CV_MN_ENG.pdf"
                    styling="font-2xl">
                </Button>
            </div>*/