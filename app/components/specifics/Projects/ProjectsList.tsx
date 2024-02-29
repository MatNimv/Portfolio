import Head from "next/head";
import BodyText from "../../atoms/texts/BodyText";
import Header from "../../atoms/texts/Header";
import { ProjectPopUp } from "./ProjectPopUp";
import { useState } from "react";

export default function ProjectsList({ projects }: { projects: any}) {

    const [projectOpen, setProjectOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const handleClose = () => {setProjectOpen(false); document.body!.style.overflowY = "scroll";document.querySelector<HTMLElement>("#hamburger")!.style.zIndex = "50"}
    //https://www.npmjs.com/package/react-responsive-carousel dokumentation

    const handleProjectOpen = (e: any, project: any) => {
        setProjectOpen(true);
        setSelectedProject(project)
        document.body!.style.overflowY = "hidden";
        document.querySelector<HTMLElement>("#hamburger")!.style.zIndex = "0"
    }

    return (
        <div id="projects_list" className='flex flex-col items-center w-11/12 border-2 border-dark-blue rounded-md overflow-scroll max-h-72 overflow-x-hidden'>
            {projects.map((project: any, index: number) => (
                <div key={index}  onClick={(e) => { handleProjectOpen(e, project) }} className={`  cursor-pointer flex flex-row lg:flex-col justify-evenly items-center w-full py-6 lg:py-3 opacity-95 hover:opacity-100 transition-all ${index % 2 ? "bg-light-blue" : "bg-light-pink"} hover:bg-beige `}>
                    <BodyText text={project.basics.title} text_color="dark-blue" styling="font-medium" size="normal"></BodyText>
                    <div className={`flex flex-row justify-center `}>
                        <BodyText text={`${project.basics.month} ${project.basics.year}`} text_color="dark-blue" styling="" size="small"></BodyText>
                    </div>
                </div>
            ))}
            <ProjectPopUp project={selectedProject} isProjectOpen={projectOpen} handleClose={handleClose}></ProjectPopUp>
        </div>
    )
}

//<div className="h-0.5 w-11/12 bg-dark-blue mt-2"></div>