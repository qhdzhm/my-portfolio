import React from 'react'
import { work_process } from '../../constants/data'
import './WorkProcess.css'
const WorkProcess = () => {
  return (
    <div className='workprocess section-p bg-white'>
      <div className='container'>
        <div className='workprocess-content'>
          <div className='section-title'>
            <h3 className='text-brown'>working<span className='text-dark'> process</span></h3>
            <p className='text'>I offer the right solutions for your digital business</p>
          </div>

          <div className='workprocess-list grid'>
            {
              work_process.map((e,index)=>{
                return (
                  <div className='workprocess-item text-center' key={index}>
                    <div className='workprocess-item-tilte flex'>
                      <span className='text-brown fw-7'>0{index+1}</span>
                      <h3 className='text-dark fw-5'>{e.title}</h3>
                    </div>
                    <p className='text'>{e.paragraph}</p>
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

export default WorkProcess