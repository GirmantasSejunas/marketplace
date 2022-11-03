import React, { useRef } from 'react'
import { post } from '../../plugins/plugin'

const AddForm = () => {


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
            option: optionRef.current.value
        }
        console.log(form)

        // photoRef.current.value = ''
        // titleRef.current.value = ''
        // descriptionRef.current.value = ''
        // cityRef.current.value = ''
        // priceRef.current.value = ''
        // phoneRef.current.value = ''

        const postData = await post('addPost', form)

        console.log(postData)
    }

    return (
        <div className='formLayout'>

            <h2>Ideti skelbima</h2>
            <input ref={photoRef} className='p_5' type={'text'} placeholder="Nuotrauka" />
            <input ref={titleRef} className='p_5' type={'text'} placeholder="Pavadinimas" />
            <textarea ref={descriptionRef} className='p_5' type={'text'} placeholder="Aprasymas" />
            <input ref={cityRef} className='p_5' type={'text'} placeholder="Miestas" />
            <input ref={priceRef} className='p_5' type={'text'} placeholder="Kaina" />
            <input ref={phoneRef} className='p_5' type={'text'} placeholder="Tel.nr" />
            <select ref={optionRef} className='p_5'>
                <option disabled selected>Pasirinkite kategorija</option>
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