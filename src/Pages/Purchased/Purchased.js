import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';

const Purchased = () => {
    const [user]=useAuthState(auth)
    const {id}=useParams();
    const [getitem,setGetitem]=useState({});
    useEffect(()=>{
      fetch(`https://morning-fortress-41399.herokuapp.com/tools/${id}`)
      .then(res=>res.json())
      .then(data=>{
         setGetitem(data)
      })
    },[])
    const {_id,minimum,stock,name,price}=getitem;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{ 
      let p=parseInt(data.quantity)*price;
      const mybooking={
        email:data.email,
        Pname:name,
        order:data.quantity,
        phone:data.phone,
        price:p

      }
      fetch('https://morning-fortress-41399.herokuapp.com/bookings',{
        method:'POST',
        headers:{
          'content-type':'application/json',
          authorization:`Bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(mybooking)
      })
      .then(res=>res.json())
      .then(r=>{
        console.log(r)
        if(r.success)
        {
          toast("Booking successfully");
        }
      })
      //update tools details
      
      let s=parseInt(stock)-parseInt(data.quantity)
      
      fetch(`https://morning-fortress-41399.herokuapp.com/tools/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({stock:s})
    })
    .then(res=>res.json())
    .then(data => {
      window.location.reload()
      console.log(data)
  });
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
        
        <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-black">Order Quantity</span>
        </label>
        <div class="text-center">
         <h5>Available quantity: {stock}</h5>
        <h5 className='my-2'>Minimum order quantity: {minimum}</h5>
      <h5 className='mb-2'>per unit price: {price}</h5>
                            </div>
       <input type="number"
           {...register("quantity", {
                required: {
                                            value: true,
                                            message: 'Quantity is required'
                                        },
                                        min: {
                                          value: `${parseInt(minimum)}`,
                                          message: `Quantity can not be less than ${minimum} PC`
                                      },
                                        max: {
                                          value: `${parseInt(stock)}`,
                                          message: `Quantity can not be getter than ${stock} PC`
                                      }
                                    })}
                                    placeholder={minimum}
                                    className="text-black input input-bordered w-full border-secondary "
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Phone Number</span>
         </label>
         <input 
             {...register("phone",{
              required: {
                    value: true,
                     message: 'Phone Number is required'
                    }})}   
              type="text" 
              placeholder='Enter Phone Number'
              class="input input-bordered w-full max-w-xs border-secondary" />
              <label className="label">
              {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
             </label>
        </div>
        <input
        className={`${errors?.quantity ? "btn-disabled" : " "} btn btn-primary text-white mt-4 w-full`} value="Purchase" type="submit" />
  </form>
</div>
</div>
  </div>
 <Footer></Footer>
   </div>
  )
}

export default Purchased