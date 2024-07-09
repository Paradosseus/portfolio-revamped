import { useState } from "react"

export function Navigation(props) {
    

    return (
        <nav className="text-right">
            <ul className="inline-block xl:text-[25px] lg:text-[20px] md:text-[15px] text-[12px]">
                <li className={props.activeTab === "techStack"&& "active-nav-item"} onClick={() => props.setActiveTab("techStack")}>TECH STACK</li>
                <li className={props.activeTab === "designs"&& "active-nav-item"} onClick={() => props.setActiveTab("designs")}>DESIGNS</li>
                <li className={props.activeTab === "projects"&& "active-nav-item"} onClick={() => props.setActiveTab("projects")}>PROJECTS</li>
            </ul>
        </nav>
    )
}