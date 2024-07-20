import React from 'react'
import GetTouchBtn from '../../components/common/GetTouchBtn'

export const Contact = () => {
    return (
        <div id='contact' data-aos="fade-up" className="w-11/12 mx-auto flex flex-col items-center justify-center py-2 mb-24">
            <p className=' text-center text-richblack-1 text-3xl font-bold tracking-tighter sm:text-5xl'>
                Get In Touch
            </p>
            <p className='max-w-[400px] text-lg text-center text-richblack-3 my-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt facilis eius quisquam magnam vitae!
            </p>
            <GetTouchBtn />
        </div>
    )
}
