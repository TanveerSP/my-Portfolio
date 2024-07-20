import { footer } from '../data/footer';
import { useState, useEffect } from 'react';
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';

function StickFooter() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className=' w-11/12 mx-auto my-10'>
            <div className='relative bg-richblack-4 bg-none bg-opacity-10 backdrop-blur-sm  flex flex-row lg:flex-col lg:h-[400px] items-center gap-5 justify-center px-8 py-1  h-[70px] mx-auto border-[1px] border-richblack-6 rounded-xl '>
                <div className='bg-white text-black hover:text-richblack-1 transition-all ease-in-out hover:scale-125 hover:bg-opacity-10 backdrop-blur-sm rounded-full p-2'>
                    <Link to="/" >
                        <GoHome size={25} />
                    </Link>
                </div>
                {footer.map((item, id) => (
                    <div  className='bg-white text-black hover:text-richblack-1 transition-all ease-in-out hover:scale-125 hover:bg-opacity-10 backdrop-blur-sm rounded-full p-2'>
                        <a key={id}
                            href={item.link}
                            target={item.target}
                            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                        >
                            {item.logo}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StickFooter