import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Cart'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Login from './Login '


function App() {
  const [count, setCount] = useState(0)

  return (
  
   
<div>
<h1>this app page </h1>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />    
        <Route path='/cart' element={<Cart/>} />

      </Routes>

<Home/>

<Cart/>

   </div>

  )
}

export default App
