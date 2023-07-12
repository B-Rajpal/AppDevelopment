import React from 'react'
import "../Css/about.css";
import Navbar from '../Component/Navbar';
import Contact from '../Component/contact';

function About() {
  return (
    <div>
      <Navbar/>
      <div className='about_container'>
    <div className='about'>
    <h1>ABOUT</h1>
    <p className='about_p'>RP BANK is a full service commercial bank providing a complete range of products, services and technology driven digital offerings, catering to Retail, MSME as well as corporate clients.</p>
    <br/>
    <p className='about_p'>RP BANK operates its Investment banking, Merchant banking & Brokerage businesses through RP SECURITIES, a wholly owned subsidiary of the Bank. Headquartered in Chennai, it has a pan-India presence including an IBU at GIFT City, and a Representative Office in Abu Dhabi.</p>
    </div>
    </div>
    <Contact/>
    </div>
  )
}

export default About