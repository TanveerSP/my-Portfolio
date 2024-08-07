import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [

    {
        id: 1,
        child: <FaLinkedinIn size={25} />,
        href: 'https://www.linkedin.com/in/tanveer-pathan/',
    },
    {
        id: 2,
        child: <FaGithub size={25} />,
        href: 'https://github.com/TanveerSP',
    },
    {
        id: 3,
        child: <FaInstagram size={25} />,
        href: 'https://instagram.com',
    },
]
export default socialLinks