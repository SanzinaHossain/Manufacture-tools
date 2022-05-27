import React from 'react'
import Footer from '../Shared/Footer/Footer'
import Tools from '../Tools/Tools'
import Banner from './Banner/Banner'
import BS from './BS/BS'
import HomeContact from './HomeContact/HomeContact'


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BS></BS>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </div>
  )
}

export default Home