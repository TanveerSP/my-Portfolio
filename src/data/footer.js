import { GoHome } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export const footer = [
   // {
   //    logo: <GoHome size={25} />,
   //    link: '/',
   //    target: '_self',
   // },
   {
      logo: <FaGithub size={25} />,
      link: 'https://github.com/TanveerSP',
      target: '_blank',
   },
   {
      logo: <FaLinkedin size={25} />,
      link: 'https://www.linkedin.com/in/tanveer-pathan/',
      target: '_blank',
   },
   {
      logo: <MdOutlineEmail size={25} />,
      link: 'mailto:tanveerpathan.work@gmail.com',
      target: '_blank',
   },
   {
      logo: <FaInstagram size={25} />,
      link: 'https://www.instagram.com/',
      target: '_blank',
   },
]