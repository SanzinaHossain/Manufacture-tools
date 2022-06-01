import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user]=useAuthState(auth);
  const email=user.email;
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    const profile={
      name:data.name,
      phone:data.phone,
      address:data.address,
      education:data.education  
    }
    fetch(`https://morning-fortress-41399.herokuapp.com/user/profile/${email}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      },
      body:JSON.stringify(profile)
    })
    .then(res=>res.json())
    .then(r=>{
      console.log(r)
      window.location.reload()
      if(r.success)
      {
        toast("Profile Update successfully");
      }
    })
  }
  const [p,setP]=useState([])
  useEffect(()=>{
      fetch('https://morning-fortress-41399.herokuapp.com/users')
      .then(res=>res.json())
      .then(data=>{
        
        const remain=data.filter(s=>s.email===email);
        console.log(remain[0])
        setP(remain[0]);
      })
  },[])
  const {name,address,phone,education}=p;
  return (
    <div className='mt-5'>
    <h1 className='text-center text-3xl text-primary font-bold'>Edit Profile</h1>
    <div class="mt-7">
  <h1 class="text-center text-2xl text-black">Name: {name?name:"Not Update yet"}</h1>
  <h1 class="text-center text-2xl text-black">Address: {address?address:"Not Update Yet"}</h1>
  <h1 class="text-center text-2xl text-black">Phone : {phone?phone:"Not Update Yet"}</h1>
  <h1 class="text-center text-2xl text-black">Education : {education?education:"Not Update Yet"}</h1>
    </div>
   <div class="flex justify-center items-center mt-7">
   <div class="card w-96 bg-base-100 shadow-2xl">
    <div class="card-body">
   <form onSubmit={handleSubmit(onSubmit)}>
       <div class="form-control w-full max-w-xs">
      <div class="form-control w-full max-w-xs"></div>
       <label class="label">
           <span class="label-text text-black">Your Name</span>
       </label>
       <input 
           {...register("name",{
              required:{
                 value:true,
                 message:"Name is required"
                }
            })}     
            type="text" 
            placeholder="Enter Your Name" 
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
          <label class="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
          </label>
      </div>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Your Phone Number</span>
       </label>
       <input 
           {...register("phone",{
              required: {
                   value: true,
                   message: 'Phone is required'
              }
           })}     
            type="text" 
            placeholder="Enter Phone Number" 
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
            <label className="label">
                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
            </label>
      </div>
      <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Your Address</span>
       </label>
       <input 
           {...register("address",{
            required: {
                 value: true,
                 message: 'Address is required'
            }
         })}     
            type="text" 
            placeholder="Enter Your Address" 
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
            <label class="label">
          {errors.address?.type === 'required' && <span className="label-text-alt text-red-700">{errors.address.message}</span>}
          </label>
      </div>
      <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Your Education</span>
       </label>
       <input 
           {...register("education",{
            required: {
                 value: true,
                 message: 'Education is required'
            }
         })}     
            type="text" 
            placeholder="Enter Your Education" 
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
            <label class="label">
          {errors.education?.type === 'required' && <span className="label-text-alt text-red-700">{errors.education.message}</span>}
          </label>
      </div>
      <input 
      value="Edit Profile"
      class="btn btn-primary w-full max-w-xs text-white mt-2" 
      type="submit"/>
</form>
   </div>
   </div>
   </div>
</div>
  )
}

export default MyProfile