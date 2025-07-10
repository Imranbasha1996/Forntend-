import React, { useState } from 'react'
import Header from './Header'
import Login from './Login '


const Home = () => {
    let [login,setlogin]=useState(false)
  return (
    <div>
        <Header/>
        {!login?<Login/>:<></>}
     
    </div>
  )
}

export default Home
