import logo from "../assets/FJ-logo-01.svg"
import { Link } from "react-router-dom"
import { MdFileDownload } from "react-icons/md";
export function Header() {


    return (
        <header className="flex justify-between items-center my-10">
            <div>
                <img src={logo} alt="" className="xl:w-[60px] lg:w-[50px] md:w-[40px] w-[30px]"/>
            </div>
            <div>
            <Link to="https://fjcollado.vercel.app/" target="_blank" className="lg:text-[20px] md:text-[15px] text-[13px]">RESUME<MdFileDownload className="inline-block lg:text-4xl text-2xl"/></Link>
            </div>
        </header>
    )
}