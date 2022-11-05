import React, { useContext, useEffect } from 'react'
import MainContext from '../../context/MainContext'
import { post } from '../../plugins/plugin'
import SingleCard from './SingleCard'

const ClothesComp = () => {

    const {posts, setPosts} = useContext(MainContext)


    useEffect(() => {

    const option = {option:'Apranga'}
    
    post('clothes', option).then(res => {
        console.log(res.data)
        setPosts(res.data)
    })




    }, [setPosts])
    return (
        <div>
            {posts.map((e, i) => <SingleCard post={e} key={i} /> ).reverse()}
            
        </div>
        
    )

}

export default ClothesComp

