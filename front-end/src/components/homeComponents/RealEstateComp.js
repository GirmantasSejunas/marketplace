import React, { useContext, useEffect } from 'react'
import MainContext from '../../context/MainContext'
import { post } from '../../plugins/plugin'
import SingleCard from './SingleCard'

const RealEstateComp = () => {
    const {posts, setPosts} = useContext(MainContext)


    useEffect(() => {

    const option = {option:'Nekilnojamas turtas'}
    
    post('realEstate', option).then(res => {
       setPosts(res.data)
    })




    }, [setPosts])
    return (
        <div>
            {posts.map((e, i) => <SingleCard post={e} key={i} /> ).reverse()}
            
        </div>
        
    )


}

export default RealEstateComp