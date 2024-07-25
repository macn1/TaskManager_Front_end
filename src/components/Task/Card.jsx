import React from 'react'
import axios from 'axios'

import ViewModal from '../ViewModal';

import { useState } from 'react';

function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete =async()=>{
    props.deleteTask(props.data._id)
    
  }

  const editTask =()=>{
    props.editClick()
    props.isedit(props.data)
  }

  return (
    <div className='mt-3' style={{width:'90%',backgroundColor:'#9dceeb',display:'flex',flexDirection:'column',justifyContent:'space-between',marginTop:'8px',height:'140px',marginLeft:'5%'}} draggable='true' onDragStart={()=>props.setActivecard(props.data._id)} onDragEnd={()=>props.setActivecard(null)}>

      <div className='mt-2' style={{marginLeft:'3%',display:'flex',justifyContent:'space-between',flexDirection:'column',height:'80%'}}>

      
             <section className='fs-4'>  Task: {props.data.title}</section>
       <div className='fs-4' > <h5>Description {props.data.description}  </h5></div> 
        <div className='fs-6'><h5>created at:{props.data.createdAt}</h5></div>

       
      </div>

      <div  style={{display:'flex',justifyContent:'end'}} >
        <div >
        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        <button className='btn btn-primary' onClick={editTask}>Edit</button>
        <button className='btn btn-info' onClick={handleOpenModal}>  View Details</button>
        
        </div>
       
      </div>
      <ViewModal
             isOpen={isModalOpen} 
             onClose={handleCloseModal} 
             data={props.data}
             title="Modal Title" 
             description="This is the description for the modal."
             createdAt="2024-07-23 10:00 AM"
            />

      
     
    </div>
  )
}

export default Card
