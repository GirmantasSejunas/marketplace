import React from 'react'

const SingleCard = () => {
    return (
        <div className='singleCard'>

            <div>
                <img src="data:image/jpeg;base64,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" alt='' />
            </div>
            <div className='singleCardMain'>
                <h2>parduodu mazai naudota nokia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas autem tempore earum delectus! Animi laudantium molestiae cupiditate, quasi a enim autem, sapiente excepturi esse vel molestias ipsum corporis quisquam provident.</p>
                <div className='singleCardSpans'>
                    <span>kaunas</span>
                    <span>kaina: 15e</span>
                </div>
            </div>
        </div>
    )

}

export default SingleCard