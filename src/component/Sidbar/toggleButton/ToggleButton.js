import React from 'react'
import {motion }from 'framer-motion'

const ToggleButton = ({setOpen}) => {
  return (
    <motion.button 
    whileHover={{scale:1.1}}
    onClick={() => setOpen((prev) => !prev)}
    className='button w-[50px] h-[50px] rounded-full fixed top-20 left-[25px] cursor-pointer bg-richblack-5 bg-opacity-25'>
        Button
    </motion.button>
  )
}

export default ToggleButton