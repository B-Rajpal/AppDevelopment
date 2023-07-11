import React from 'react'
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Login from './login'
import SignIn from './SignIn'

function Routing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing