import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import './signup.css'

function Signup() {
  const navigate =useNavigate()
  const [form,setForm]= useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:''})

  const changeHandler =(e)=>{
    const name=e.target.name
    const value=e.target.value
    setForm({...form,[name]:value})
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()

    const res = await axios.post('http://localhost:4000/user/signup',{firstName:form.firstName,lastName:form.lastName,email:form.email,password:form.password})

    if(res.data.status){
      navigate('/login')
    }
   
   
  }
  return (
    <div>
        <div className='container1'>
        <div className='fs-2' style={{alignItems:'start'}}>
           <h2>Signup</h2></div> 
        <div className='form'>
            <form onSubmit={handleSubmit}  >
                <input className='input1' name='firstName'  type="text" placeholder='Firstname' value={form.firstName} onChange={changeHandler}/>
                <input className='input1' name='lastName' type="text" placeholder='Lastname'value={form.lastName} onChange={changeHandler} />
                <input className='input1' name='email' type="text" placeholder='Email'value={form.email} onChange={changeHandler} />
                <input className='input1' name='password' type="text" placeholder='Password'value={form.password} onChange={changeHandler} />
                <input className='input1' name='confirmPassword' type="text" placeholder='Confirm Password'value={form.confirmPassword} onChange={changeHandler} />
                <button className='input1 btn btn-primary'>Signup</button>
                <p>Already have an account ? <a href="/login">Login</a></p>
                <button className='input2 btn btn-primary'>Login with Google</button>

            </form>

        </div>
        </div>
   
    </div>
    
  )
}

export default Signup
