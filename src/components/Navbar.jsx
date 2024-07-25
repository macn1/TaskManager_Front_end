import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Navbar() {


  const getName=()=>{

    if (localStorage.getItem('token')) {
      return(<>  <button className='btn btn-danger' onClick={clear}>logout</button>
      </>)
    
     
              
            }else{
              return (<>
                <a  href="/login"><button className='btn btn-light'>login</button></a>
        
                <a href="/signup"><button className='btn btn-light'>signup</button></a>
                </>)
              
            }
    
          }
          
        
        
      

  const navigate = useNavigate()


  const clear =()=>{

  

    if (localStorage.getItem('token')) {
      localStorage.clear()
      navigate('/login')
      
    }
   
  
  }
  return (<>
    <div className='navbar bg-primary' style={{width:'100%',height:'40%'}}>
  <div style={{marginLeft:'10%',height:'20px'}}>
    <a class="navbar-brand" href="/">
    {/* <i class="fa-thin fa-clipboard-list" style={{color: "#f0f2f5"}}></i> */}
    <i class="fa-solid fa-clipboard-list" style={{color:'white',height:'30px'}}></i>
    {/* <FontAwesomeIcon icon="fa-thin fa-clipboard-list" style={{color: "#f0f2f5",}} /> */}
    </a>
  </div>
 
  <div  style={{display:'flex',flexDirection:'row'}}>
    <ul className='d-grid gap-2 d-md-flex justify-content-md-end ' style={{marginRight:'30px'}}>
    
     {getName()}
    </ul>
      
    </div>
    </div>
   
    </>
  )
}

export default Navbar
