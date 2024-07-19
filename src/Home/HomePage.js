import React, { useEffect, useState } from 'react'
import Skills from '../components/pages/Skills'

import Aos from 'aos';
import "aos/dist/aos.css"
import About from '../components/pages/About';
import Work from '../components/pages/Work';
import Banner from '../components/pages/Banner'

const HomePage = () => {

    useEffect(() => {
        Aos.init({
            duration: 1100,
            delay: 250,
            once: true
        });
    }, []);


    return (
        <main className='flex flex-col min-h-[100vh] space-y-10'>

            {/* Hero Section  */}
            <Banner />

            {/* About section */}
            <div className=''>
                <section
                    id="about"
                    className="mt-14 flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mx-auto mb-8"
                    style={{ transform: "scale(0.9)" }}
                >
                    <div className="flex flex-col justify-around gap-20 flex-wrap items-center w-full">

                        {/* About */}
                        <About />

                    </div>
                </section>
            </div>

            <div className=' text-center'>
                {/* skills */}
                <h2 className="text-3xl font-bold text-gradient-skills mb-14">Skills</h2>
                <Skills />
            </div>

            <div className='text-center pt-10'>
                {/* Project or Work */}
                <h2 className="text-3xl font-bold text-gradient-heading mb-14">Work</h2>
                <Work />
            </div>

        </main>
    )
}

export default HomePage

