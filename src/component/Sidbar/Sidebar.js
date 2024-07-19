import React, { useState } from 'react'
import ToggleButton from './toggleButton/ToggleButton'
import Links from './Links/Links'
import { delay, motion } from 'framer-motion'



const Sidebar = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: "circle(1200px at 110px 110px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        // delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }

  return (

    <motion.div animate={open ? "open" : "closed"}
      className=' z-50 sidebar flex flex-col items-center justify-center bg-richblack-5 text-richblack-900  '>

      <motion.div variants={variants} 
        className='bg fixed top-14 left-0 bottom-0 w-[300px] bg-richblack-5'>
        <Links />
      </motion.div>

      <ToggleButton setOpen={setOpen} />
    </motion.div>

  )
}

export default Sidebar