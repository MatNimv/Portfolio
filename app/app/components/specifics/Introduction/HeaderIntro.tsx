import HeaderText from '../../atoms/texts/Header';
import BodyText from '../../atoms/texts/BodyText';
import Image from 'next/image'
import screen_converter from '../../functions/screen_converter';
import { useEffect, useState } from 'react';


export default function HeaderIntro ({ headerInfo } : { headerInfo: any; }) {

    const [height, setHeight] = useState(400);
    const [screen_width, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            //setScreenWidth(window.innerWidth)
            const screen_size = screen_converter();
            
            if(screen_size === "desktop") setHeight(800);
            else setHeight(400);
        }

        window.addEventListener("resize", handleResize, false);
        handleResize()
    }, []);
    


    return (
        <div className="w-full relative flex justify-center">
            <div className="h-full bg-light-blue w-full relative flex justify-center" id="header-intro" style={{height: `${height}px`}}>
                <div className='h-full w-full'>
                    <Image 
                    src={headerInfo.me_img}
                    alt="Matilda Nimvik smiling and wearing a blue striped sweater and dotted hairband"
                    width={1000}
                    height={1000}
                    className="absolute h-full w-100vw sm:w-60vw md:w-50vw lg:w-70vw xl:w-60vw bottom-0 -left-20 md:left-20  "
                    />
                </div>
                <div className='w-3/5 absolute bottom-0 right-0 p-2 md:w-3/6 md:bottom-3 md:right-20 md:p-4 lg:p-8 lg:right-11/12 lg:w-2/6 lg:bottom-1/4 xl:bottom-1/12 xl:bottom-10 xl:w-2/4 xl:right-16 bg-white/50 rounded-md'>
                    <HeaderText text_color="dark-blue" size="h4" text="Hi there! I'm" styling=""></HeaderText>
                    <HeaderText text_color="dark-blue" size="h2" text="Matilda Nimvik" styling="text-left"></HeaderText>
                    <BodyText styling="text-left" text_color="dark-blue font-semibold" size="large" text={headerInfo.me_text}></BodyText>
                </div>
            </div>
        </div>
    )
}