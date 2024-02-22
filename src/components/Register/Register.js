import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [password,setPassword] = useState('');
  const [Confirmpassword,setConfirmPassword] = useState('');

  const Navigate = useNavigate()
  const handle = (e) => {
    e.preventDefault()
  }
  const submithandle = (e) => {
    if((password === Confirmpassword && !(password==="" && Confirmpassword===""))){
      Navigate("/login")
    } 
  }

  return (
    <Fragment>
      <form onSubmit={handle}>
        <label>Username</label>
        <input type='text' required/>
        <label>Email</label>
        <input type='email' required/>
        <label>Password</label>
        <input type='password'onChange={(e)=>{setPassword(e.target.value)}} required/>
        <label>Confirm Password</label>
        <input type='password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        <button>Register</button>
      </form>
    </Fragment>
    
  )
}

export default Register