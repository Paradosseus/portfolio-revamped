import coverImage from '../assets/Cover.png';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


export function Main() {
  return (
    <div className=' justify-center flex items-center lg:flex-row md:flex-col md:flex-nowrap flex-wrap md:gap-6 gap-4 mt-10 lg:text-left text-center'>
        <img src={coverImage} alt="" className='xl:w-[350px] lg:w-[300px] md:w-[250px] w-[200px]'  />
        <div>
          <h1 className='xl:text-[45px] lg:text-[35px] md:text-[30px] text-[20px] font-bold'>FRANCIS JOSHUA COLLADO</h1>
          <h3 className='xl:text-[30px] lg:text-[25px] md:text-[20px] text-[15px] mb-2'>WEB DEVELOPER AND DESIGNER</h3>
          <p className='xl:text-[25px] lg:text-[20px] text-[13px] text-justify'>Hi, I’m a Web Developer and Designer based in the Philippines. Equipped with different technological skills, I’ve always had a knack and passion in designing websites and building web applications.</p>
          <div className='xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] flex md:gap-4 gap-2 my-4'>
            <Link to="https://www.facebook.com/profile.php?id=61562426364581" target='_blank'><FaFacebook/></Link>
            <Link to="https://github.com/Paradosseus" target='_blank'><FaGithub/></Link>
            <Link to="https://www.linkedin.com/in/fjcollado/" target='_blank'><FaLinkedin/></Link>
          </div>
        </div>
    </div>
  )
}
