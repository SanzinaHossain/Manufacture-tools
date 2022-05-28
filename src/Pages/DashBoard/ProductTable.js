import React from 'react'
import { toast } from 'react-toastify';

const ProductTable = ({t,refetch}) => {
    const {_id,name,stock,price}=t;
  const DeleteItems=(id)=>{
      console.log(id)
      const proceed=window.confirm('Are you sure?')
      if(proceed)
      {
          const url=`https://morning-fortress-41399.herokuapp.com/tools/${id}`;
          fetch(url,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              toast("successfully delete items")
              refetch();
          })
        }
}

  return (
    <tr>
    <td class="text-black" >{_id}</td>
    <td class="text-black" >{name}</td>
    <td class="text-black" >{price}</td>
    <td class="text-black" >{stock}</td>
    <td><button onClick={()=>DeleteItems(_id)} class="btn btn-sm btn-primary">Delete Product</button></td>
  </tr>
  )
}

export default ProductTable