import { Designs } from "./sections/Designs"
import {Projects } from "./sections/Projects"
import { Techstack } from "./sections/TechStack"

export function SectionContainer(props) {


    return(
       <>
       {props.activeTab === "techStack" ? <Techstack/> : props.activeTab === "designs" ? <Designs /> : <Projects /> }
       </>
    )
}