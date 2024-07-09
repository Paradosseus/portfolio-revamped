import { useState } from "react"
import { WebsiteDesigns } from "./DesignSubSections/WebsiteDesigns"
import { GraphicDesign } from "./DesignSubSections/GraphicDesigns"


export function Designs() {
    const [currentSubSection, setCurrentSubSection] = useState("website")
    
    console.log(currentSubSection)
    return (
        <section>
            <h2 className="xl:text-[40px] lg:text-[30px] md:text-[24px] text-[20px] font-bold">Designs</h2>
            <p className="xl:text-[20px] lg:t ext-[15px] md:text-[12px] text-[10px]">Below are the web and graphics that I've made</p>
            <ul className="text-[20px]">
                <li className={`${currentSubSection === "website" ? "active-nav-item" : ""} subsection-nav`} onClick={()=> setCurrentSubSection("website")}>Website Designs</li>
                <li className={`${currentSubSection === "graphics" ? "active-nav-item" : ""} subsection-nav`} onClick={()=>setCurrentSubSection("graphics")}>Graphic Designs</li>
            </ul>

            {currentSubSection === "website" ? <WebsiteDesigns/> : <GraphicDesign/> }
        </section>
    )
}