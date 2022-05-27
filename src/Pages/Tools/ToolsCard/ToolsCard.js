import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "../ToolsCard/ToolsCard.css"
const ToolsCard = ({t}) => {
  const navigate=useNavigate();
  const goto=(id)=>{
    navigate(`/purchased/${id}`);
  }
    const {img,name,price,stock,description,_id}=t;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img class="pic" src={img} alt="Shoes" /></figure>
  <div class="card-body text-black">
    <h2 class="card-title text-center text-3xl">{name}</h2>
    <h2 class="card-title text-center">Price: {price} Per Pc</h2>
    <h2 class="card-title text-center">Stock: {stock} Pc</h2>
    <p>{description}</p>
    <div class="card-actions justify-center mt-3">
      <button onClick={()=>goto(_id)}class="btn btn-primary text-white font-bold">Book Now</button>
    </div>
  </div>
</div>
  )
}

export default ToolsCard