import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import "../Css/transaction.css"
import Contact from '../Component/contact'
// import { Link } from 'react-router-dom'
import { Button, Grid,  TextField } from '@mui/material'
import axios from 'axios'

function Transaction() {
  const [jwt,setJwt]=useState("");
  const[account_id,setAccount_id]=useState(0);
  const[amt,setAmount] = useState(0);
  const handleAccount_id =(e)=>{
    setAccount_id(e.target.value);
  }
  const handleAmountChange = (e) =>{
    setAmount(e.target.value);
  }
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const currentTime = new Date();
  const submitHandler = (e) => {
    e.preventDefault();
    
    // Move the API calls inside the fun function
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
        
        const data = {
          to_account_id: account_id,
          amount: amt,
        };
        
        const data1 = {
          to_account_id: account_id,
          amount: amt,
          date: date,
          time:currentTime.toLocaleTimeString()
        };
        
        console.log("token " + response.data);
        
        // Make the API calls with the correct axiosConfig
        await axios.post('http://127.0.0.1:8080/api/auth/transfer', data);
        await axios.post('http://127.0.0.1:8080/api/auth/addtransaction', data1);
        
      } catch (error) {
        console.error(error);
      }
    };
    
    fun();
  };
  return (
    <div>
    <Navbar/>
    <div className='transaction_container'>
    <div className='transaction_content'>
    <p className='money'>Money Transfer </p>
    <h4 className='money_h4'>Transfer Your Money Anytime,Anywhere in the world</h4>
    </div>
    <div className='transaction'>
    <div className='transaction_div_container'>
    <div className='form_2'>
    <form onSubmit={submitHandler}>
    <Grid>
    <h1 className='header'>Transfer</h1>
    <TextField label="Account_Id" className="input" type="text" onChange={handleAccount_id} required/><br/>
    <TextField label="Money" className ="input" type="tel" onChange={handleAmountChange} required/><br/>
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