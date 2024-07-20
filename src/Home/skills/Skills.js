import React, { useState } from 'react'
import { skills } from '../../data/skills'
import SkillItem from './SkillItem'

const Skills = () => {


  return (
    <div id='skills' className='w-11/12 mx-auto py-10 px-4 '>
      <div  className="max-w-xl mx-auto mt-10">
        <p data-aos="fade-right" className=' text-gradient-skills text-center text-3xl font-bold tracking-tighter sm:text-5xl mb-14'>
          Skills
        </p>
        {skills.map((skillCategory, index) => (
          <SkillItem key={index} category={skillCategory.category} items={skillCategory.items} />
        ))}
      </div>
    </div>
  )
}

export default Skills