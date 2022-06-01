import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';

const DashBoard = () => {
    const [user]=useAuthState(auth);
    const [admin]=UseAdmin(user)
  return (
    <div class="mt-5">
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mt-5">
    {/* <!-- Page content here --> */}
    <h1 class="text-4xl text-secondary font-bold text-center"> Welcome To  My DashBoard</h1>
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side bg-green-300">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard">My Profile</Link></li>
      {
          !admin && <>
          <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard/myorder">My Orders</Link></li>
          <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard/myreview">Add Review</Link></li>
          </>
      } 
      {
          admin && <>
          <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard/allUsers">All Users</Link></li>
           <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard/addproduct">Add Product</Link></li> 
           <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard/manageitems">Manage All Items</Link></li> 
           <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/dashboard/manageorder">Manage Order</Link></li>
          </>
      } 
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashBoard