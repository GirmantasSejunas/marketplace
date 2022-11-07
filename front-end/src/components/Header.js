import React from 'react'

const Header = () => {


  return (

    <div className='slider'>
      <a href='/'><h1 className='title'>Nemokamu skelbimu portalas</h1></a>
      <div className='header'>
        <div className='header_top'>

          <div className='header_links'>
            <a className='p_5' href='/addform'>Ideti skelbima</a>
            <a className='p_5' href='/login'>Prisijungti</a>
            <a className='p_5' href='/register'>Registruotis</a>
            <a className='p_5' href='/editpost'>Redaguoti skelbima</a>
          </div>

        </div>
        <div className='header_botton'>
          <input className='p_5' type={'text'} placeholder='Iveskite paieskos fraze' />
          <button className='p_5 button_green w25'>Ieskoti</button>
        </div>
      </div>
      <a className='p_5 header_img'  href='/userProfile'> 
      <img src='data:image/png;base64,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' 
      alt='#'/>
      </a>

    </div>



  )

}

export default Header