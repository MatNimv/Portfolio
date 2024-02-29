"use client";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { LargeImg } from './LargeImg';
import BodyText from '../atoms/texts/BodyText';

export function CarouselImageFlipper ({images, styling, width, height, } : {
    images: any[],
    styling: string
    width: number,
    height: number
}) {

    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const handleClose = () => {
        setIsImageOpen(false);
        document.querySelector("nav")!.style.display = "flex";
        document.body!.style.overflowY = "scroll";
    }

    const handleImageOpen = (e: any, image: any, index: number) => {
        setIsImageOpen(true);
        console.log("isImageOpen", isImageOpen);
        document.querySelector("nav")!.style.display = "none";
        document.body!.style.overflowY = "hidden";
        
        setSelectedImage(index)
    }

    
    useEffect(() => {
        // Add or remove the 'overflow-hidden' class on the body based on the popup state
        document.body.classList.toggle('overflow-hidden', isImageOpen);
    
        // Clean up the class when the component is unmounted
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isImageOpen]);

    const inline_styling = `${styling} w-5/6 h-full`;
    //https://www.npmjs.com/package/react-responsive-carousel dokumentation

    return (
        <div className='w-full flex justify-center'
        >

            <Carousel 
            showArrows={true}
            showThumbs={false}
            axis="horizontal"
            swipeable={true}
            showIndicators={true}
            className={inline_styling}>
            {images.map((image, index) => (
                <div key={index}
                onClick={(e) => {handleImageOpen(e, image.url, index)}}
                title="Click on me for a larger size!"
                className='opacity-90 hover:opacity-100 relative z-30 hover:cursor-pointer transition-all'>
                    <Image 
                        className="mb-4 rounded-md" 
                        width={width} 
                        height={height} 
                        src={image.url} 
                        alt={image.alt}
                    ></Image>
                    <BodyText text={image.alt} size="small" styling='mb-10' text_color='light-pink'></BodyText>
                    <div className='absolute rounded-md z-20 h-64 w-full bottom-20' onClick={(e) => {handleImageOpen(e, image, index)}}></div>
                </div>
            ))}
            </Carousel>
            <LargeImg images={images} index_img_flipper={selectedImage} isImageOpen={isImageOpen} handleClose={handleClose}></LargeImg>
        </div>
    )
}