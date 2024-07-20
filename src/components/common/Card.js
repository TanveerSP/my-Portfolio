import React, { useState } from 'react';
import { projects } from '../../data/projects'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Card = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='w-11/12 mx-auto py-10 mt-14'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 w-full'>
        {projects.map((item, ind) => (
          <div
            key={ind}
            className={`border-[1px] border-richblack-8 rounded-xl flex flex-col transition-all ease-in-out ${expandedIndex === ind ? 'h-[600px]' : 'h-[400px]'} overflow-hidden`}
          >
            <div className='rounded-t-2xl overflow-hidden object-cover '>
              <img src={item.image} alt={item.title} className='object-cover transition-all ease-in-out hover:scale-110 w-full h-full' />
            </div>

            <div className='rounded-b-2xl flex flex-col px-4 py-1 bg-black border-t-[1px] border-richblack-8 z-10 flex-grow'>
              <div className='flex flex-col py-4 flex-grow'>
                <p className='text-richblack-1 font-semibold text-lg mb-2'>{item.title}</p>
                <p className='text-richblack-2 mb-2 flex-grow overflow-hidden'>
                  {expandedIndex === ind ? item.description : item.description.length > 100 ? (
                    <>
                      {item.description.substring(0, 100)}... <button onClick={() => handleToggleExpand(ind)} className='text-facebookblue-5'>Read More</button>
                    </>
                  ) : (
                    item.description
                  )}
                  {expandedIndex === ind ? (
                    <button onClick={() => handleToggleExpand(ind)} className=' text-facebookblue-5'>Less</button>
                  ) : null}
                </p>
              </div>
              <div className='flex items-center justify-start gap-2 py-3  border-t-[1px] border-richblack-8'>

                <Link to={item.codeLink} className='text-richblack-10 px-2 gap-1 rounded-lg  flex  items-center bg-white '>
                  <FaGithub size={15} className='transition-all ease-in-out hover:scale-110' />
                  <span className='font-semibold'>Code</span>
                </Link>
                <Link to={item.demoLink} className='text-richblack-10 px-2 rounded-lg  flex  items-center bg-white '>
                  <span className='font-semibold'>Demo</span>
                  <FaAngleRight size={15} className='transition-all ease-in-out hover:scale-110' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card