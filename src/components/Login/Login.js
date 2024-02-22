import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password,setPassword] = useState('');
  const Navigate = useNavigate()
  const handle = (e)=>{
    e.preventDefault()
    handleSubmit()
  }
  const handleSubmit = (e) => {
    if((password ===  !(password==="" ))){
      Navigate("/login")
    } 
  }
  
  return (
    <Fragment>
      <form>
      <label>Email</label>
        <input type='email' required/>
        <label>Password</label>
        <input type='password'onChange={(e)=>{setPassword(e.target.value)}} required/>
      </form>
    </Fragment>
  )
}

export default Login