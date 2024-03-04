import Header from "../../atoms/texts/Header"
import BodyText from "../../atoms/texts/BodyText"
import Button from "../../atoms/Button"
import { useEffect, useState } from "react"
import ProjectsList from "./ProjectsList"


export const Filter = ({projects } : {
    projects: any[]
}) => {


        const [type, setType] = useState("All");
        const [size, setSize] = useState("All");
        const [relation, setRelation] = useState("All");
        const [skills, setSkills] = useState([""]);
        const [filteredProjects, setFilteredProjects] = useState<any[]>(projects);
        const [filteredProjectsLength, setFilteredProjectsLength] = useState(0);
        const [hasFiltered, setHasFiltered] = useState(false);

        const program_skills = ["JavaScript", "HTML", "CSS", "ReactJS", "NodeJS", "PHP", "Figma", "GCP", "SQL"];
        const paint_skills = ["Digital", "Traditional", "Procreate"];
        const misc_skills = ["Blender", "Animation", "Game Design"];

        const filterProjects = () => {
            let selected_checkboxes = checkCheckBoxes()

            let checkBoxFiltered: any[] = [];
            checkBoxFiltered = projects.filter((project) =>
                selected_checkboxes.every((skill) => project.skills.includes(skill))
                );
            console.log(checkBoxFiltered);
            

            //let filtered = [];
            //check type, size, and relation.
            if (type !== "All" && size !== "All" && relation !== "All"){
                //if type, size and relation is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.type.includes(type) && project.size.includes(size) && project.basics.relation.includes(relation));
            } else if (type !== "All" && size !== "All"){
                //if type and size is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.type.includes(type) && project.size.includes(size));
            } else if (type !== "All" && relation !== "All"){
                //if type and relation is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.type.includes(type) && project.basics.relation.includes(relation));
            } else if (size !== "All" && relation !== "All"){
                //if size and relation is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.size.includes(size) && project.basics.relation.includes(relation));
            } else if (size !== "All"){
                //if size is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.size.includes(size));
            } else if (type !== "All"){
                //if type is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.type.includes(type));
            } else if (relation !== "All"){
                //relation is selected
                checkBoxFiltered = checkBoxFiltered.filter(project => project.basics.relation.includes(relation));
            } else {
                //all projects
                checkBoxFiltered = projects;
            }
            console.log(checkBoxFiltered);
            
            setHasFiltered(true);
            setFilteredProjects(checkBoxFiltered);
            setFilteredProjectsLength(checkBoxFiltered.length);
        }

        const resetFilters = () => {
            setType("All");
            setRelation("All");
            setSize("All");
            setFilteredProjects([]);
            setFilteredProjectsLength(0);
            setHasFiltered(false);
            document.querySelectorAll<HTMLInputElement>('input[type=checkbox]').forEach(el => el.checked = false);
        }

        const checkCheckBoxes = () => {
            var array = []
            var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
            for (var i = 0; i < checkboxes.length; i++) {
                
                array.push((checkboxes[i] as HTMLInputElement).value);
            }
            //setCheckBoxes(array);
            return array;
        }

        //array of skills changes depending on which type of creation : programming || painting || misc
        useEffect(() => {
            //project list is emptied when type change
            setFilteredProjects([]);
            setFilteredProjectsLength(0);
            setHasFiltered(false);
            switch (type) {
                case "Programming":
                    setSkills(program_skills);
                    break;
                case "Painting": 
                    setSkills(paint_skills);
                    break;
                case "Misc": 
                    setSkills(misc_skills);
                    break;
                case "All":
                    setSkills([]);
                    break;
            }
        }, [type])

        return (
            <div className="flex justify-center items-center lg:w-4/5 relative z-10">
                <div className=" bg-light-blue p-6 rounded-md flex flex-col justify-center items-center w-4/5 md:w-3/5 lg:w-full">
                    <Header size="h5" styling="" text_color="dark-blue" text="Basics"></Header>
                    <div className=" w-full flex flex-row justify-around items-center">
                        <div className="flex flex-col justify-center items-center">
                            <Header size="h6" styling="" text_color="dark-blue" text="Type"></Header>
                            <select className=" cursor-pointer" value={type} placeholder="Type" onChange={(e) => {setType(e.target.value);}}>
                                <option label="All" value="All"></option>
                                <option label="Programming" value="Programming"></option>
                                <option label="Painting" value="Painting"></option>
                                <option label="Misc" value="Misc"></option>
                                
                            </select>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Header size="h6" styling="" text_color="dark-blue" text="Size"></Header>
                            <select className=" cursor-pointer" value={size} onChange={(e) => {setSize(e.target.value);}}>
                                <option label="All" value="All"></option>
                                <option label="Large" value="Large"></option>
                                <option label="Medium" value="Medium"></option>
                                <option label="Small" value="Small"></option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                            <Header size="h6" styling="mt-3" text_color="dark-blue" text="Relation"></Header>
                            <select className=" cursor-pointer" value={relation} onChange={(e) => {setRelation(e.target.value)}} >
                                <option label="All" value="All"></option>
                                <option label="Work" value="Work"></option>
                                <option label="School" value="School"></option>
                                <option label="Leisure" value="Leisure"></option>
                                
                            </select>
                        </div>
                    <Header size="h5" styling="my-5" text_color="dark-blue" text="Skills"></Header>
                    {type === "All" ? (
                        <div>
                            <BodyText text="Pick a type to select skills!" styling="" size="small" text_color="dark-blue"></BodyText>
                        </div>) : (
                        <div className="w-full lg:w-4/5">
                            <div className="flex w-full flex-wrap justify-around border-2 border-dark-blue p-2 rounded-md">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center w-3/12">
                                        <BodyText text={skill} text_color="dark-blue" styling="text-center" size="small"></BodyText>
                                        <input key={index} type="checkbox" value={skill}></input>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-around w-3/5 mt-5">
                        <Button 
                        text="Filter" 
                        text_color="beige" 
                        bg_color="dark-blue" 
                        disabled={false}
                        handleClick={filterProjects}
                        href=""
                        styling=""
                        ></Button>
                        <Button 
                        text="Reset" 
                        text_color="beige" 
                        bg_color="dark-blue" 
                        disabled={false}
                        handleClick={resetFilters}
                        href=""
                        styling="ml-3"
                        ></Button>
                    </div>
                    {hasFiltered === false ? (<div></div>) : (<Header size="h6" styling="mt-5 mb-2" text_color="dark-blue" text={`Projects: ${filteredProjectsLength}`}></Header>)}
                    {filteredProjectsLength === 0 ? (<div></div>) : (<ProjectsList projects={filteredProjects}></ProjectsList>)}
                </div>
            </div>
        )
    }