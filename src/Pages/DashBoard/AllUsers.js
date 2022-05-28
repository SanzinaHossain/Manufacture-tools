import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import SingleUser from "../DashBoard/SingleUser"
const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
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
        <h1 className='text-center text-3xl text-primary font-bold'>All Users</h1>
        <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    <thead>
      <tr class="bg-green-300">
        <th>Name</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map(u=>
          <SingleUser
              u={u}
              refetch={refetch}
          ></SingleUser>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default AllUsers