'use client';

import { useState, useEffect } from 'react';

import Navbar from './components/constants/Navbar';
import Header from './components/atoms/texts/Header';
import Resume from './components/specifics/Introduction/Resume';
import { DotFiller } from './components/constants/DotFiller';
import { fetchProjects, fetchPapers, addProject, fetchMisc } from '../firebaseconfig';

import HeaderIntro from './components/specifics/Introduction/HeaderIntro';
import { CarouseProjectFlipper } from './components/specifics/Projects/CarouselProjectFlipper';

import { Contact } from './components/molecules/Contact';
import Certificates from './components/specifics/Introduction/Certificates';
import { Filter } from './components/specifics/Projects/Filter';
import { LoadingScreen } from './components/constants/LoadingScreen';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [CV_papers, setCV_papers] = useState([]);
  const [bach_papers, setBach_papers] = useState([]);
  const [header_img, setHeader_img] = useState("");
  const [miscInfo, setMiscInfo] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  function randomiseArr(array: any) {
    let i = array.length;
    while (i > 0) {
      const ri = Math.floor(Math.random() * i);
      i--;
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }


  async function getData() {
    const projects = await fetchProjects();
    const misc = await fetchMisc();

    setProjects(randomiseArr(projects));
    setMiscInfo(randomiseArr(misc));

    const papers = await fetchPapers();
    setBach_papers(papers.bach);
    setCV_papers(papers.CV);
  }



  useEffect(() => {
    //document.body!.style.overflowY = "hidden";
    setShowVideo(true);


    const timeout = setTimeout(() => {
      setShowVideo(false);
    }, 5000); // Hide the video after 5 seconds (adjust as needed)
    getData();
    document.body!.style.overflowY = "scroll";
    //addProject();
    return () => clearTimeout(timeout);

  }, []);


  return (
    <main id="top" className=' w-full bg-dark-blue text-beige'>
      <LoadingScreen styling={` ${showVideo ? "opacity-100 z-70" : "opacity-0 z-0"}`}></LoadingScreen>

        <div className={` transition-all ${showVideo ? "fixed bg-black w-screen h-screen inset-0 z-60" : "opacity-0 "}`}></div>
        <div className={`${!showVideo ? "opacity-100" : "opacity-0 hidden"}`}>
          <HeaderIntro headerInfo={miscInfo}></HeaderIntro>
          <Navbar></Navbar>
          <div className='lg:flex lg:flex-row lg:my-20'>
            <div id="resumé" className='md:flex lg:flex-col md:w-full md:justify-center lg:justify-start md:items-center md:content-center'>

              <div className=' md:w-4/5'>
                <Header text="RESUMÉ" text_color='beige' size='h2' styling="text-center my-20 lg:my-5"></Header>
                <Resume images={CV_papers}></Resume>
              </div>
            </div>

            <div className='md:flex md:w-full justify-center lg:justify-start md:items-center md:content-center md:mt-0 lg:flex-col '>
              <div className='md:w-4/5'>
                <Header text="CERTIFICATES" text_color='beige' size='h2' styling="text-center my-10 lg:my-5"></Header>
                <Certificates images={bach_papers}></Certificates>
              </div>
            </div>

          </div>
          <DotFiller space="medium" color="" size="8"></DotFiller>
          <div id="projects">
            <Header text="PROJECTS" text_color='beige' size='h1' styling="text-center mb-16"></Header>

            <div className='lg:flex lg:flex-row lg:my-20 md:items-center lg:items-start content-start '>

              <div className='lg:flex lg:flex-col lg:w-full '>
                <Header text="ALL" text_color='beige' size='h2' styling="text-center mb-10"></Header>
                <div className=' md:flex md:justify-center md:items-center md:content-center'>
                  <div className='md:w-3/5 lg:w-full xl:w-4/5'>
                    <CarouseProjectFlipper projects={projects} styling=""></CarouseProjectFlipper>
                  </div>
                </div>

              </div>

              <div className='lg:flex lg:flex-col lg:w-full lg:justify-start lg:items-center lg:content-center'>
                <Header text="FILTER" text_color='beige' size='h2' styling="text-center mb-10 mt-20 lg:mt-0"></Header>
                <Filter projects={projects}></Filter>
              </div>
            </div>
            <DotFiller space="medium" color="" size="8"></DotFiller>
          </div>
          <div id="contact">
            <Header text="CONTACT ME" text_color='beige' size='h1' styling="text-center mb-16"></Header>
            <Contact></Contact>
          </div>
        </div>

    </main>
  )
}