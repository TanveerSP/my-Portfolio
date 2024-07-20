import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SkillItem = ({ category, items, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            data-aos="fade-right"
            data-aos-delay={index * 100}
            className="py-4 border-[1px] border-richblack-8 rounded-xl px-5 my-4 bg-richblack-3 bg-opacity-10 backdrop-blur-sm">
            <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-richblack-4">{category}</span>
                {isOpen ? <FaChevronUp className='text-richblack-4' /> : <FaChevronDown className='text-richblack-4' />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <ul className="mt-2 space-y-2 text-richblack-2">
                    {items && items.map((item, index) => (
                        <li key={index} className="flex py-2 px-1 items-center space-x-2 border-t-[1px] border-richblack-8">
                            {item.icon}
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillItem;
