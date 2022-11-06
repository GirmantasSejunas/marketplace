import { get } from '../plugins/plugin'
import React, {  useContext, useEffect } from 'react'
import SingleCard from './homeComponents/SingleCard'
import MainContext from '../context/MainContext'

const UserPosts = () => {
    

const { posts, setPosts} = useContext(MainContext)

useEffect(() => {

    const secret = localStorage.getItem('secret')

    

    get(`userposts/${secret}`).then(res => {
        console.log(res.data)
        setPosts(res.data)


    })

}, [setPosts])

  return (
    <div>
        {posts && posts.map((e, i) => <SingleCard post={e} key={i} />)}

        lalalala
        
    </div>
  )
}

export default UserPosts