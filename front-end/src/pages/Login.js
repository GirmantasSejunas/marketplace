import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <h2>Prisijungimas</h2>

      <input className='p_5' type={'text'} placeholder="El.pastas" />
      <input className='p_5' type={'text'} placeholder="Slaptazodis" />

      <button className='p_5'>Prisijungti</button>
    </div>
  )
}

export default Login