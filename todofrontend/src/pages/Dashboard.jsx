import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const[user,setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    const authValue = JSON.parse(localStorage.getItem('token'));
    authValue.user?setUser(authValue.user):setUser(authValue)
    console.log(authValue.user)
  },[])
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    navigate('/login')
    // setAuth(false); // Update the authentication state using your context
    // Add any additional logout logic you may need
  };
  return (
  <>
  <h1>Dashboard</h1>
  name : {user?.name}
  <br />
  email : {user?.email}
  <button onClick={()=>handleLogout()}>Logout</button>
  </>
  )
}
