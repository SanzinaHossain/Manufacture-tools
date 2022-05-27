import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';

const Purchased = () => {
    const [user]=useAuthState(auth)
    const {id}=useParams();
    console.log(id)
    const [getitem,setGetitem]=useState([]);
    useEffect(()=>{
      fetch(`http://localhost:5000/tools/${id}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
         setGetitem(data)
      })
    },[])
    const {minimum,stock,name}=getitem;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{ 
      console.log(data);
      const min=data.mquantity;
      console.log(min);
    }
  return (
    <div>
      <div class="flex justify-center items-center mt-7 text-black">
    <div class="card w-96 bg-base-100 shadow-2xl">
      <div class="card-body">
         <h2 class=" text-4xl text-center text-secondary">Order Your Product</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
           <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">UserName</span>
         </label>
         <input 
             {...register("username")}     
              type="text" 
              value={user.displayName}
              class="input input-bordered w-full max-w-xs border-secondary" />
        </div>
        <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Email</span>
         </label>
         <input 
             {...register("email")}     
              type="text" 
              value={user.email}
              class="input input-bordered w-full max-w-xs border-secondary" />
        </div>
     <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Product name</span>
         </label>
         <input 
             {...register("Pname")}     
              type="text" 
              value={name}
              class="input input-bordered w-full max-w-xs border-secondary" />
        </div>
        <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Phone Number</span>
         </label>
         <input 
             {...register("phone")}     
              type="text" 
              placeholder='Enter Phone Number'
              class="input input-bordered w-full max-w-xs border-secondary" />
        </div>
        <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Available Quantity</span>
         </label>
         <input 
             {...register("Aquantity")}     
              type="text" 
              value={stock}
              class="input input-bordered w-full max-w-xs border-secondary" />
        </div>
        <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Order Quantity</span>
         </label>
         <input 
            {...register("mquantity") }       
              type="text" 
              placeholder={minimum}
              class="input input-bordered w-full max-w-xs border-secondary"
               />
                <label className="label">
                {errors.mquantity && "Last name is required"}
                 </label>
        </div>
    <input 
    value="Placed Order"
    class=" mt-5 btn btn-primary w-full max-w-xs text-white"
     type="submit"/>
  </form>
</div>
</div>
  </div>
 <Footer></Footer>
   </div>
  )
}

export default Purchased