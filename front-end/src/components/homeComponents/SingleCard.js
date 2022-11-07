import React from 'react'

const SingleCard = (post) => {
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
                </div>
            </div>
        </div>
    )

}

export default SingleCard