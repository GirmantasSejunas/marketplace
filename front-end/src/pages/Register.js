import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../plugins/plugin'

const Register = () => {

  const nav = useNavigate()

  const mailRef = useRef()
  const passwordRef = useRef()
  const password2Ref = useRef()

 async function submit() {
    const user = {
      mail:mailRef.current.value,
      password:passwordRef.current.value,
      password2:password2Ref.current.value
    }
    console.log(user)

    // mailRef.current.value = ''  
    // passwordRef.current.value = ''
    // password2Ref.current.value = ''


    const registerData = await post("register", user)
    
    // if(!registerData.error){
    //   localStorage.setItem('secret', registerData.data.secret)
      console.log(registerData)
      
    // }
    nav('/userProfile')
    
  }

  return (
    <div className='formLayout'>

      <h2>Registracija</h2>
      <input ref={mailRef} className='p_5' type={'text'} placeholder="El.pastas" />
      <input ref={passwordRef} className='p_5' type={'text'} placeholder="Slaptazodis" />
      <input ref={password2Ref} className='p_5' type={'text'} placeholder="Pakartoti slaptazodis" />

      <button onClick={submit} className='p_5 button_green'>Registruotis</button>
    </div>
  )
}

export default Register