import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import BodyText from "../atoms/texts/BodyText";
import { Carousel } from "react-responsive-carousel";


export function LargeImg({ images, isImageOpen, handleClose, index_img_flipper }: 
    { 
        images: any[], 
        isImageOpen: boolean,
        handleClose: any,
        index_img_flipper: number
    }) {

    const inline_styling = ``;
    
    if(images === null || isImageOpen === false) return;
    return (
        <div className="fixed inset-0 z-80 w-screen h-screen backdrop-blur-sm bg-black/75 overflow-y-scroll" onClick={handleClose}>
            <div className="relative w-full lg:top-5 flex flex-col content-center justify-center items-center z-40" id="carousel_img_wrapper">
                <RxCross1 className="w-10 h-10 my-7 md:w-20 md:h-20 md:top-6 relative top-14 z-80 text-light-blue hover:text-dark-blue transition-all" onClick={handleClose}></RxCross1>
                <div className="w-full h-full lg:w-full lg:flex lg:flex-col lg:items-center justify-center content-center lg:relative lg:left-mini">
                    <Carousel
                        className="lg:w-full lg:flex lg:flex-col z-100 lg:justify-center lg:items-center lg:content-center "
                        useKeyboardArrows={false}
                        swipeable={false}
                        showIndicators={false}
                        showArrows={false}
                        showStatus={false}
                    >
                        {images.map((img, index) => (
                            <div key={index} className={`w-full lg:w-11/12 relative pointer-events-none z-20 mt-20 flex flex-col justify-center items-center`}>
                                <img className="h-11/12 w-full rounded-md" alt={img.alt} src={img.url}></img>
                                <BodyText styling='mt-5 text-center mx-3' text={img.alt} text_color={"light-pink"} size="medium"></BodyText>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

        </div>
    )
}