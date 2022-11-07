import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'

const SingleCard = (post) => {

    const { user } = useContext(MainContext)
    
    return (
        <div className='singleCard'>

            <div>
                <img src={post.post.photo} alt='#' />
            </div>
            <div className='singleCardMain'>
                <h2>{post.post.title}</h2>
                <p>{post.post.description}</p>
                <div className='singleCardSpans'>
                    <span>{post.post.city}</span>
                    <span>Tel.nr: {post.post.phone}</span>
                    <span>Kaina: {post.post.price} e</span>
                    {user &&
                        <span>Posto redagavimo kodas:<b>{post.post._id}</b>  </span>

                    }
                </div>
            </div>
        </div>
    )

}

export default SingleCard