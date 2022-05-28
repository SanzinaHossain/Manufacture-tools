import React from 'react'

const SingleReviews = ({r}) => {
    
    const {img,name,review}=r;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img class="pic" src={img} alt="Shoes" /></figure>
  <div class="card-body text-black">
    <h2 class=" text-3xl text-center">{name}</h2>
    <p class="text-center">{review}</p>
  </div>
</div>
  )
}

export default SingleReviews