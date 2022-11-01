import React from 'react'

const Register = () => {
  return (
    <div className='register'>

      <h2>Registracija</h2>
      <input className='p_5' type={'text'} placeholder="El.pastas" />
      <input className='p_5' type={'text'} placeholder="Slaptazodis" />
      <input className='p_5' type={'text'} placeholder="Pakartoti slaptazodis" />

      <button className='p_5'>Registruotis</button>
    </div>
  )
}

export default Register