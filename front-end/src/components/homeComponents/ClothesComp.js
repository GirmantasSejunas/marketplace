import React from 'react'

const ClothesComp = () => {
    return (

        <div className='singleCardWraper'>
            <div className='mb25-mt35'>
                <a href='/clothes'>
                    <h1>Apranga</h1>
                    <img src='data:image/jpeg;base64,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' alt='#' />
                </a>
            </div>

        </div>
    )

}

export default ClothesComp

