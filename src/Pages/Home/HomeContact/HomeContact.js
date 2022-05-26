import React from 'react'

const HomeContact = () => {
  return (
    <div class=" mt-12 mx-12 w-100 p-12 bg-green-400">
    <h1 className='text-center text-black text-xl'>Contact Us</h1>
   <h1 className="text-center bold text-3xl lg:text-4xl mb-9 text-black">Stay Connected With Us</h1>
 <div class=" justify-items-center">
 <div class="mb-5  justify-items-center grid">
        <input type="text" placeholder="Enter Email" class=" text-black input input-bordered input-success max-w-xs w-full" />
        </div>
   <div class="mb-5 justify-items-center grid">
   <input type="text" placeholder="Subject" class=" text-black input input-bordered input-success w-full max-w-xs" />
   </div>
   <div class="mb-5 justify-items-center grid">
   <textarea class=" text-black textarea textarea-success w-full max-w-xs" placeholder="Your Message"></textarea>
   </div>
   <div class="mb-5 justify-items-center grid">
   <button class="btn btn-primary uppercase bold text-black font-bold">Get Started</button>
   </div>
   </div>
</div>
  )
}

export default HomeContact