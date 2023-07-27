import { AppBar, Button,IconButton, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react';
import "../Css/navbar.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Login from '../pages/login';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Navbar() {
  
  const user = useSelector((state) => state.username);
    const[open,setOpen]=useState(false);
    const[openProfile,setOpenProfile]=useState(false);
    const handleDrawer =()=>{
        setOpen(!open);
    }
    const handleProfile =()=>{
        setOpenProfile(!openProfile);
    }

  return (
    <div className='navigation' >
    <AppBar>
    <Toolbar className='NavBar' >
    <IconButton onClick={handleDrawer}>
    <MenuIcon fontSize='large' className='menu'/></IconButton>
    <Link to='/'>
    <Button className='nav'>Home</Button>
    </Link>
    <Link to='/about'>
    <Button className='nav'>About</Button>
    </Link>
    <Link to='/Customer'>
    <Button className='nav'>Contact us</Button>
    </Link>
    <AccountCircleRoundedIcon fontSize='large' className='Account'/>
    { user ?(<><h3 className='username'>{user}</h3>
    </> ):
    <Link to='/login'>
    <Button className='nav'>Login</Button>
    </Link>}
    <IconButton onClick={handleProfile}>
   <ArrowDropDownIcon fontSize='medium' className='arrow'/>
   </IconButton>
    </Toolbar>
    </AppBar>
    {openProfile && <Profile/>}
    {open && <Sidebar/>}
    </div>
  )
}

export default Navbar