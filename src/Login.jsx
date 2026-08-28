import React, { useState } from 'react'
import {user} from './server'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

const loggedUser = JSON.parse(localStorage.getItem('active_user')) || null

function login() {
    const foundUser = user.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
        localStorage.setItem('active_user', JSON.stringify(foundUser))
        navigate('/dashboard')
        return foundUser
    } else {
        console.log("Login not successful - Invalid credentials")
        return null
    }
}

  return (
    <>
    <label>Email Address</label>
    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
    <label>Password</label>
    <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>

    <button onClick={login}>Login</button>
    </>
  )
}

export default Login