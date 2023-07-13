import React from 'react'
import "../Css/sidebar.css"
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'

function Sidebar() {
  return (
    <div className='sideBar'>
    <Link to='/add'>
    <Button className='Sideitem'>Create Account</Button>
    <br/>
    </Link>
    <Link to='/transaction'>
    <Button className='Sideitem'>Transfer</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Transaction History</Button>
    <br/>
    </Link>
    <Link to='/deposit'>
    <Button className='Sideitem'>Mobile Deposit</Button>
    <br/>
    </Link>
    <Link to='/'>
    <Button className='Sideitem'>Check Balance</Button>
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