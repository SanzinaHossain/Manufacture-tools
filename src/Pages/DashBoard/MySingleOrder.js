import React from 'react'
import { Link } from 'react-router-dom';

const MySingleOrder = ({b}) => {
    const {_id,email,Pname,order,phone,price}=b;
  return (
    <tr>
        <td class="text-black" >{email}</td>
        <td class="text-black" >{Pname}</td>
        <td class="text-black" >{order} PC</td>
        <td class="text-black" >{price} Tk</td>
        <td class="text-black" >{phone}</td>
        <td> 
          { !b.paid && <Link to={`/dashboard/payment/${_id}`} ><button class="btn btn-sm btn-primary">Pay</button></Link>}
          { b.paid && <span className='text-success'>Paid</span>}
        </td>
        <td> <button class="btn btn-sm btn-primary">Cancel</button></td>
      </tr>
  )
}

export default MySingleOrder