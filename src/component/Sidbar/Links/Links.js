import React from 'react'
import { navLinks } from '../../../data/navLinks'

const Links = () => {
    return (
        <div className=' absolute w-full h-full bg-richblack-5 flex flex-col items-center justify-center '>
            <ul className='text-xl font-medium '>
                {navLinks.map((link, index) => (
                    <li key={index} className='list-none mb-10'>
                        <a href={link.path}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links