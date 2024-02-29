"use client";

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../atoms/texts/Header';
import { useState } from 'react';
import { ProjectPopUp } from './ProjectPopUp';
import { useEffect } from 'react';
import BodyText from '../../atoms/texts/BodyText';

export function CarouseProjectFlipper ({projects, styling } : {
    projects: any[],
    styling: string
}) {
    
    const [projectOpen, setProjectOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const handleClose = () => {setProjectOpen(false); document.body!.style.overflowY = "scroll"; document.querySelector<HTMLElement>("#hamburger")!.style.zIndex = "50"}
    //https://www.npmjs.com/package/react-responsive-carousel dokumentation

    const handleProjectOpen = (e: any, project: any) => {
        setProjectOpen(true);
        setSelectedProject(project)
        document.body!.style.overflowY = "hidden";
        document.querySelector<HTMLElement>("#hamburger")!.style.zIndex = "0";
    }

    useEffect(() => {
        // Add or remove the 'overflow-hidden' class on the body based on the popup state
        document.body.classList.toggle('overflow-hidden', projectOpen);
    
        // Clean up the class when the component is unmounted
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [projectOpen]);

    //function that checks the width of the screen | width and height of image changes
    
    return (
        <div className="relative flex flex-col items-center w-full" id="carousel_project_flipper">
            <Carousel 
            showArrows={true}
            showThumbs={false}
            axis="horizontal"
            swipeable={true}
            showIndicators={true}
            centerMode
            centerSlidePercentage={100}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            className='w-5/6 h-1/5'
            >
                {projects.map((project, index) => (
                    <div key={index} className="opacity-90 hover:opacity-100 hover:cursor-pointer transition-all" >
                        <div className='relative z-10 ' >
                            <div className='bg-gradient-to-t from-black absolute backdrop-blur-sm rounded-md z-20 h-full w-full bottom-0' onClick={(e) => { handleProjectOpen(e, project) }}>
                                <div className="absolute bottom-2 text-left ml-6 z-30 " onClick={(e) => { handleProjectOpen(e, project) }}>
                                    <Header text={project.basics.title} text_color="beige" size="h5" styling='relative z-30'></Header>
                                    <BodyText text={`${project.basics.month} ${project.basics.year}`} size="small" styling='md:my-5 mb-10' text_color='light-pink'></BodyText>
                                </div>
                            </div>
                                <img className="mb-4 h-80 bg-contain relative z-10 rounded-md"  src={project.images[0].url} alt={project.images[0].alt}></img>
                        </div>
                    </div>
                ))}
            </Carousel>
            <ProjectPopUp project={selectedProject} isProjectOpen={projectOpen} handleClose={handleClose}></ProjectPopUp>
            </div>
    )
}