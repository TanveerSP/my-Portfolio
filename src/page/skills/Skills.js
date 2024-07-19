import React, { useState } from 'react'
import { skills } from '../../data/skills'
import SkillItem from './SkillItem'

const Skills = () => {


  return (
    <div id='skills' className="max-w-xl mx-auto mt-10">
      <p data-aos="fade-up" className=' text-gradient-skills text-center text-4xl font-bold mb-14'>
        Skills
      </p>
      {skills.map((skillCategory, index) => (
        <SkillItem key={index} category={skillCategory.category} items={skillCategory.items} />
      ))}
    </div>
  )
}

export default Skills