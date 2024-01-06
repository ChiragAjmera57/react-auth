import { Button, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { userlogin } from '../utils/userlogin'
import { AppContext } from '..'
import {
  LoginSocialGoogle
} from 'reactjs-social-login'

import {
  GoogleLoginButton
  
} from 'react-social-login-buttons'
export const Login = () => {
  const navigate = useNavigate()
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const handleSubmit = ()=>{
    userlogin({email,password}).then((res)=>{
      console.log(res)
      localStorage.setItem('token',JSON.stringify(res))
      localStorage.setItem('auth',true)
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    })
  }
  const setAuthStorage = ({ provider, data })=>{
      localStorage.setItem('token',JSON.stringify(data))
      localStorage.setItem('auth',JSON.stringify(true))
      navigate("/");
    console.log(provider,data)
  }
  return (
    <div className='login'>
        
          <Stack spacing={2}>
          <h1>Login</h1>
            <TextField label="Email/Mobile"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            />
            <TextField label="Password" type='password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
            
            <p>Not a member? <Button onClick={()=>navigate(`/signup`)}>SignUp</Button></p>
            <Button variant='contained' onClick={handleSubmit} >Login</Button>
            <LoginSocialGoogle
            client_id={`307310959095-tq5rav54v62it0dup4ced749qkhia4r5.apps.googleusercontent.com`}
            scope="openid profile email"
            onResolve={({ provider, data }) => {
              setAuthStorage({provider,data})
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
          </Stack>
            
        
    </div>
  )
}
