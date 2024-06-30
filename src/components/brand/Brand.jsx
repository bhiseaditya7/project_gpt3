import React from 'react'
import './brand.css'
import {google,slack,atlassion,dropbox,shopify} from './import'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <a href="https://www.google.com" target = "_blank" ><img src={google} alt='google'/></a>
      </div>
      <div>
        <a href="https://slack.com" target="_blank"><img src={slack} alt='slack'/></a>
      </div>
      <div>
        <a href="https://www.atlassian.com/" target="_blank"><img src={atlassion} alt='atlassion'/></a>
      </div>
      <div>
        <a href='https://www.dropbox.com/home' target='_blank'><img src={dropbox} alt='dropbox'/></a>
      </div>
      <div>
        <a href='https://www.shopify.com/' target='_blank'><img src={shopify} alt='shopify'/></a>
      </div>
    </div>
  )
}

export default Brand