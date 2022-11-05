import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/MainContext'
import { get } from '../plugins/plugin'
import SingleCard from './homeComponents/SingleCard'

const UserProfile = () => {

  const { user, setUser } = useContext(MainContext)
  const nav = useNavigate()


  const logged = () => {

    const secret = localStorage.getItem('secret')

    get('userProfile/' + secret).then(data => {
      if (!data.error) {
        setUser(data.data)
      }

      console.log(data.data)
    })
  }

  useEffect(() => {
    logged()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    const logout = () => {
      localStorage.removeItem('secret')

      return nav('/')
    }
  
  return (

    <div>
      {user &&
        <div className='userProfile'>

          <div className='userProfileInfo'>
            <h2>Sveiki : {user.mail} </h2>
            <button onClick={logout}>
              atsijungti</button>
          </div>

          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      }
    </div>

  )
}

export default UserProfile