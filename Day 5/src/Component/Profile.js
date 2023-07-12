import React from 'react'
import {Button} from '@mui/material'
import "../Css/pofile.css"
function Profile() {
  return (
    <div className='Profile_box'>
    <Button className='Profile_box_name'>My Account</Button>
    <br/>
    <Button className='Profile_box_name'>Log Out</Button>
    </div>
  )
}

export default Profile