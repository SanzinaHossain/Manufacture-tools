import React, { useEffect, useState } from 'react'

const UseAdmin = (user) => {
  const[admin,setAdmin]=useState(false);
  const [adminloading,setAdminloading]=useState(true)
  useEffect(()=>{
    const email=user.email;
    if(email)
    {
        fetch(`https://morning-fortress-41399.herokuapp.com/admin/${email}`,{
          method:'GET',
          headers:{
              'content-type':'application/json',
              authorization:`Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin);
            setAdminloading(false)
        })
    }
  },[user])
   return [admin,adminloading]
}

export default UseAdmin