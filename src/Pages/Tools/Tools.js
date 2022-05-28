import React, { useEffect, useState } from 'react'
import ToolsCard from './ToolsCard/ToolsCard'

const Tools = () => {
    const [tools,setTools]=useState([])
    useEffect(()=>{
          fetch("https://morning-fortress-41399.herokuapp.com/tools")
          .then(res=>res.json())
          .then(data=>{
              setTools(data);
          })
    },[])
  return (
    <div class="mt-12 lg:mx-12 mx-7">
        <h1 class="text-4xl text-center text-primary">All Available Tools</h1>
        <div class="grid lg:grid-cols-3 gap-5 grid-cols-1 mt-12">
        {
            tools.map(t=><ToolsCard
            key={t._id}
             t={t}
            ></ToolsCard>)
        }
        </div>
    </div>
  )
}

export default Tools