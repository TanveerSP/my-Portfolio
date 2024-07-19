"use client"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { navLinks } from '../../data/navLinks'
import { motion } from 'framer-motion';



const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleLinkClick = (target) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false); // Close the mobile menu if open
    };


    const variants = {
        open: {
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
            opacity: 1,
            x: 0,
            delay: 0.5,
        },
        closed: { opacity: 0, x: '100%' },
    };
    const transition = {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.5,
    };

    const links = [
        // { id: 1, title: 'Home', target: 'home' },
        { id: 1, title: 'Skills', target: 'skills' },
        { id: 2, title: 'works', target: 'works' },
        { id: 3, title: 'about', target: 'about' },
        { id: 4, title: 'contact', target: 'contact' },
    ];

    return (
        <div className={`md:fixed flex sm:relative bg-none bg-opacity-10 backdrop-blur-sm w-screen relative z-50 h-16 items-center justify-center border-b-[1px] border-b-richblack-7 translate-y-  transition-all duration-500`}>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
                <Link to="/">
                    <div className=' text-[18px] text-richblack-1'>
                        <span className=' mr-2'>©</span>
                        <span className=''>Tanveer</span>
                    </div>
                </Link>

                <nav className='lg:inline-block hidden'>
                    <ul className='flex gap-x-6 text-richblack-1 hover:cursor-pointer'>
                        {links.map(link => (
                            <li key={link.id}
                                className='px-4 cursor-pointer capitalize text-richblack-200 text-xl font-normal hover:scale-105 duration-200 first-letter '
                                onClick={() => handleLinkClick(link.target)}>
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`inline-block lg:hidden`}>
                    <button
                        className='w-8 h-5 flex flex-col justify-between z-50 relative'
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {/* Menu button */}
                        <div className='w-8 h-1 bg-richblack-3 rounded-lg'></div>
                        <div className='w-8 h-1 bg-richblack-3 rounded-lg'></div>
                        <div className='w-8 h-1 bg-richblack-3 rounded-lg'></div>
                    </button>
                    {/* Menu list */}
                    <motion.div
                        className='absolute top-0 right-0 w-[50vw] h-screen bg-richblack-10 text-richblack-1 flex flex-col items-center justify-center gap-8 text-4xl shadow-lg'
                        initial={false}
                        animate={open ? 'open' : 'closed'}
                        variants={variants}
                        transition={transition}
                        style={{ pointerEvents: open ? 'auto' : 'none' }}
                    >
                        {links.map((link => (
                            <Link to={link.url}>{link.title}</Link>
                        )))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Navbar




// {navLinks.map((link, index) => (
//     <li key={index.id} className='text-white'>
//         <a href={link.id}>{link.title}</a>
//     </li>
// ))

// }