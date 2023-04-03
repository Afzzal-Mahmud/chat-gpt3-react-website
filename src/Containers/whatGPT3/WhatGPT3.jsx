import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3_top-content">
        <Feature heading="What is ChatGPT 3"/>
        <p>ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks like composing emails, essays, and code.</p>
      </div>

      <div className="gpt3__whatgpt3_bottom-content">
        
        <div className="gpt3__whatgpt3_bottom-content_heading">
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <a href="#">Explore the library</a>
        </div>

        <div className="gpt3__whatgpt3_bottom-content_card">

          <div className="gpt3__whatgpt3_bottom-content_card-body">
            {/* feature component as a re useable component */}
          <Feature heading="Chatbots"/>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
          </div>

          <div className="gpt3__whatgpt3_bottom-content_card-body">
            {/* feature component as a re useable component */}
          <Feature heading="Based On Knowledge"/>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>          
          </div>

          <div className="gpt3__whatgpt3_bottom-content_card-body">
            {/* feature component as a re useable component */}
          <Feature heading="Education"/>
            <p>Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WhatGPT3