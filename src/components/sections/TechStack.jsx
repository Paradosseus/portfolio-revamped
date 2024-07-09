import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

export function Techstack() {
    return (
        <section>
            <h2 className="xl:text-[40px] lg:text-[30px] md:text-[24px] text-[20px] font-bold">TECH STACK</h2>
            <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] text-[10px]">Below are the technologies I learned and used on my projects:</p>
            <div className="grid place-items-center xl:grid-cols-12 lg:grid-cols-6 grid-cols-3 xl:text-[75px] lg:text-[60px] md:text-[45px] text-[35px] gap-6 xl:my-10 lg:my-6 my-4">
                <div>
                    <FaHtml5 className="m-auto"/>
                    <p className="icon-text">HTML5</p>
                </div>
                <div>
                    <FaCss3Alt className="m-auto"/>
                    <p className="icon-text">CSS3</p>
                </div>
                <div>
                    <SiJavascript className="m-auto"/>
                    <p className="icon-text">JavaScript</p>
                </div>
                <div>
                    <RiTailwindCssFill className="m-auto"/>
                    <p className="icon-text">Tailwind</p>
                </div>
                <div>
                    <FaReact className="m-auto"/>
                    <p className="icon-text">React JS</p>
                </div>
                <div>
                    <TbBrandKotlin className="m-auto"/>
                    <p className="icon-text">Kotlin</p>
                </div>
                <div>
                    <SiPhp className="m-auto"/>
                    <p className="icon-text">PHP</p>
                </div>
                <div>
                    <FaLaravel className="m-auto"/>
                    <p className="icon-text">Laravel</p>
                </div>
                <div>
                    <SiMysql className="m-auto"/>
                    <p className="icon-text">MySQL</p>
                </div>
                <div>
                    <IoLogoFirebase className="m-auto"/>
                    <p className="icon-text">Firebase</p>
                </div>
                <div>
                    <IoLogoFigma className="m-auto"/>
                    <p className="icon-text">Figma</p>
                </div>
                <div>
                    <SiAdobephotoshop className="m-auto"/>
                    <p className="icon-text">Photoshop</p>
                </div>
            </div>
        </section>
    )
}