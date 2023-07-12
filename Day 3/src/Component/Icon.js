import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../Css/icon.css"

function Icon() {
  return (
    <div>
    <div className='Icon_container'>
    <IconButton><FacebookIcon fontSize='large'/></IconButton>
    <IconButton><InstagramIcon fontSize='large'/></IconButton>
    <IconButton><LinkedInIcon fontSize='large'/></IconButton>
    <IconButton><TwitterIcon fontSize='large'/></IconButton>
    </div>
    </div>
  )
}

export default Icon