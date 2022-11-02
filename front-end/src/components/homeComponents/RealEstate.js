import React from 'react'
import SingleCard from './SingleCard'

const RealEstate = () => {
    return (
        <div className='singleCardWraper'>
            <div className='mb25-mt35'>
              <a href='/realEstate'><h1>Nekilnojamas turtas</h1></a>  
            </div>
            < SingleCard />
            < SingleCard />
        </div>
    )

}

export default RealEstate