import { Link } from "react-router-dom";
import citeitoutPreview from "../../assets/project-screenshots/citeitout-preview.png"
import pokelogPreview from "../../assets/project-screenshots/pokelog-preview.png";
import newsletterPreview from "../../assets/project-screenshots/newsletter-preview.png";
import furriendsPreview from "../../assets/project-screenshots/furriends-preview.png";
import nerdhubPreview from "../../assets/project-screenshots/nerdhub-preview.png";
import listitPreview from "../../assets/project-screenshots/listit-preview.png";


export function Projects() {
    const projects = [
        {
            name: "Cite-it-out",
            description: "A category game built in HTML, CSS, Javascript",
            tools: ["HTML", "CSS", "JavaScript"],
            screenshot: citeitoutPreview,
            githubLink: "https://github.com/Paradosseus/cite-it-out.git",
            siteLink: "https://cite-it-out.vercel.app/"
        },
        {
            name: "List-it",
            description: "A simple fullstack Todo list app",
            tools: ["React", "Laravel", "Rest API"],
            screenshot: listitPreview,
            githubLink: "https://github.com/Paradosseus/Listit.git",
            siteLink: ""
        },
        {
            name: "NerdHub",
            description: "A Landing page built in Wordpress",
            tools: ["Wordpress"],
            screenshot: nerdhubPreview,
            githubLink: "",
            siteLink: "https://nerdhub8.wordpress.com/"
        },
        {
            name: "PokeLog",
            description: "A Pokedex like application with the use of PokeAPI",
            tools: ["React", "TailwindCSS", "Poke API"],
            screenshot: pokelogPreview,
            githubLink: "https://github.com/Paradosseus/pokelog",
            siteLink: "https://poke-log.vercel.app/"
        },
        {
            name: "Responsive Newsletter - FEM",
            description: "Newsletter project from Frontend Mentor",
            tools: ["HTML", "CSS", "JavaScript"],
            screenshot: newsletterPreview,
            githubLink: "https://github.com/Paradosseus/Responsive-Newsletter-with-Form-Validation",
            siteLink: "https://responsive-newsletter-with-form-validation.vercel.app/"
        },
        {
            name: "Furriends - Captsone Project",
            description: "A mobile pet adoption application",
            tools: ["Kotlin", "Firebase"],
            screenshot: furriendsPreview,
            githubLink: "https://github.com/Paradosseus/Furriends",
            siteLink: ""
        }
    ];




    return (
        <section>
            <h2 className="xl:text-[40px] lg:text-[30px] md:text-[24px] text-[20px] font-bold">PROJECTS</h2>
            <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] text-[10px]">These are the compilation of projects I've developed</p>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 xl:my-10 lg:my-6 my-4">
                {projects.map((project)=>{
                    return (
                        <div key={project.name}>
                            <h3 className="font-bold md:text-[20px] text-[18px] uppercase">{project.name}</h3>
                            <p className="md:text-[15px] text-[13px]">{project.description}</p>
                            <div>
                                {project.tools.map((tool, index)=> {
                                    return (
                                        <span key={index} className=" md:text-[17px] text-[15px]">{tool}{index !== project.tools.length - 1 && " · "}</span>
                                    )
                                })}
                            </div>
                            <div className="mb-2">
                                {project.siteLink && <Link to={project.siteLink} target="_blank"><button className="bg-[#0E2954] text-[#fafafa] md:px-4 px-2 md:py-2 py-1 md:mr-2 mr-1">DEMO</button></Link>}
                                {project.githubLink && <Link to={project.githubLink} target="_blank"><button className="bg-[#0E2954] text-[#fafafa] md:px-4 px-2 md:py-2 py-1 md:mr-2 ">CODE</button></Link>}
                            </div>
                            <img src={project.screenshot} alt="" className="w-fit"/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}