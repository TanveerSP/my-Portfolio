import React, { useEffect } from 'react'
import Skills from '../Home/skills/Skills'
import Works from '../Home/portfolio/Works'
// import About from './aboutpage/About'
import Footer from '../components/common/Footer'
import HeroSection from '../Home/heropage/HeroSection'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contact } from '../Home/contact/Contact'


const Homepage = () => {


    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className=' relative z-40'>
            <HeroSection />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage