import { Button, Grid, TextField,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import "../Css/home.css";
import "../Css/form.css"
import { Link } from 'react-router-dom';

function SignIn() {
    const [Name,SetName]=useState('');
    const [Email,SetEmail]=useState('');
    const [password,setPassword] = useState('');

    const handleName =(e)=>{
            SetName(e.target.value);
    }
    const handleEmail =(e)=>{
        SetEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(Name+" "+password+" "+Email);
    }
  return (
    <>
    <div className='home'>
    <div className='form'>
    <form onSubmit={handleSubmit}>
    <Grid>
    <Link to="/">
    <IconButton className='close'><CloseIcon fontSize='small'/></IconButton>
    </Link>
    <h1 className='header'>Sign In</h1>
    <TextField label="Name" className="input" type="text" onChange={handleName} required/><br/>
    <TextField label="Email id" className="input" type="email" onChange={handleEmail} required/><br/>
    <TextField label="Password" className ="input" type="password" onChange={handlePassword} required/><br/>
    <Button type='submit' className='button'>Sign IN</Button>
    <br/>
    <p>Already have an account ? <Link to="/login" className='link'>Login</Link></p>
    </Grid>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignIn