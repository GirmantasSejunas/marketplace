import React from 'react'
import SingleCard from './SingleCard'

const Devices = () => {
  return (
    <div className='singleCardWraper'>
            <div className='mb25-mt35'>
             <a href='/devices'><h1>Prietaisai</h1></a>   
            </div>
            < SingleCard />
            < SingleCard />
          
        </div>
    )
}

export default Devices