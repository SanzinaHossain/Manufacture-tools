import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MySingleOrder = ({b}) => {
    const {_id,email,Pname,order,phone,price,transitionId
    }=b;
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
  return (
    <tr>
        <td class="text-black" >{email}</td>
        <td class="text-black" >{Pname}</td>
        <td class="text-black" >{order} PC</td>
        <td class="text-black" >{price} Tk</td>
        <td> 
          { !b.paid && <span className='text-red-500'>Payment Not clear</span>}
          { b.paid && <span className='text-success'>{transitionId}</span>}
        </td>
        <td> 
          { !b.paid && <Link to={`/dashboard/payment/${_id}`} ><button class="btn btn-sm btn-primary">Pay</button></Link>}
          { b.paid && <span className='text-success'>Paid</span>}
        </td>
        <td> 
        { !b.paid && <button onClick={()=>{deleteorder(_id)}}class="btn btn-sm btn-primary">Cancel</button>}
          { b.paid && <span className='text-success'>Already Paid</span>}
        </td>
      </tr>
  )
}

export default MySingleOrder