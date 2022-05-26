import React from 'react'
import pic1 from "../../../images/Banner/pic-1.jpg"
import pic2 from "../../../images/Banner/pic-2.jpg"
import pic3 from "../../../images/Banner/pic-3.jpg"
import pic4 from "../../../images/Banner/pic-4.jpg"
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={pic1} class="w-full"/>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">left</a> 
      <a href="#slide2" class="btn btn-circle">right</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={pic2} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">right</a> 
      <a href="#slide3" class="btn btn-circle">left</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={pic3} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">right</a> 
      <a href="#slide4" class="btn btn-circle">left</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src={pic4} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">right</a> 
      <a href="#slide1" class="btn btn-circle">left</a>
    </div>
  </div>
</div>
  )
}

export default Banner