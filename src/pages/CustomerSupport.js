import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Contact from '../Component/contact'
import "../Css/Customer.css";
import "../Css/form.css";
import { Link } from 'react-router-dom';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextareaAutosize } from '@mui/base';
import axios from 'axios';

function CustomerSupport() {
    const[Name,SetName]= useState("");
    const[Email,SetEmail]=useState("");
    const[Desc,SetDesc] = useState("");

    const handleName=(e)=>{
        SetName(e.target.value);
    }
    const handleEmail=(e)=>{
        SetEmail(e.target.value);
    }
    const handleDesc=(e)=>{
        SetDesc(e.target.value);
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      const data = {
        name:Name,
        email:Email,
        description:Desc
      }
      axios.post("http://127.0.0.1:8081/addsupport",data);
    }


  return (
    <div>
      <Navbar/>
      <div className='customer_container'>
    <div className='customer'>
    <div className='customer_contact_container'>
    <div className='form'>
    <form onSubmit={handleSubmit}>
    <Grid>
    <Link to="/">
    <IconButton className='close'><CloseIcon fontSize='small'/></IconButton>
    </Link>
    <h1 className='header'>CustomerSupport</h1>
    <TextField label="Name" className="input" type="text"  onChange={handleName}required/><br/>
    <TextField label="Email" className ="input" type="email"  onChange={handleEmail}required/><br/>
    <TextareaAutosize  className='message' type="text"  onChange={handleDesc} minRows={5}  required/>
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