import React from 'react'
import BSCard from './BSCard'
import clock from '../../../images/icons/clock.svg'
import mark from "../../../images/icons/marker.svg"
import phone from "../../../images/icons/phone.svg"
const BS = () => {
  return (
    <div class="mt-12">
      <h1 class="text-4xl text-center text-primary">Bussiness Summary</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-10">
        <BSCard img={clock} bgClass="bg-gradient-to-r from-secondary to-primary" card_tittle={"50+"} des={"Countries"}></BSCard>
        <BSCard img={mark} bgClass="bg-green-400" card_tittle={"900+"} des={"Happy Clients"} ></BSCard>
        <BSCard img={phone} bgClass="bg-gradient-to-r from-secondary to-primary" card_tittle={"1300+"} des={" Sucessful Projects"}></BSCard>
    </div>
    </div>
  )
}

export default BS