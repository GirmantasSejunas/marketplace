import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../../plugins/plugin'

const AddForm = () => {


    const nav = useNavigate()

    const photoRef = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const cityRef = useRef()
    const priceRef = useRef()
    const phoneRef = useRef()
    const optionRef = useRef()


    async function submit() {
        const form = {
            photo: photoRef.current.value,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            city: cityRef.current.value,
            price: priceRef.current.value,
            phone: phoneRef.current.value,
            option: optionRef.current.value,
            secret: localStorage.getItem('secret')
        }


        post('addPost', form).then(res =>{
            // alert(res.error._id)
            alert(res.data._id)
            if(!res.error) return nav('/')
        })

    }


    return (
        <div className='formLayout'>
            <h2>Ideti skelbima</h2>
            <input ref={photoRef} className='p_5' type={'text'} placeholder="Nuotrauka" />
            <input ref={titleRef}  className='p_5' type={'text'} placeholder="Pavadinimas" />
            <textarea ref={descriptionRef}  className='p_5' type={'text'} placeholder="Aprasymas" />
            <input ref={cityRef}  className='p_5' type={'text'} placeholder="Miestas" />
            <input ref={priceRef}  className='p_5' type={'text'} placeholder="Kaina" />
            <input ref={phoneRef}  className='p_5' type={'text'} placeholder="Tel.nr" />
            <select ref={optionRef}  className='p_5'>
                <option>Nekilnojamas turtas</option>
                <option>Transportas</option>
                <option>Prietaisai</option>
                <option>Apranga</option>
            </select>


            <button onClick={submit} className='p_5 button_green'>Ideti skelbima</button>
        </div>
    )
}

export default AddForm