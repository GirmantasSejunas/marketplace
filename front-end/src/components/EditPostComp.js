import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { get, post } from '../plugins/plugin'

const EditPostComp = () => {

    const nav = useNavigate()

    const [editedPost, setEditedPost] = useState()

    const inputRef = useRef()

    async function editPost() {

        const postId = inputRef.current.value

        get(`getpost/${postId}`).then(res => {

            setEditedPost(res.data)
        })

    };

    function replacePost() {

        post('replacepost', editedPost).then(res => {
            console.log(res)
            if (!res.error) return nav('/')
        })
        
    };
    
    function removePost() {
        post('removepost', editedPost).then(res => {
            console.log(res)
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
                    <input defaultValue={editedPost.photo} className='p_5' type={'text'} placeholder="Nuotrauka" />
                    <textarea defaultValue={editedPost.description} className='p_5' type={'text'} placeholder="Aprasymas" />
                    <input defaultValue={editedPost.city} className='p_5' type={'text'} placeholder="Miestas" />
                    <input defaultValue={editedPost.price} className='p_5' type={'text'} placeholder="Kaina" />
                    <input defaultValue={editedPost.title} className='p_5' type={'text'} placeholder="Pavadinimas" />
                    <input defaultValue={editedPost.phone} className='p_5' type={'text'} placeholder="Tel.nr" />
                    <select defaultValue={editedPost.option} className='p_5'>
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