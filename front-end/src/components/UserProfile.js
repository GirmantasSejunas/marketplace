import React from 'react'
import SingleCard from './homeComponents/SingleCard'

const UserProfile = () => {
  return (
    <div className='userProfile'>

      <div className='userProfileInfo'>
        <h2>Sveiki : userEmail </h2>
        <button>atsijungti</button>
      </div>

      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  )
}

export default UserProfile