import React from 'react'
import "../Css/contact.css";

function Contact() {
  return (
    <div className='contact_container'>
    <div className='contact'>
    <div className='contact_us'>
        <span className='heading'>Address</span><br/>
        <span className='content'>m nagar</span><br/>
        <span className='content'>R city</span><br/>
        <span className='content'> Coimbatore</span><br/>
        <span className='content'>TamilNadu</span><br/>
        <span className='content'>456789</span>
    </div>
    <div className='Services'>
        <span className='heading'>Services</span><br/>
        <span className='content'> Create Account</span><br/>
        <span className='content'>Transaction</span><br/>
        <span className='content'>Mobile Deposit</span><br/>
    </div>
    <div className='Support'>
        <span className='heading'>Customer Support</span><br/>
        <span className='content'>Toll free no:</span><br/>
        <span className='content'> {"    "}00000 00000</span><br/>
        <span className='content'> Mobile:</span><br/>
        <span className='content'>{"    "}983983990</span><br/>
    </div>
    </div>
    </div>
  )
}

export default Contact