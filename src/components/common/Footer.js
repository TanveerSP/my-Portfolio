import React from 'react'
import GetTouchBtn from './GetTouchBtn'

const Footer = () => {
  return (
    <div className=' w-[70vw] bg-none bg-opacity-10 backdrop-blur-sm border-[1px] border-richblack-8 mx-auto rounded-full mb-4'>
        <div className='flex gap-3 justify-between py-4 px-5'>
          <div></div>
          <div></div>
          <div>
            <GetTouchBtn />
          </div>
        </div>
    </div>
  )
}

export default Footer