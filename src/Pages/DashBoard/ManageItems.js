import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ProductTable from './ProductTable';

const ManageItems = () => {
  const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools', {
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
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
          tools.map(t=>
          <ProductTable
              t={t}
              refetch={refetch}
          ></ProductTable>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default ManageItems