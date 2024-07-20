import React from 'react'
import CVButton from '../../components/common/CVButton'
import GetTouchBtn from '../../components/common/GetTouchBtn'
import Me from '../../assets/images/Me.png'

const HeroSection = ({ index }) => {
  return (
    <div className=' flex flex-col-reverse lg:flex-row md:flex-row items-center justify-center gap-2 w-[70vw] mx-auto mt-20  '>

      <div className=' flex flex-col  justify-between py-8 gap-2  mx-auto'>
        <div data-aos="fade-right"  >
          <p className='text-gradient-heading text-4xl font-bold text-center md:text-start lg:text-start '>
            Hi, Im Tanveer Pathan
          </p>
        </div>
        <div data-aos="fade-right" className='flex flex-col gap-y-1 mb-10'>
          <p className="text-2xl font-medium tracking-tighter text-richblack-3 max-w-[600px] text-center md:text-start lg:text-start ">
            MERN stack developer {" "} 🚀
          </p>
          <p className="text-md max-w-[600px] text-richblack-4">
            Currently I love working on web applications using technologies like React.js, Express, Node.js, Tailwind, and Bootstrap. I demonstrate mastery in JavaScript and back-end functionality,
            and have a strong track record in effective problem-solving.
          </p>
        </div>

        {/* Button */}
        <div data-aos="fade-right"
          className="text-md  flex flex-col items-center lg:flex-row md:flex-row justify-center gap-4">
          <GetTouchBtn />

          <CVButton />
        </div>
      </div>
      <div data-aos="fade-left"
        className=' flex flex-col py-4 px-4 gap-8 mx-auto'>
        <div className="justify-center flex">
          <img
            priority
            src={Me}
            height={250}
            width={250}
            alt="Tanveer Pathan"
            className='border-[3px] border-richblack-1 rounded-full'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection