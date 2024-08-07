import propertyLandingPageScreenshot from "../../../assets/web-design-screenshots/Property-landing-page-screenshot.png"
import recruitmentPageScreenshot from "../../../assets/web-design-screenshots/Recruitment-page-screenshot.png"
import digitalMarketSpecialistPortfolio from "../../../assets/web-design-screenshots/Client-portfolio-screenshot.png"
import listitScreenshot from "../../../assets/web-design-screenshots/List-it-screenshot.png"
import furriendsAdminSiteScreenshot from "../../../assets/web-design-screenshots/Furriends-admin-site-screenshot.png"
import furriendsInitialDesignScreen from "../../../assets/web-design-screenshots/Furriends-initial-design-screenshot.png"
import { Link } from "react-router-dom"

export function WebsiteDesigns() {
    const websiteDesigns = [
        {
            name:"Property Landing Page",
            description: "A landing page used to market the property of my client",
            screenshot: propertyLandingPageScreenshot,
            link: "https://www.figma.com/design/POKArucJd8wGL9A4HLmfxQ/Work-Real-Estate-Website?node-id=74-16&t=dLE37nZ5oyUD4rdK-0"
        },
        {
            name:"Recruitment Page",
            description: "A page dedicated for recruiting realtors and mortgage loan officers",
            screenshot: recruitmentPageScreenshot,
            link: "https://www.figma.com/design/POKArucJd8wGL9A4HLmfxQ/Work-Real-Estate-Website?node-id=74-9&t=eJIOep7WAuem2iZJ-1"
        },
        {
            name: "Client Portfolio",
            description: "A Digital Marketing portfolio that I designed for my client using Canva",
            screenshot: digitalMarketSpecialistPortfolio,
            link:"https://www.canva.com/design/DAGGBwZ0RFY/3IWiG6AcY191WvETHCAAGw/edit?utm_content=DAGGBwZ0RFY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
            name: "List-it UI Design (Incomplete)",
            description: "A design of my personal project which is a todo list with REST API arhcitecture",
            screenshot: listitScreenshot,
            link:"https://www.figma.com/design/CjYh3JYZgEnlti5UvVXHsU/List-It?node-id=0-1&t=G7T3CftoPbap2Ykj-1"
        },
        {
            name: "Furriends Web Admin Panel (Incomplete)",
            description: "A personal project to design of the admin panel of College Capstone Project",
            screenshot: furriendsAdminSiteScreenshot,
            link:"https://www.figma.com/design/NBPhYWg62i9T5yWmTOvzi1/Furriends-Admin-Web-app?node-id=0-1&t=H5Blp2JVG8VOIjrg-1"
        },
        {
            name: "Furriends Initial Design",
            description: "An initial UI mobile design of our College Capstone Project",
            screenshot: furriendsInitialDesignScreen,
            link:"https://www.figma.com/design/LhUanX8l8emNhfeI1DR3xB/Furriends---UI---Prototype?node-id=0-1&t=zSQUbgOIzgD6iUdY-1"
        },

    ]

    

    return (
        <div>   
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 my-4">
                {websiteDesigns.map((websiteDesign)=> {
                        return (
                            <div key={websiteDesign.name}>
                                <h3 className="font-bold md:text-[20px] text-[18px] uppercase">{websiteDesign.name}</h3>
                                <p className="md:text-[15px] text-[13px]">{websiteDesign.description}</p>
                                <Link to={websiteDesign.link} target="_blank"><button className="bg-[#0E2954] text-[#fafafa] md:px-4 px-2 md:py-2 py-1 md:mr-2 mr-1 mb-2">Design Link</button></Link>
                                <img src={websiteDesign.screenshot} alt="" className="w-fit"/>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}