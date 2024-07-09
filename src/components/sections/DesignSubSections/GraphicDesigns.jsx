import portfolioCover from "../../../assets/design-screenshots/cover-logo-sample.png";
import companyLogo  from "../../../assets/design-screenshots/company-logo-sample.jpg";

export function GraphicDesign() {
    const graphicDesigns = [
        {
            name: "Client company logo",
            screenshot: companyLogo
        },
        {
            name: "Portfolio Cover",
            screenshot: portfolioCover
        }
    ]

    return (
        <div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 my-4">
                {graphicDesigns.map((graphicDesign)=> {
                    return (
                        <div key={graphicDesign.name}>
                            <img src={graphicDesign.screenshot} alt="" className="my-2 w-fit"/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}