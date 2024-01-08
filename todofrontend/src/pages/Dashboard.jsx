import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const[user,setUser] = useState(null)
  useEffect(()=>{
    const authValue = JSON.parse(localStorage.getItem('token'));
    authValue.user?setUser(authValue.user):setUser(authValue)
    console.log(authValue.user)
  },[])
  return (
  <>
  <h1>Dashboard</h1>
  name : {user?.name}
  <br />
  email : {user?.email}
  </>
  )
}
