import React from 'react'
import pic from "../../images/Banner/pic-1.jpg"
const MyPortfolio = () => {
  return (
    <div>
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
    <img src={pic}class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 class="text-5xl font-bold mt-2">Sanzina Hossain</h1>
<h1 class="text-3xl font-bold mt-3">Email: Sanzina67shorna@gmail.com</h1>
<h1 class="text-xl font-bold">Education:</h1>
<p class="pt-3">SSC-2015.From Sharaipara City Corporation school and collage.</p>
<p class="pt-3">HSC-2017.From Govt. Women Collage</p>
<p class="pt-3">BSC-2022.From International Islamic University Ctg.</p>
<h1 class="text-xl font-bold">First Project Link:<a href="https://playful-macaron-a580ac.netlify.app/"> Click Here Project-1</a></h1>
<h1 class="text-xl font-bold">Second Project Link:<a href="https://glittering-pixie-409d91.netlify.app/"> Click Here Project-2</a></h1>
<h1 class="text-xl font-bold">Third Project Link:<a href="https://incandescent-fairy-081429.netlify.app/home"> Click Here Project-3</a></h1>
<button class="btn btn-primary mt-3">Details</button >
    </div>
  </div>
</div>
    </div>
  )
}

export default MyPortfolio