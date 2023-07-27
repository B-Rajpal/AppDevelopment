import { Button, Grid, TextField,IconButton, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import "../Css/home.css";
import "../Css/form.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [Name,SetName]=useState('');
  const [Account,SetAccount]=useState(0);
  const [Accountno,SetAccountno]=useState(0);
  const [Branch,SetBranch]=useState(0);
  const [Email,SetEmail]=useState('');
  const [password,setPassword] = useState('');
  const [roles, setRoles] = useState(["user"]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
    const handleName =(e)=>{
            SetName(e.target.value);
    }
    const handleEmail =(e)=>{
        SetEmail(e.target.value)
    }
    const handleAccount =(e) =>{
      SetAccount(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    const handleAccountno = (e)=>{
        SetAccountno(e.target.value);
    }
    const handlebranch = (e)=>{
        SetBranch(e.target.value);
    }
    const handleCheckboxChange = (e) => {
      setIsChecked(!isChecked);
      if (!isChecked) {
        setRoles(["user", "admin"]);
      } 
      else{
        setRoles(["user"]);
      }
    };
    const handleSubmit =(e) =>{

        e.preventDefault();
        console.log(roles);
        const data ={
          username:Name,
          email:Email,
          password:password,
          roles:roles
        }
        axios.post("http://127.0.0.1:8080/api/auth/signup",data);
        
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
    <h1 className='header'>Sign Up</h1>
    <TextField label="Username" className="input" type="text" onChange={handleName} required/><br/>
    <TextField label="Email id" className="input" type="email" onChange={handleEmail} required/><br/>
    <TextField label="Password" className ="input" type="password" onChange={handlePassword} required/><br/>
    <FormGroup>
  <FormControlLabel control={<Checkbox/>} label="Give Admin Access" checked={isChecked} onChange={handleCheckboxChange}/>
</FormGroup>
    <Button type='submit' className='button'>Sign Up</Button>
    <br/>
    <p>Already have an account ? <Link to="/login" className='link'>Login</Link></p>
    </Grid>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignIn