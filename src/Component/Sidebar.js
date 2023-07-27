import React, { useEffect, useState } from 'react'
import "../Css/sidebar.css"
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'
import axios from 'axios';
import { useSelector } from 'react-redux';

function Sidebar() {
//   const [transactions,setTransactions]=useState([]);
//   useEffect( () => {
//   axios.get("http://127.0.0.1:8080/api/auth/getRole")
//   .then(response =>{
//    setTransactions(response.data);
//   })  
//   .catch(error =>{
//     alert(error)
//    console.log(error);
//   });
//  },[]);
const user = useSelector((state) => state.username);
  return (
    <div className='sideBar'>
    <Link to='/add'>
    <Button className='Sideitem'>Create Account</Button>
    <br/>
    </Link>
    <Link to='/transaction'>
    <Button className='Sideitem'>Transfer</Button>
    <br/>
    </Link>
    <Link to='/history'>
    <Button className='Sideitem'>Transaction History</Button>
    <br/>
    </Link>
    <Link to='/deposit'>
    <Button className='Sideitem'>Mobile Deposit</Button>
    <br/>
    </Link>
    { user ?(<Link to='/getAccReq'>
    <Button className='Sideitem'>Account Req</Button>
    <br/>
    </Link>
     ):""
    
      
  }
    
   
    </div>
  )
}

export default Sidebar