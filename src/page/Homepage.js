import React, { useEffect } from 'react'
import Me from '../assits2/Me.png'
import socialLinks from '../data/social'
import CVButton from '../components/common/CVButton'
import GetTouchBtn from '../components/common/GetTouchBtn'
import Skills from './skills/Skills'
import Works from './portfolio/Works'
import About from './aboutpage/About'


import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './heropage/HeroSection'

const Homepage = ({ index }) => {


    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className='mt-20 z-40'>


           <HeroSection />

            {/* section 2 */}
            <div className='mt-20  ' id='about'>
                <div>
                    <p data-aos="fade-up" className=' text-gradient-about text-center text-4xl font-bold'>
                        About
                    </p>
                    <div className='w-11/12 mx-auto px-4 py-6'>
                        <About />
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className='py-10'>
                <div className='w-11/12 mx-auto py-16 px-4 '>
                    <Skills />
                </div>
            </div>

            {/* section 4 */}
            <div className='py-10' id='works'>
                <div className=' w-11/12 mx-auto py-6 px-3'>
                    {/* <CardSlider /> */}
                    <Works />
                </div>
            </div>

        </div>
    )
}

export default Homepage