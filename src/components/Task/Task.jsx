

import React, { Fragment } from 'react'
import Card from './Card'

import Droparea from './Dragarea'

function Task(props) {


  const change = () => {

    console.log(props.data.length, "length");

    if (props.data.length == 0) {


      return (<>

      <div style={{height:'100%' ,flex:'grow'}}>
      <Droparea drop={() => { props.drop(props.head, props.ac) }} grow={true} />

      </div>

        

      </>)
    }

    return null

  }





  return (
    <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0px 0px 7px 0px #8888', hieght: '70px' }}>


      <div style={{ width: '90%', backgroundColor: '#5959e0', display: 'flex', color: 'white', marginLeft: '5%', marginTop: '8px', borderRadius: '3px' }}>

        <h6 className='fs-2'>{props.head}</h6>
      </div>




      <div style={{ display: 'flex', flexDirection: 'column' ,flex:"grow"}}>

        <Droparea drop={() => { props.drop(props.head, props.ac) }}   grow={false} />

        {props.data.map((item, index) => (
          <>
            <Card editClick={props.editClick} data={item} setActivecard={props.setActivecard} index={index} deleteTask={props.deleteTask} isedit={props.isedit} ediTask={props.ediTask} />


            <Droparea drop={() => { props.drop(props.head, props.ac) }}   grow={false}/>
          </>



        ))}
        {change()}



      </div>
    </div>
  )
}

export default Task
