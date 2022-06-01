import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import OrderTable from './OrderTable';

const ManageOrder = () => {
  const { data: bookings, isLoading, refetch } = useQuery('bookings', () => fetch('http://localhost:5000/bookings', {
    method: 'GET',
    headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));
if (isLoading) {
    return <Loading></Loading>
}
  return (
    <div className='mt-5'>
    <h1 className='text-center text-3xl text-primary font-bold'>All Products</h1>
    <div class="overflow-x-auto mt-5">
<table class="table w-full">
<thead>
  <tr class="bg-green-300">
    <th>User</th>
    <th>Product Name</th>
    <th>Status</th>
    <th>TransitionId</th>
    <th>Delete</th>
    <th>Confirm Order</th>
  </tr>
</thead>
<tbody>
  {
      bookings.map(b=>
      <OrderTable
          b={b}
          refetch={refetch}
      ></OrderTable>
        )
  }
</tbody>
</table>
</div>
    </div>
  )
}

export default ManageOrder