import React, { useRef } from 'react'
import { post } from '../plugins/plugin'

const Login = () => {

  const mailRef = useRef()
  const passwordRef = useRef()

  async function submit() {
    const user = {
      mail:mailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(user)

    mailRef.current.value = ''  
    passwordRef.current.value = ''
    
    const userData = await post('login', user)
    console.log(userData)
  }

  return (
    <div className='login'>
      <h2>Prisijungimas</h2>

      <input ref={mailRef} className='p_5' type={'text'} placeholder="El.pastas" />
      <input ref={passwordRef} className='p_5' type={'text'} placeholder="Slaptazodis" />

      <button onClick={submit} className='p_5'>Prisijungti</button>
    </div>
  )
}

export default Login