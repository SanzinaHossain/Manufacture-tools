import React, { useEffect, useState } from 'react'
import SingleReviews from './SingleReviews'

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
          fetch("http://localhost:5000/reviews")
          .then(res=>res.json())
          .then(data=>{
              setReviews(data);
          })
    },[])
    var l=reviews.length
  return (
    <div class="mt-12 lg:mx-12 mx-7">
        <h1 class="text-4xl text-center text-primary">All Client Reviews</h1>
        <div class="grid lg:grid-cols-3 gap-5 grid-cols-1 mt-12">
        {
            reviews.map(r=><SingleReviews
            key={r._id}
             r={r}
            ></SingleReviews>)
        }
        </div>
    </div>
  )
}

export default Reviews