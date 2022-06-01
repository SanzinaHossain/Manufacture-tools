import React from 'react'
import { toast } from 'react-toastify';

const OrderTable = ({b,refetch}) => {
  const {_id,Pname,price,quantity,email,paid,transitionId}=b;
  const deleteorder=(id)=>{
    const proceed=window.confirm('Are you sure?')
    if(proceed)
    {
        const url=`http://localhost:5000/bookings/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            toast("successfully delete order")
            window.location.reload()
        })
      }
  }
  const ConfirmOrder=(id)=>{
    const proceed=window.confirm('Are you sure?')
    const order={
      status:'shipped'
    }
    if(proceed)
    {
      fetch(`http://localhost:5000/bookings/order/${_id}`,
      {
        method:'PUT',
        headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data =>
        {
          console.log(data);
          window.location.reload()
        })
       
      }
  }
  return (
    <tr>
    <td class="text-black" >{email}</td>
    <td class="text-black" >{Pname}</td>
    <td> 
          { !b.paid && <span className='text-red-700'>Unpaid</span>}
          { (b.paid &&b.status) && <span className='text-green-500'>Shipped</span>}
          { (b.paid && !b.status) && <span className='text-green-500'>Pending</span>}
    </td>
    <td> 
          { !b.transitionId && <span className='text-red-500'>Payment Not clear</span>}
          { b.transitionId && <span className='text-green-500'>{transitionId}</span>}
    </td>
    <td> 
          { !b.paid && <button onClick={()=>{deleteorder(_id)}} class="btn btn-sm btn-primary">Delete Order</button>}
          { b.paid && <span className='text-green-700'>Already Paid</span>}
    </td>
    <td> 
          { (b.paid && !b.status) && <button onClick={()=>{ConfirmOrder(_id)}} class="btn btn-sm btn-primary">Confirm Order</button>}
          { (!b.paid) && <span className='text-red-700'>Payment Not Clear</span>}
          { (b.paid && b.status) && <span className='text-green-700'>Confirm Done</span>}
    </td>
  </tr>
  )
}

export default OrderTable