import React from 'react'
import { projects } from '../../data/projects'
import { ImArrowUpRight2 } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const Works = () => {
  return (
    <div id='works' data-aos="fade-up" className="w-11/12 mx-auto py-2 mb-24">
      <p className=' text-gradient-about text-center text-3xl font-bold tracking-tighter sm:text-5xl mb-10'>
        Projects
      </p>
      <div className='flex flex-col items-center justify-between gap-6'>
        <div className=" max-w-[600px]  grid place-items-center grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
          {projects.slice(0, 4).map((item, index) => (
            <div key={index} 
              className='border-[1px] border-richblack-8 rounded-xl'
            >
              <div className=' rounded-t-2xl overflow-hidden'>
                <img src={item.image} alt={item.title}
                  className=' object-cover transition-all ease-in-out hover:scale-110  overflow-hidden '
                />
              </div>

              <div className=' rounded-b-xl flex py-3 px-4 items-center justify-between bg-webcolor-3 z-10 '>
                <p className='text-richblack-4 font-semibold text-xl '>
                  {item.title}
                </p>
                <div className='flex items-center justify-between gap-4'>
                  <Link to={item.codeLink}
                    className='text-yellow-25'
                  >
                    <FaCode size={20} className='transition-all ease-in-out hover:scale-110' />
                  </Link>
                  <Link to={item.demoLink}
                    className='text-richblack-2 '
                  >
                    <ImArrowUpRight2 size={20} className='transition-all ease-in-out hover:scale-110' />
                  </Link>
                </div>
              </div>
            </div>

          ))}
        </div>
        <Link to="/projects" className='mt-4'>
          <button
            className='flex items-center gap-1 py-3 px-6 bg-black bg-opacity-10 backdrop-blur-lg border-[1px] border-richblack-1 rounded-2xl transition-all ease-in-out hover:scale-90 font-semibold text-richblack-1' 
          >
            More Works <span><FaChevronRight /></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Works