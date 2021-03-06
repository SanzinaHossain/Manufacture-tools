import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'
import { FcPortraitMode } from "react-icons/fc";
const Navbar = () => {
  const [user]=useAuthState(auth);
  const logout=()=>{
    signOut(auth);

  }
  const menuitems=<>
         <li class="hover:bg-primary text-black  rounded-lg"><Link to="/">Home</Link></li>
         <li class="hover:bg-primary text-black  rounded-lg"><Link to="/blogs">Blogs</Link></li>
         <li class="hover:bg-primary text-black  rounded-lg"><Link to="/myportfolio">Portfolio</Link></li>
         {
          user && <li class="text-black hover:bg-primary rounded-lg "><Link to ="/dashboard" >DashBoard</Link></li>
         }
         <li class="hover:bg-primary rounded-lg text-black">{user? <Link to="/profile"><FcPortraitMode class="text-5xl"></FcPortraitMode>{user.displayName}</Link>:<Link to="/Register">Register</Link>}</li>
         <li class="hover:bg-primary rounded-lg text-black ">{user? <Link onClick={logout} to="/login">SignOut</Link>:<Link to="/login">Login</Link>}</li> 
        
  </>
  return (
    <div class="navbar bg-base-100 navbar-fixed">
    <div class="lg:navbar-start sm:navbar-center">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menuitems}
        </ul>
      </div>
      <a class=" text-3xl text-secondary sm-flex">C&A Tools</a>
    </div>
    <div class="navbar-end hidden lg:flex sm:none">
      <ul class="menu menu-horizontal p-0">
          {menuitems}
      </ul>
    </div>
   <div className="navbar-end">
    <label tabindex="1" for="my-drawer-2" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
    </div>
  </div>
  )
}

export default Navbar