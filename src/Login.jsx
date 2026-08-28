import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(){
        console.log(email)
        console.log(password)
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