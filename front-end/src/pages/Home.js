import React from 'react'
import Clothes from '../components/homeComponents/Clothes'
import Devices from '../components/homeComponents/Devices'
import RealEstate from '../components/homeComponents/RealEstate'
import Transport from '../components/homeComponents/Transport'

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