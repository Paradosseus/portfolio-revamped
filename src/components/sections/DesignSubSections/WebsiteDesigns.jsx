import propertyLandingPageScreenshot from "../../../assets/design-screenshots/Property-landing-page-screenshot.png";
import recruitmentPageScreenshot from "../../../assets/design-screenshots/Recruitment-page-screenshot.png";
import digitalMarketSpecialistPortfolio from "../../../assets/design-screenshots/Client-portfolio-screenshot.png";
import { Link } from "react-router-dom";

export function WebsiteDesigns() {
    const websiteDesigns = [
        {
            name: "Client Portfolio",
            description: "A Digital Marketing portfolio that I designed for my client using Canva",
            screenshot: digitalMarketSpecialistPortfolio,
            link:"https://www.canva.com/design/DAGGBwZ0RFY/3IWiG6AcY191WvETHCAAGw/edit?utm_content=DAGGBwZ0RFY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
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
        }

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