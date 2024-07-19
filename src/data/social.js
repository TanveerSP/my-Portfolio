import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const socialLinks = [

    {
        id: 1,
        child: (<>
            <FaLinkedinIn className='text-[#ade3fd]' size={25} />
        </>),
        href: 'https://www.linkedin.com/in/tanveer-pathan/',
    },
    {
        id: 2,
        child: (<>
            <FaGithub className='text-[#c199ff]' size={25} />
        </>),
        href: 'https://github.com/TanveerSP',
    },
    {
        id: 3,
        child: (<>
            <IoIosMail className='text-[#e698c3] ' size={25} />
        </>),
        href: 'mailto:tspathan012@gmail.com',
    },
]
export default  socialLinks