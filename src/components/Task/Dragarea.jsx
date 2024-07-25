import React, { useState } from 'react'

import './drop.css'

function Dragarea(props) {

    const snd=()=>{
        props.drop()
        setShowdrop(false)
    }

    const [showDrop,setShowdrop]=useState(false)
  return ( 
    <div className ={showDrop?'drop_area':props.grow?'grow':'hide_drop'}   onDragEnter={()=>setShowdrop(true)} onDragLeave={()=>setShowdrop(false)} onDrop={()=>snd()} onDragOver={(e)=>e.preventDefault()}  >

      {/* &nbsp */}
    </div>
  )
}

export default Dragarea
