import React from 'react'
import { toast } from 'react-toastify';

const SingleUser = ({u,refetch}) => {
  const {email,role}=u;
  const makeAdmin=()=>{
    fetch(`https://morning-fortress-41399.herokuapp.com/users/admin/${email}`,{
      method:'PUT',
      headers:{
         authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>{
      if(res.status===403)
      {
        toast.error("Failed to make an admin");
      }
      return res.json()}
      )
    .then(data=>{
     if(data.modifiedCount>0)
     {
       refetch();
      toast.success('Successfully make an admin')
     }
    })

}
  return (
    <tr>
        <td class="text-black" >{email}</td>
        <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-sm btn-primary">Make Admin</button>}</td>
      </tr>
  )
}

export default SingleUser