import React from 'react'
import Navbar from '../Component/Navbar'
import { Button, Grid, TextField } from '@mui/material'
import "../Css/form.css"
import "../Css/add.css";
import Contact from '../Component/contact';

function CreateAccount() {
  return (
    <div>
        <Navbar/>
        <div className='create_container'>
        <div className='create'>
        <div className='create_div_container'>
        <div className='form_2'>
        <form>
        <Grid>
        <h1 className='header'>Account details</h1>
        <TextField label="Name" className="input" type="text"  required/><br/>
        <TextField label="Phone Number" className ="input" type="tel"  required/><br/>
        <TextField label="Email" className="input" type="email"  required/><br/>
        <TextField label="" className ="input" type="tel"  required/><br/>
        <Button type='submit' className='button_transaction'>Create Account</Button>
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

export default CreateAccount