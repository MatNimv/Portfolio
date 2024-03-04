import Header from "../../atoms/texts/Header";
import BodyText from "../../atoms/texts/BodyText";
import { CarouselImageFlipper } from "../../molecules/CarouselImageFlipper";
import { DotList } from "../../atoms/DotList";
import { ProjectBtns } from "./ProjectBtns";
import { DotFiller } from "../../constants/DotFiller";
import { fetchProjects } from "../../../../firebaseconfig";
import { ProjectText } from "./ProjectText"
import { FaMobile } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export function ProjectPopUp ({project, isProjectOpen, handleClose} : {
    project: any,
    isProjectOpen: boolean,
    handleClose: any,
}) {

    if(project === null || isProjectOpen === false) return

    return (
        <div id="project_popup" className="fixed inset-0 z-60 h-screen w-screen flex justify-center backdrop-blur-sm bg-black/75">
            <div className=" w-11/12 my-4 bg-black-blue rounded-md overflow-y-scroll flex flex-col items-center overflow-x-hidden">
                
                <div className="flex items-center flex-col mt-7">
                <RxCross1 className="w-10 h-10 my-7 mb-10 md:w-20 md:h-20 text-light-blue z-60 hover:text-dark-blue transition-all" onClick={handleClose}></RxCross1>
                    <Header text_color="light-pink" text={project.basics.title} size="h3" styling="mb-3 text-center"></Header>
                    <Header text_color="light-pink" text={`${project.basics.month} ${project.basics.year}`} size="h4" styling="mt-4"></Header>
                    <div className="flex flex-row justify-around">
                        <Header text_color="light-pink" text={`${project.size} Size `} size="h6" styling="mt-4 mr-2"></Header>
                        <Header text_color="light-pink" text={` ${ project.basics.relation} Project`} size="h6" styling="my-4"></Header>
                    </div>
                    
                </div>
                <CarouselImageFlipper images={project.images} width={1000} height={200} styling="mt-4"></CarouselImageFlipper>
                <div className="flex w-full justify-center mt-10">
                    {project.type === "Programming" && <div className="w-2/5 flex flex-row justify-around">
                        <FaMobile className={`h-10 w-10 md:w-20 md:h-20 ${!project.format.mobile ? "text-red-500" : "text-green-300"}`} title={`${!project.format.mobile ? "This website isn't mobile friendly." : "This website is mobile friendly." }`}></FaMobile>
                        <IoDesktopOutline className={`h-10 w-10 md:w-20 md:h-20 ${!project.format.desktop ? "text-red-500" : "text-green-300"}`} title={`${!project.format.desktop ? "This website isn't desktop friendly." : "This website is desktop friendly." }`}></IoDesktopOutline>
                    </div> }
                </div>
                <div className="flex flex-row w-full justify-evenly items-start mt-12">
                    <DotList type="linklist" title="Links" bg_color="light-blue" text_color="dark-blue" items={project.links} styling=""></DotList>
                    <DotList type="" title="Skills" bg_color="light-blue" text_color="dark-blue" items={project.skills} styling=""></DotList>
                </div>
                <DotFiller space="medium" color="" size=""></DotFiller>
                <ProjectText
                    body_text_description={project.text.description}
                    body_text_was_fun={project.text.was_fun}
                    body_text_was_hard={project.text.was_hard}
                    body_text_was_learned={project.text.was_learned}
                    text_color="light-pink"
                    styling="">
                </ProjectText>
                <CarouselImageFlipper images={project.bts} height={200} width={900} styling="mt-4"></CarouselImageFlipper>
                <div className="flex flex-row w-full justify-evenly items-start mt-7">
                    <RxCross1 className="w-10 h-10 md:w-20 md:h-20 relative my-7 text-light-blue z-60 hover:text-dark-blue transition-all" onClick={handleClose}></RxCross1>
                </div>
            </div>
        </div>
    )

}
//https://hattifnatt-ixdqvtcibq-ew.a.run.app/

//<ProjectBtns left={test} exit={handleClose} right={test}></ProjectBtns>