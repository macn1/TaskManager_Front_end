import { useState } from 'react';

import axios from 'axios';
const Modal = ({ isOpen, onClose, title, description , getData , ediTask ,isEditdata ,setIseditdata ,editBool }) => {

    // const [form, setForm]= useState(isEditdata)
    const form = isEditdata


    // console.log(form,isEditdata,"hshshshsh");

    


  if (!isOpen) return null;



  const handleChange =(e)=>{

    const name = e.target.name
    const value = e.target.value
    setIseditdata({...form,[name]:value})


  }



  const handleSubmit =async(e)=>{

    const token= localStorage.getItem('token')

    if (!editBool) {

      e.preventDefault()
      try {
  
          const res = await axios.post(`${process.env.backend_url}/task`,{title:form.title,description:form.description}, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Set the content type if needed
              'Custom-Header': 'CustomHeaderValue'
            }})
          
          getData()
  
          
      } catch (error) {

        console.log(error);
          
      }
      
    }else{
      try {

        const res = await axios.put(`${process.env.backend_url}/task/${form._id}`,{title:form.title,description:form.description},{
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Set the content type if needed
            'Custom-Header': 'CustomHeaderValue'
          }})
        getData()
        
    } catch (error) {

        console.log(error);
        
    }
    }



   
   
   
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-4">
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
          <input type="text " placeholder='title' name='title'  onChange={handleChange} value={form.title}/>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">{description}</h2>
          <input type="text " placeholder='description' name='description'  onChange={handleChange} value={form.description}/>
          <div>
          <button className='btn btn-success mt-5' onClick={handleSubmit} > {editBool?'Edit':'Add task'}</button>
          </div>
         

          </div>
          <button 
            onClick={onClose} 
            className="self-end bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
