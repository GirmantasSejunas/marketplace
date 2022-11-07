import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { get, post } from '../plugins/plugin'

const EditPostComp = () => {

    const nav = useNavigate()

    const [editedPost, setEditedPost] = useState()

    const inputRef = useRef()

    const photoRef = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const cityRef = useRef()
    const priceRef = useRef()
    const phoneRef = useRef()
    const optionRef = useRef()

    async function editPost() {

        const postId = inputRef.current.value

        get(`getpost/${postId}`).then(res => {

            setEditedPost(res.data)
        })

    };

    function replacePost() {
        console.log(editedPost)

        const form = {
            photo: photoRef.current.value,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            city: cityRef.current.value,
            price: priceRef.current.value,
            phone: phoneRef.current.value,
            option: optionRef.current.value,
            _id: editedPost._id
        }
        console.log(form)

        post('replacepost', form).then(newPost => {
            window.alert(newPost.message)
            if (!newPost.error) return nav('/')
        })

    };

    function removePost() {
        post('removepost', editedPost).then(res => {

            window.alert(res.message)
            if (!res.error) return nav('/')
        })
    };


    return (
        <div>


            <div className='formLayout'>
                <h2>Skelbimo redagavimas</h2>
                <input ref={inputRef} className='p_5' type='text' placeholder='Iveskite koda' />
                <button onClick={editPost} className='p_5 button_green'>Redaguoti</button>
            </div>
            {editedPost &&
                <div className='formLayout'>
                    <h2>Pakeisti skelbima</h2>
                    <input defaultValue={editedPost.photo} ref={photoRef} className='p_5' type={'text'} placeholder="Nuotrauka" />
                    <textarea defaultValue={editedPost.description} ref={descriptionRef} className='p_5' type={'text'} placeholder="Aprasymas" />
                    <input defaultValue={editedPost.city} ref={cityRef} className='p_5' type={'text'} placeholder="Miestas" />
                    <input defaultValue={editedPost.price} ref={priceRef} className='p_5' type={'text'} placeholder="Kaina" />
                    <input defaultValue={editedPost.title} ref={titleRef} className='p_5' type={'text'} placeholder="Pavadinimas" />
                    <input defaultValue={editedPost.phone} ref={phoneRef} className='p_5' type={'text'} placeholder="Tel.nr" />
                    <select defaultValue={editedPost.option} ref={optionRef} className='p_5'>
                        <option>Nekilnojamas turtas</option>
                        <option>Transportas</option>
                        <option>Prietaisai</option>
                        <option>Apranga</option>
                    </select>

                    <div>
                        <button onClick={replacePost} className='p_5 button_green w50'>Pakeisti skelbima</button>
                        <button onClick={removePost} className='p_5 w50 bg_red'>Istrinti skelbima</button>

                    </div>
                </div>
            }
        </div>
    )
}

export default EditPostComp