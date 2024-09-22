import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
function Signup() {
    const [loginInfo,setLoginInfo]=useState({
        name:'',
        email:'',
        password:''
    })
    const handleChange = (e)=>{
        const{name,value}=e.target;
        console.log(name,value);
        const copyy
        
    }
  return (
    <div className='container'>
        <h1>Sign Up</h1>
        <form>
            <div>
              <label htmlFor='name'>Name</label>   
              <input 
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder='Enter Your name..'
              />
              </div> 
              <div>
            <label htmlFor='email'>Email</label>   
              <input 
              onChange={handleChange}
              type="email"
              name="email"
              
              placeholder='Enter Your email..'
              />
             </div>
             <div>
            <label htmlFor='Password'>Password</label>   
              <input
              onChange={handleChange} 
              type="password"
              name="password"
              
              placeholder='Enter Your password..'
              />

            </div>
            <button>Signup</button>
            <span>Already have an Account ?
                <Link to="/login">Login</Link>
            </span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Signup
