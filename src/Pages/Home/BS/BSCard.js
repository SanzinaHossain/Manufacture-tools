import React from 'react'

const BSCard = ({img,bgClass,card_tittle,des}) => {
  return (
    <div className={`card lg:card-side bg-base-400 shadow-xl ${bgClass}`}>
  <div class="card-body">
    <h2 className="text-5xl text-black bold text-center">{card_tittle}</h2>
    <p className='text-black text-center text-2xl '>{des}</p>
  </div>
</div>
  )
}

export default BSCard