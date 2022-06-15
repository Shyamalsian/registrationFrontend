import React, { useState, useEffect } from 'react'
import axios from 'axios'

function EditUser(props) {
    const [newDetail, setDetail] = useState({ id: '', firstName: '', lastName: '', email: '' })
    useEffect(() => {
        console.log(props)
        setDetail(props.detail)
    }, [])
    const changeHandler = (e) => {
        setDetail({ ...newDetail, [e.target.name]: e.target.value })
        console.log(newDetail)
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        console.log("Working");
        let responce
        try{
            responce = await axios.patch('https://internregister.herokuapp.com/app/updateUser',{                
                newDetail
            })
            if(responce)
            {
                console.log("User Updated");
            }
        }
        catch(err)
        {
            console.log(err);
        }

    }
    return (
        <div className='mt-4'>
            <form onSubmit={submitHandler}>

                <input
                    type="text"
                    placeholder='User-Id'
                    className='rounded-lg px-1 mb-2'
                    name='id'
                    required='true'
                    onChange={changeHandler}
                    value={newDetail.id} /><br />


                <input
                    type="text"
                    placeholder='First Name'
                    className='rounded-lg px-1 mb-2'
                    name='firstName'
                    required='true'
                    onChange={changeHandler}
                    value={newDetail.firstName} /><br />

                <input
                    type="text"
                    placeholder='Last Name'
                    className='rounded-lg px-1 mb-2'
                    name='lastName'
                    onChange={changeHandler}
                    value={newDetail.lastName} /><br />

                <input
                    type="email"
                    placeholder='Email'
                    className='rounded-lg px-1 mb-2'
                    name='email'
                    required='true'
                    
                    value={newDetail.email} /><br />

                <button type='submit'
                    className='bg-gray-50 rounded-lg p-2'>UpdateUser</button>
            </form>
        </div>
    )
}

export default EditUser