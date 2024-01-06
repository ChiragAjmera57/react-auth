import { Button, Stack, TextField } from '@mui/material'
import React, { useReducer } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { signUpUser } from '../utils/userSignup.req'
import {
  LoginSocialGoogle
} from 'reactjs-social-login'

import {
  GoogleLoginButton
  
} from 'react-social-login-buttons'

const initialState = {
  name:"",
  email:"",
  password:"",
}
const reducer = (state=initialState,{type,payload})=>{
  const{name,email,password} = state
  switch (type) {
    case "SETNAME":
      return {
        ...state,name:payload
      }
     
   
    case "SETEMAIL":
      return {
        ...state,email:payload
      }
    
    case "SETPASS":
      return {
        ...state,password:payload
      }
      
      
  
    default:
      return state
     
  }
}
export const SignUp = () => {
  const[state,dispatch] = useReducer(reducer,initialState)
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    
    const result = signUpUser(state).then((res)=>{
      navigate("/login");
      console.log(res)
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
    <div className='sign login'>
        
          <Stack spacing={2}>
          <h1>Sign Up</h1>
            <TextField label="Full Name" onChange={(e)=>dispatch({type:"SETNAME",payload:e.target.value})}/>
            <TextField label="Email" required onChange={(e)=>dispatch({type:"SETEMAIL",payload:e.target.value})} />
            <TextField label="Password" type='password' required onChange={(e)=>dispatch({type:"SETPASS",payload:e.target.value})} />
            
            <Button variant='contained' onClick={handleSubmit}>Sign Up</Button>
            <p>Already a member?<Button onClick={()=>navigate(`/login`)}>Login</Button></p>
            <LoginSocialGoogle
            client_id={`307310959095-tq5rav54v62it0dup4ced749qkhia4r5.apps.googleusercontent.com`}
            scope="openid profile email"
            onResolve={({ provider, data }) => {
              setAuthStorage({provider,data})
              console.log(provider,data)
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
