import React from 'react'
import Navbar from '../Component/Navbar'
import Contact from '../Component/contact'
import "../Css/Customer.css";
import "../Css/form.css";
import { Link } from 'react-router-dom';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextareaAutosize } from '@mui/base';

function CustomerSupport() {
  return (
    <div>
      <Navbar/>
      <div className='customer_container'>
    <div className='customer'>
    <div className='customer_contact_container'>
    <div className='form'>
    <form>
    <Grid>
    <Link to="/">
    <IconButton className='close'><CloseIcon fontSize='small'/></IconButton>
    </Link>
    <h1 className='header'>CustomerSupport</h1>
    <TextField label="Name" className="input" type="text"  required/><br/>
    <TextField label="Email" className ="input" type="email"  required/><br/>
    <TextareaAutosize  className='message' type="text"  minRows={5}  required/>
    <Button type='submit' className='button'>Send</Button>
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

export default CustomerSupport