import React from 'react'
import CVButton from '../../components/common/CVButton'
import GetTouchBtn from '../../components/common/GetTouchBtn'
import Me from '../../assets/images/Me.png'
import SocialBar from '../../components/core/SocialBar'
import HighlightText from '../../components/core/HighlightText'

const HeroSection = ({ index }) => {
  return (
    <div className='w-full mt-20'>
      <div className='w-11/12 mx-auto flex flex-col-reverse items-center justify-center gap-5 lg:flex-row md:flex-row'>

        <div className='flex flex-col items-start h-[300px] px-4 py-5 bg-richblack-1 bg-opacity-5 backdrop-blur-lg rounded-3xl border-[1px] border-richblack-8'>
          <div className='mt-4 mb-4'>
            <p className='text-2xl lg:text-5xl font-bold text-white'>
              Hey! there
            </p>
            <div className='text-white text-start flex gap-1 items-center text-2xl lg:text-5xl font-bold'>
              I'm <HighlightText text={"Tanveer Pathan"} />
            </div>
          </div>
          <div className='max-w-[400px] text-white font-inter'>
            Currently I love working on web applications using technologies like React.js, Express, Node.js, Tailwind, and Bootstrap. I demonstrate mastery in JavaScript and back-end functionality,
            and have a strong track record in effective problem-solving.
          </div>
        </div>

        <div className='flex flex-col items-center h-[300px] gap-4 py-5 px-5 bg-richblack-1 bg-opacity-5 backdrop-blur-lg rounded-3xl border-[1px] border-richblack-8'>
          <img src={Me} alt="tanveer" height={50} width={100} />
          <p className='text-white text-xl font-semibold text-center'>
            Tanveer Pathan
          </p>
          <SocialBar />
          <CVButton />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
