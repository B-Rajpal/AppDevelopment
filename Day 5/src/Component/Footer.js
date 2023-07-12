import React from 'react'
import "../Css/Footer.css"
import { Button} from "@mui/material";

function Footer() {
  return (
    <div className="footer">
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
  )
}

export default Footer