import companyLogo  from "../../../assets/graphic-design-screenshots/Client-company-logo.jpg"
import portfolioCover from "../../../assets/graphic-design-screenshots/Portfolio-cover-logo.png"
import capstoneSurveyPoster from "../../../assets/graphic-design-screenshots/Capstone-survey-poster.jpg"
import kuribohRefugeLogo from "../../../assets/graphic-design-screenshots/Kuriboh-refuge-logo.png"


export function GraphicDesign() {
    const graphicDesigns = [
        {
            name: "Client Company Logo",
            src: companyLogo
        },
        {
            name: "Portfolio Cover",
            src: portfolioCover
        }, 
        {
            name: "Capstone Survey Poster",
            src: capstoneSurveyPoster
        },
        {
            name: "Kuriboh Refuge Logo",
            src: kuribohRefugeLogo
        }
    ]

    return (
        <div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 my-4">
                {graphicDesigns.map((graphicDesign)=> {
                    return (
                        <div key={graphicDesign.name}>
                            <img src={graphicDesign.src} alt="" className="my-2 w-fit"/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}