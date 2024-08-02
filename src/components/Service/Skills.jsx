import React from 'react'
import './Skills.css'
import { skills } from '../../constants/data'
const Skills = () => {
  return (
    <div className='skills section-p' id='skills'>
      <div className='container'>
        <div className='skills-content'>
          <div className='section-title'>
            <h3 className='text-brown'>My <span className='text-dark'>Skills</span></h3>
            <p className='text'>I offer tailored solutions to elevate your digital presence.</p>
          </div> 

          <div className='skills-list grid'>
            {
              skills.map((e, index) => {
                return (
                  <div className='skills-item text-center' key={index}>
                    <div className='skills-item-img'>
                      <img src={e.image} alt="" className='mx-auto' />
                    </div>
                    <div className='skills-item-text'>
                      <h4 className='fs-22 fw-5 op-08'>{e.title}</h4>
                      <p className='text mx-auto'>{e.paragraph}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Skills