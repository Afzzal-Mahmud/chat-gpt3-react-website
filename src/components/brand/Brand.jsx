import React from 'react'
import './brand.css'

/* imported some brand icons from react-icon */
import { SiShopify } from 'react-icons/si';
import { DiAtlassian } from 'react-icons/di';
import { BsDropbox,BsSlack,BsGoogle } from 'react-icons/bs'

const Brand = () => {
  return (
    <div
     className='gpt3__brand-container'>
      <div className='gpt3__brand-google gpt3__brand-each'>
        <BsGoogle size={21}/>
        <p>Google</p>
      </div>

      <div className='gpt3__brand-atlassian gpt3__brand-each'>
        <DiAtlassian size={30}/>
        <p>Atlassian</p>
      </div>

      <div className='gpt3__brand-slack gpt3__brand-each'>
        <BsSlack size={21}/>
        <p>Slack</p>
      </div>

      <div className='gpt3__brand-dropbox gpt3__brand-each'>
        <BsDropbox size={22}/>
        <p>Dropbox</p>
      </div>
      <div className='gpt3__brand-shopify gpt3__brand-each'>
        <SiShopify size={22}/>
        <p>Shopify</p>
      </div>
    </div>
  )
}

export default Brand