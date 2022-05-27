import React from 'react'
import "../NoPageFound/NoPageFound.css"
import pic from "../../images/icons/pic-3.jpg"
const NoPageFound = () => {
  return (
    <div className='mx-12'>
    <img className="error mt-5" src={pic} alt=""></img>
     </div>
  )
}

export default NoPageFound