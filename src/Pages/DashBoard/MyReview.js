import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
   const [user]=useAuthState(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imageStorageKey='2684464d4bfc210ffb05e03e014dcf26';
   const onSubmit = data => {
        const image=data.image[0];
        const formdata=new FormData();
        formdata.append('image',image)
        const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey} `;
        fetch(url,{
          method:'POST',
          body:formdata
        })
        .then(res=>res.json())
        .then(result=>{
          if(result.success)
          {
            const img=result.data.url;
            const review={
              name:data.name,
              email:data.email,
              review:data.review,
              rating:data.rating,
              img:img          
            }
            fetch('http://localhost:5000/reviews',{
              method:'POST',
              headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify(review)
            })
            .then(res=>res.json())
            .then(r=>{
              console.log(r)
              if(r.success)
              {
                toast("Reviews inserted successfully");
              }
            })
           

          }
        })
    }
  return (
    <div className='mt-5'>
    <h1 className='text-center text-3xl text-primary font-bold'>Please Add a Review</h1>
   <div class="flex justify-center items-center mt-7">
   <div class="card w-96 bg-base-100 shadow-2xl">
    <div class="card-body">
   <form onSubmit={handleSubmit(onSubmit)}>
       <div class="form-control w-full max-w-xs">
       <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Client Photo</span>
       </label>
       <input 
           {...register("image")}     
            type="file" 
            class=" text-black input input-bordered w-full max-w-xs border-secondary" />
      </div>
      <div class="form-control w-full max-w-xs"></div>
       <label class="label">
           <span class="label-text text-black">Name of Client</span>
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
            value={user.displayName}
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
          <label class="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
          </label>
      </div>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Client Email</span>
       </label>
       <input 
           {...register("email",{
              required:{
                 value:true,
                 message:"Email is required"
                }
            })}     
            type="email" 
            placeholder="Enter Email" 
            value={user.email}
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
          <label class="label">
          {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
          
          </label>
      </div>
      <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Give Rating</span>
       </label>
       <input 
           {...register("rating")}     
            type="text"  
            placeholder="Enter Any Rating" 
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
      </div>
      <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-black">Client Review</span>
       </label>
       <input 
           {...register("review")}     
            type="text"  
            placeholder="Enter review" 
            class="text-black input input-bordered w-full max-w-xs border-secondary" />
      </div>
      <input 
      value="Placed Your Review"
      class="btn btn-primary w-full max-w-xs text-white mt-2" 
      type="submit"/>
</form>
   </div>
   </div>
   </div>
</div>
  )
}

export default MyReview