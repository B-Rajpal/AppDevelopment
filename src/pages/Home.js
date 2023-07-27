import React from 'react'
// import { Link } from 'react-router-dom'
import "../Css/home.css"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Icon from '../Component/Icon'

function Home() {
  return (
    <div>
    <Navbar/>
    <div className='home'>
    <div className='home_content'>
    <p>Welcome to <span className='bankname'> OBA</span> . . . </p>
    <h4>World's most fast and secure Online Banking</h4>
    </div>
    <Icon/>
    <Footer/>
    </div>
    </div>
  )
}

export default Home