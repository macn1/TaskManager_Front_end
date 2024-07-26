


import React, { useState } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import './login.css'

function Login() {

  

  
  const navigate =useNavigate()

  const [form,setForm]= useState({email:'',password:''})
  const [err,setErr]= useState('')
  const[msg,setMsg]=useState('')

  const changeHandler =(e)=>{


    const name=e.target.name
    const value=e.target.value
    setForm({...form,[name]:value})
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    

    try {

      console.log(process.env.BC,"url");

      
      const res =  await axios.post('https://athulmkmacn.online/user/login',{email:form.email,password:form.password}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(res.data,"sasassa");
      if(res.data.status){
        localStorage.setItem('token',res.data.token);
        navigate('/')
      }
      
    } catch (error) {
      console.log(error);
      
    }

 
  }
  return (
    <div className='login'>
     
 
  
    <div className='center' >

    <div  style={{ width:'500px',display:'flex',flex:'start'}}>
    <h2 className='fs-2'>Login</h2> </div> 

    <div className='form1'  >
      
            <form onSubmit={handleSubmit} >
                <input className='input1' name='email'  type="text" placeholder='Email' value={form.email} onChange={changeHandler} />
                <input className='input1' name='password'  type="text" placeholder='Password' value={form.password} onChange={changeHandler} />
                <button className='input1 btn btn-primary'>Login</button>
                <p>Dont have an account ? <a href="/signup">Register</a></p>
                <button className='input2 btn btn-primary'>Login with Google</button>

            </form>

        </div>

    </div>
       
   
    </div>
 
  
  )
}

export default Login
