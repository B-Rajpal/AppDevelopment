import React from 'react'
import Navbar from '../Component/Navbar'
import "../Css/transaction.css"
import Contact from '../Component/contact'
// import { Link } from 'react-router-dom'
import { Button, Grid,  TextField } from '@mui/material'

function Transaction() {
  return (
    <div>
    <Navbar/>
    <div className='transaction_container'>
    <div className='transaction'>
    <div className='transaction_div_container'>
    <div className='form_2'>
    <form>
    <Grid>
    <h1 className='header'>Transfer</h1>
    <TextField label="Account_Id" className="input" type="text"  required/><br/>
    <TextField label="Money" className ="input" type="tel"  required/><br/>
    <Button type='submit' className='button_transaction'>Make Transaction</Button>
    <br/>
    </Grid>
    </form>
    </div>
    </div>
    </div>
    </div>
    <Contact/>
    </div>
  )
}

export default Transaction