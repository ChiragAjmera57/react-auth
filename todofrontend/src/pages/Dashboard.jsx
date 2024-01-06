import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const[user,setUser] = useState(null)
  useEffect(()=>{
    const authValue = JSON.parse(localStorage.getItem('token'));
    setUser(authValue)
    console.log(authValue)
  },[])
  return (<>
  
  <h1>Dashboard</h1>
  name : {user?.name}
  <br />
  email : {user?.email}
  </>
  )
}
