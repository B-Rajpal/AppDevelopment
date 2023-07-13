import React from 'react'
import Navbar from '../Component/Navbar'
import { Button, Grid, TextField } from '@mui/material'

function MobileDeposit() {
  return (
    <div>
    <Navbar/>
    <div className='Mobile_deposit'>
    <div className='Mobile'>
    <div className='Mobile_deposit_container'>
    <div className='form_2'>
    <form>
    <Grid>
    <h1 className='header'>Mobile Deposit</h1>
    <TextField  className="input" type="file"/><br/>
    <p>Upload the image here</p>
    <Button type='submit' className='button_transaction'>Make Transaction</Button>
    <br/>
    </Grid>
    </form>
    </div>
    </div>
    </div>
    </div></div>
  )
}

export default MobileDeposit