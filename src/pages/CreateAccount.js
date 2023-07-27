import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import { Button, Grid, TextField } from '@mui/material'
import "../Css/form.css"
import "../Css/add.css";
import Contact from '../Component/contact';
import axios from 'axios';

function CreateAccount() {
  const [id,SetId ] = useState(0);
  const [ num,Setnum] = useState(0);
  const [ branch ,setBranch] = useState(0);

  const handleId = (e) =>{
    SetId(e.target.value);
  }
  const handlenum = (e) =>{
    Setnum(e.target.value);
  }
  const handleBranch = (e) =>{
    setBranch(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data ={
      account_id: id ,
      account_no : num,
      balance :0,
      branch : {
        branch_id:1
      }
    }
    axios.post("http://127.0.0.1:8080/api/auth/account_req",data);
  }
   
  return (
    <div>
        <Navbar/>
        <div className='create_container'>
        <div className='create'>
        <div className='create_account_content'>
    <p className='add'>Add Account </p>
    <h4 className='add_h4'>Create Your Account in seconds</h4>
    </div>
        <div className='create_div_container'>
        <div className='form_2'>
        <form onSubmit={handleSubmit}>
        <Grid>
        <h1 className='header'>Account details</h1>
        <TextField label="Account id" className="input" type="tel"  onChange={handleId} required/><br/>
        <TextField label="Account Number" className ="input" type="tel"  onChange={handlenum} required/><br/>
        <TextField label="Branch id" className="input" type="tel"  onChange={handleBranch} required/><br/>
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