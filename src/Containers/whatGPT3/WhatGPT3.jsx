import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3_top-content">
        <Feature/>
      </div>

      <div className="gpt3__whatgpt3_bottom-content">
        
        <div className="gpt3__whatgpt3_bottom-content_heading">
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <a href="#">Explore the library</a>
        </div>

        <div className="gpt3__whatgpt3_bottom-content_card">
          <Feature/>
          <Feature/>
          <Feature/>
        </div>

      </div>
    </div>
  )
}

export default WhatGPT3