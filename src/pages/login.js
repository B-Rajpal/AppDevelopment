import { Button, Grid, TextField,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import "../Css/home.css";
import "../Css/form.css"
import { Link } from 'react-router-dom';

function Login() {
    const [username,SetUsername]=useState('');
    const [password,setPassword] = useState('');

    const handleusername =(e)=>{
            SetUsername(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(username+" "+password);
    }
  return (
    <>
    <div className='home'>
    <div className='form_div'>
    <div className='form'>
    <form onSubmit={handleSubmit}>
    <Grid>
    <Link to="/">
    <IconButton className='close'><CloseIcon fontSize='small'/></IconButton>
    </Link>
    <h1 className='header'>Login</h1>
    <TextField label="Username" className="input" type="text" onChange={handleusername} required/><br/>
    <TextField label="Password" className ="input" type="password" onChange={handlePassword} required/><br/>
    <Button type='submit' className='button'>Login</Button>
    <br/>
    <p>Don't have an account ? <Link to="/signin" className='link'>Sign Up</Link></p>
    </Grid>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login