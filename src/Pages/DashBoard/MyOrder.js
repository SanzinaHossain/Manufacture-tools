import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import MySingleOrder from './MySingleOrder'

const MyOrder = () => {
  const [user]=useAuthState(auth);
  const [bookings,setBookings]=useState([])
  useEffect(()=>{
       fetch('https://morning-fortress-41399.herokuapp.com/bookings',{
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
       })
       .then(res=>res.json())
       .then(data=>{
        const remain=data.filter(s=>s.email===user.email);
        setBookings(remain)
       })
  },[])
  return (
    <div className='mt-5'>
        <h1 className='text-center text-3xl text-primary font-bold'>My All Orders</h1>
        <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    <thead>
      <tr class="bg-green-300">
        <th>Email</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Phone</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
          bookings.map(b=>
          <MySingleOrder
              b={b}
          ></MySingleOrder>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default MyOrder