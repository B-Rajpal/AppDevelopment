import React, { Component,useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import "../Css/MyAccount.css"
import axios from 'axios'
function MyAccount()  {
    const [name,setName]=useState("");
    useEffect( () => {
    axios.get("http://127.0.0.1:8080/getProfile")
    .then(response =>{
     setName(response.data);
    })
    .catch(error =>{
     console.log(error);
    });
   },[]);
  return (
    <div className='account'>
    <div className='account_profile'>
    <div className='profile_photo'></div>
    <h2 className='h1'>Name : <span className='span'>{name}RAJPAL</span></h2>
    <h2 className='h1'>Account number : <span className='span'>6789783697979</span></h2>
    <h2 className='h1'>Date of birth : <span className='span'>17/04/2004</span></h2>
    <h2 className='h1'>Aadhar Number : <span className='span'>1344 1344 1344</span></h2>
    <h2 className='h1'>Pan Number : <span className='span'>RHJ67549092</span></h2>
    </div>
    <div className='bank_details'>
    <h2 className='h1'>Bank name : <span className='span'>BA Bank</span></h2>
    <h2 className='h1'>Branch name : <span className='span'>Coimbatore</span></h2>
    <h2 className='h1'>IFSC code: <span className='span'>34568-098789</span></h2>
    </div>
    <div className='contact_details'>
    <h2 className='h1'>Phone number: <span className='span'>1345467889</span></h2>
    <h2 className='h1'>Email: <span className='span'>abc@email.com</span></h2>
    </div>
    </div>
  )
}

export default MyAccount