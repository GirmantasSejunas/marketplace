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
          <a className='p_5' href='/userProfile'>Jusu profilis</a>
        </div>

        

      </div>
      <div className='header_botton'>
        <select className='p_5'>
          <option>Visos kategorijos</option>
          <option>Nekilnojamas turtas</option>
          <option>Transportas</option>
          <option>Prietaisai</option>
          <option>Apranga</option>
        </select>
        <input className='p_5' type={'text'} placeholder='Iveskite paieskos fraze' />
        <button className='p_5 button_green w25'>Ieskoti</button>
      </div>
    </div>
       
    </div>



  )

}

export default Header