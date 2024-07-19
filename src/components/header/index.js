import { motion } from 'framer-motion';
import React,{useState} from 'react'

export default function Header() {

    const [isActive, setIsActive] = useState(false);
   
    return (
        <>
            <motion.div >
                <div className={` fixed right-0 m-[20px] w-[80px] h-[80px] bg-[#455CE9] rounded-full flex items-center justify-center `}>
                    <dir className={` w-full `}>

                    </dir>
                </div>
            </motion.div>
        </>
    )
}
