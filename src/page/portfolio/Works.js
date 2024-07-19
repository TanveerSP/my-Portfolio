import React from 'react'
import { projects } from '../../data/projects'
import { FaAngleRight } from "react-icons/fa";

const Works = () => {
  return (
    <div id='works' className="w-11/12 mx-auto py-2  ">
      <p className=' text-gradient-projects text-center text-4xl font-bold mb-20'>
        Projects
      </p>
      <div className=" max-w-[600px]  grid place-items-center grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
        {projects.slice(0, 4).map((item, index) => (
          <div key={index} className='border-[1px] border-richblack-8 rounded-xl overflow-hidden '>
            <img className=' object-cover'
              src={item.image} alt={item.title} />

            <div className='flex flex-col px-4 py-2 h-[200px] gap-2 relative bg-richblack-5 bg-opacity-10 backdrop-blur-sm border-t-[0.5px] border-richblack-8 '>
              <div className=' gap-y-4'>
                {/* title */}
                <p className='text-richblack-4 font-semibold text-lg'>
                  {item.title}
                </p>
                {/* description */}
                <p className='text-richblack-4 pb-4 pt-2 text-xs'>
                  {item.description}
                </p>
              </div>

              <div className=' absolute bottom-4'>
                <a href={item.demoLink}
                  className="inline-flex h-9 items-center bg-richblack-10 justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-richblack-5 border-[1px] border-richblack-5  shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Project <FaAngleRight className='text-richblack-5' size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Works