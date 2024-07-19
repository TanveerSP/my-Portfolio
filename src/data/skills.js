import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export const skills = [
    {
        category: 'Front-end',
        items: [
            { name: 'HTML', icon: <FaHtml5 size={40} /> },
            { name: 'CSS', icon: <FaCss3 size={40} /> },
            { name: 'JS', icon: <IoLogoJavascript size={40} /> },
            { name: 'React.js', icon: <FaReact size={40} /> },
            { name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
            { name: 'BootStrap', icon: <FaBootstrap size={40} /> },
        ],
    },
    {
        category: 'Back-end',
        items: [
            { name: 'Node.js', icon: <FaNodeJs size={40} /> },
            { name: 'Express', icon: <SiExpress size={40} /> },
            { name: 'MongoDB', icon: <SiMongodb size={40} /> },
            { name: 'SQL', icon: <SiMysql size={40} /> },
        ],
    },
    {
        category: 'Programing',
        items: [
            { name: 'Cpp', icon: <TbBrandCpp size={40} />  },
            { name: 'Python', icon: <FaPython size={40} /> },
            { name: 'Java', icon: <FaJava size={40} /> },
            { name: 'JS', icon: <IoLogoJavascript size={40} /> },
        ]
    },
    {
        category: 'Tools',
        items: [
            { name: 'GitHub', icon: <FaGithub size={40} /> },
            { name: 'Git', icon: <FaGitAlt size={40} /> },
            { name: 'Postman', icon: <SiPostman size={40} /> },
        ],
    },
];