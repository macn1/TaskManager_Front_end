import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Task from './Task/Task';
import './home.css'
import { useState } from 'react';
import Modal from './Modal';
import axios from 'axios'
import ViewModal from './ViewModal';
import { useNavigate } from 'react-router-dom';
function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [activeCard, setActivecard] = useState(null)

    const [todoData, setTododata] = useState([])
    const [inprogressData, setInprogressdata] = useState([])
    const [doneData, setDonedata] = useState([])

    const [editBool,setEditbool]=useState(false)

    const [isEditdata,setIseditdata]=useState({title:'',description:''})


    const navigate= useNavigate()

   

        const isedit =(data)=>{
            // console.log(data,"hhdhdhd");


            setIseditdata(data)
            setEditbool(true)

            // console.log(isEditdata,"aasdf");
        }


    const ediTask = async(data)=>{
        const token = localStorage.getItem('token')
        // console.log(token,data._id,"hello");
        try {

            const res = await axios.put(`https://athulmkmacn.online/task/${data._id}`,data,{
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json', // Set the content type if needed
                  'Custom-Header': 'CustomHeaderValue'
                }})
            
        } catch (error) {

            console.log(error);
            
        }
    }

    const deleteTask = async (id) => {

        try {
            const res = await axios.delete(`https://athulmkmacn.online/task/${id}`)
            getData()
            // console.log(res, "fefe");

        } catch (error) {
            console.log(error);
        }


    }


    const drop = async (status, index) => {


        try {


            const res = await axios.patch(`https://athulmkmacn.online/task/${index}`, { status: status })

            getData()

            console.log(res, "hhahah");
        } catch (error) {

        }

    }



    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    async function getData() {

        

        const token = localStorage.getItem('token')

        try {

            if(!localStorage.getItem('token')){

                navigate('/login')
            }
        
            

            const res = await axios.get(`https://athulmkmacn.online/task`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }})
            // console.log(res.data.data.length,"");


            if (res.data.status) {

                const todo = []
                const inprogress = []
                const done = []
                for (let i = 0; i < res.data.data.length; i++) {

                    if (res.data.data[i].status == 'TODO') {
                        let data = todoData
                        todo.push(res.data.data[i])
                    }
                    if (res.data.data[i].status == 'IN PROGRESS') {
                        let data = todoData
                        inprogress.push(res.data.data[i])
                    }
                    if (res.data.data[i].status == 'DONE') {
                        let data = todoData
                        done.push(res.data.data[i])
                    }

                    setTododata(todo)
                    setInprogressdata(inprogress)
                    setDonedata(done)

                }

            }

        } catch (error) {



        }

    }
    console.log(todoData, "ddsdsds");

    useEffect(() => {

        

        getData()


    }, [])

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        //  fontSize: '240px'

    };
    return (
        <>
            <div className='container'>
                <button className='btn btn-primary mt-3' style={{ width: '20%' }} onClick={handleOpenModal}>Add task</button>

                <div className=' mt-3' style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '50px', boxShadow: '0px 0px 7px 0px #8888', padding: '2px' }}>



                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px', fontSize: '24px', width: '40%' }}>
                        <div style={containerStyle}>
                            <h5>Search</h5>
                        </div>

                        <input class="form-control me-2 mt-2 " type="search" placeholder="Search" aria-label="Search" style={{ height: '30px', marginLeft: '20px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: '20px', width: '60%', justifyContent: 'flex-end' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', fontSize: '20px' }}>
                            <div style={containerStyle}>
                                <h5>sortby</h5>
                            </div>
                            <div style={containerStyle}>
                                <select id="exampleSelect" >
                                    <option value="" disabled>
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className='row' >

                    <div className='col-4'>
                    <Task editClick={handleOpenModal} data={todoData} setActivecard={setActivecard} head='TODO' drop={drop} ac={activeCard} deleteTask={deleteTask}  isedit={isedit} ediTask={ediTask}    />

                    </div>
                    <div className=' col-4'>
                    <Task editClick={handleOpenModal} data={inprogressData} setActivecard={setActivecard} head='IN PROGRESS' drop={drop} ac={activeCard} deleteTask={deleteTask}  isedit={isedit} ediTask={ediTask}    />

                        
                        </div>
                        <div className='col-4'>
                    <Task editClick={handleOpenModal} data={doneData} setActivecard={setActivecard} head='DONE' drop={drop} ac={activeCard} deleteTask={deleteTask}  isedit={isedit} ediTask={ediTask}   />
                        
                        </div>


                </div> */}

<div className='row p-0 m-0' >
    <div className='col-12 col-md-4 p-0' >
        <Task editClick={handleOpenModal} data={todoData} setActivecard={setActivecard} head='TODO' drop={drop} ac={activeCard} deleteTask={deleteTask} isedit={isedit} ediTask={ediTask} />
    </div>
    <div className='col-12 col-md-4 p-0'>
        <Task editClick={handleOpenModal} data={inprogressData} setActivecard={setActivecard} head='IN PROGRESS' drop={drop} ac={activeCard} deleteTask={deleteTask} isedit={isedit} ediTask={ediTask} />
    </div>
    <div className='col-12 col-md-4 p-0'>
        <Task editClick={handleOpenModal} data={doneData} setActivecard={setActivecard} head='DONE' drop={drop} ac={activeCard} deleteTask={deleteTask} isedit={isedit} ediTask={ediTask} />
    </div>
</div>
            </div>

            <Modal


                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Task Title"
                description="Enter the description for the Title."
                getData={getData}
                isEditdata ={isEditdata}
                ediTask={ediTask}
                setIseditdata={setIseditdata}
                editBool={editBool}
                


            />
           
{/* 
            <div>
                <h2>{activeCard}</h2>
            </div> */}

        </>
    )
}

export default Home
