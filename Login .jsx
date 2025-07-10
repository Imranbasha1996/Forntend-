import React, { useEffect, useState } from 'react'
import axios from "axios";
const Login  = () => {
     let url="http://localhost:4000"
    const [currState,setCurrstate]=useState('Sign Up');

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })


    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
    
    
        setData(data=>({...data,[name]:value}))
        

    }

    useEffect(()=>{
        console.log(data);
    
    
    },[data])

    const onlogin= async(e)=>{
        e.preventDefault();
        console.log('this is onlogin function');
        let newurl=url;
        if(currState==="Login"){
            newurl+="/api/user/login"
        }
        else{
            newurl+="/api/user/register"
        }
        const resp=await axios.post(newurl,data);
        console.log(resp);

    }


  return (
  <div>
            <form  onSubmit={onlogin} action=''>

                {currState === "Login" ? <h2>Login Form</h2> : <h2>Signup Form</h2>}

                {currState === "Login" ? <></> : <input type="text" placeholder='Your name' name='name' value={data.name} onChange={onChangeHandler} required />
                }
                <br /> <br />
                <input type="email" name="email" value={data.email} id="email" placeholder='Your Email' onChange={onChangeHandler}  required />
                <br /><br />
                <input type="password" name="password"  id="password" placeholder='password' value={data.password} onChange={onChangeHandler} required />
                <br /> <br />
                <button type="submit">{currState === 'Sign Up' ? "Create Account" : "Login"}</button>
                <br />
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState === 'Login' ? <p>Create a new account?
                    <span onClick={() => setCurrstate('Sign Up')}>click here</span></p> :
                    <p>Already have an account?
                        <span onClick={() => setCurrstate('Login')}>Login here</span></p>
                }
            </form>

        </div>
  )
}

export default Login 
