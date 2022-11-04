import React from 'react'
import Clothes from '../pages/homePages/Clothes'
import Devices from '../pages/homePages/Devices'
import RealEstate from '../pages/homePages/RealEstate'
import Transport from '../pages/homePages/Transport'

const Home = () => {
  return (


    <div className='home'>
      < RealEstate />
      < Transport />
      < Devices />
      < Clothes />

    </div>

  )
}

export default Home