import React from 'react'
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Login from './login'
import SignIn from './SignIn'
import About from './About'
import CustomerSupport from './CustomerSupport'
import Transaction from './Transaction'
import CreateAccount from './CreateAccount'
import MobileDeposit from './MobileDeposit'
// import MobileDeposit from './MobileDeposit'

function Routing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/customer" element={<CustomerSupport/>}/>
    <Route path="/transaction" element={<Transaction/>}/>
    <Route path="/add" element={<CreateAccount/>}/>
    <Route path ="/deposit" element ={<MobileDeposit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing