import React from 'react'
import { FcHome,FcApproval,FcBusinessman} from "react-icons/fc";
const BS = () => {
  return (
    <div class="mt-12">
      <h1 class="text-4xl text-center text-primary">Bussiness Summary</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-10">
      <div className={` card lg:card-side bg-base-400 shadow-xl bg-gradient-to-r from-secondary to-primary`}>
      <div class="card-body">
       <h1 class="text-right lg:pl-32 pl-24 text-7xl "><FcHome></FcHome></h1>
       <h2 className="text-5xl text-black bold text-center">50+</h2>
       <p className='text-black text-center text-2xl '>Countries</p>
      </div>
     </div>
     <div className={` card lg:card-side bg-base-400 shadow-xl bg-green-400`}>
      <div class="card-body">
       <h1 class="text-right lg:pl-32 pl-24 text-7xl "><FcBusinessman></FcBusinessman></h1>
       <h2 className="text-5xl text-black bold text-center">900+</h2>
       <p className='text-black text-center text-2xl '>Happy Clients</p>
      </div>
     </div>
     <div className={` card lg:card-side bg-base-400 shadow-xl bg-gradient-to-r from-secondary to-primary `}>
      <div class="card-body">
       <h1 class="text-right lg:pl-32 pl-24 text-7xl "><FcApproval></FcApproval></h1>
       <h2 className="text-5xl text-black bold text-center">1100+</h2>
       <p className='text-black text-center text-2xl '>Sucessful Projects</p>
      </div>
     </div>
    </div>
    </div>
  )
}

export default BS