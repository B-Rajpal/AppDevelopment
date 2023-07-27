import React from 'react'
import {Button} from '@mui/material'
import "../Css/pofile.css"
import { useDispatch } from 'react-redux';
import { logout } from '../pages/actions';
import { Link } from 'react-router-dom';
function Profile() {
  const dispatch = useDispatch();
  const handleLogout =(e)=>{
    e.preventDefault();
    dispatch(logout());
  }
  return (
    <div className='Profile_box'>
    <Link to="/account">
    <Button className='Profile_box_name'>My Account</Button>
    </Link>
    <br/>
    <Button className='Profile_box_name' onClick={handleLogout}>Log Out</Button>
    </div>
  )
}

export default Profile