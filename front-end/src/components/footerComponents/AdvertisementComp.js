import React from 'react'

const AdvertisementComp = () => {
    return (
        <div className='advertisement'>
            <h2>Visais klausimais prasome kreiptis</h2>
            <p>
                <b>Reklama:</b>
                <a href='mailto:reklama@reklama.lt'>reklama@reklama.lt</a>
            </p>
            <p>
                <b>Telefonas:</b>
                <a href='tel:+37066612345'>+370 666 12345</a>
            </p>
            <p>Į visus laiškus atsakome per 48h išskyrus savaitagalius ir nedarbo dienas.</p>
            <h2>Darbo laikas</h2>
            <div>
                <p>I-V: 9-17val.</p>
                <p>VI-VII: nedirbame</p>
            </div>

        </div>
    )
}

export default AdvertisementComp