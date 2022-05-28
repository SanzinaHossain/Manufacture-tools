import React from 'react'

const MySingleOrder = ({b}) => {
    const {email,Pname,order,phone,price}=b;
  return (
    <tr>
        <td class="text-black" >{email}</td>
        <td class="text-black" >{Pname}</td>
        <td class="text-black" >{order} PC</td>
        <td class="text-black" >{price} Tk</td>
        <td class="text-black" >{phone}</td>
        <td> <button class="btn btn-sm btn-primary">Pay</button></td>
        <td> <button class="btn btn-sm btn-primary">Cancel</button></td>
      </tr>
  )
}

export default MySingleOrder