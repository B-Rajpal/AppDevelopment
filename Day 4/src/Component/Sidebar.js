import React from 'react'
import "../Css/sidebar.css"
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'

function Sidebar() {
  return (
    <div className='sideBar'>
    <Link to='/'>
    <Button className='Sideitem'>Home</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>About</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Contact us</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Create Account</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Transaction</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Mobile Deposit</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Report</Button>
    <br/>
    </Link>
    </div>
  )
}

export default Sidebar