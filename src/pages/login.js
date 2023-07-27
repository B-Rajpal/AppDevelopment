import { Button, Grid, TextField,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import "../Css/home.css";
import "../Css/form.css"
import { Link, redirect, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { login } from './actions';
import axios from 'axios';

const Login = (props)=> {
  const [jwt,setJwt]=useState("");
    const [username,SetUsername]=useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleusername =(e)=>{
            SetUsername(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    const history = unstable_HistoryRouter
    const handleSubmit =(e) =>{
        e.preventDefault();
        const data = {
          username:username,
          password:password
        }
        try{
        axios.post("http://127.0.0.1:8080/api/auth/signin",data)
        .catch (error =>{
          alert("error" + error)
        }
        );
        }
        catch (error) {
          // The error will be caught here
          console.error('Error:', error);
          alert('An error occurred: ' + error.message); // Display the error message using an alert
        }
        const fun = async () => {
          try {
            const response = await axios.get("http://127.0.0.1:8080/api/auth/getjwt");
            setJwt(response.data);
            
            // Correctly set the Authorization header after getting the token
            // const axiosConfig = {
            //   headers: {
            //     Authorization: `Bearer ${response.data}`, // Use backticks to interpolate the jwt variable
            //   },
            // };
            
            
            
            console.log("token " + response.data);
            
            
            
          } catch (error) {
            console.error(error);
          }
        };
        
        fun();
        console.log(username+" "+password);
        dispatch(login(username));
        navigate("/");
    };
  return (
    <>
    <div className='home'>
    <div className='form_div'>
    <div className='form'>
    <form onSubmit={handleSubmit} >
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