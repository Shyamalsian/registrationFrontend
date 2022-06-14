import React, { useState, useRef, useEffect } from 'react'
import './imageUpload.css'
import axios from 'axios'
import ShowRegistration from './ShowRegistration'

function Register() {
    const [detail, setDetail] = useState({ id: '', firstName: '', lastName: '', email: '' })
    const [data,setData] = useState([])
    const filePickerRef = useRef()
    
    const changeHandler = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
        // console.log(detail)
    }    

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(detail)
        // console.log("working")
        let responce
        try {
            console.log(detail)
             responce = await axios.post('http://localhost:5000/app/addUser'
                ,{          detail                
            }
            )
            console.log("Checklist")
            console.log(responce)
            if(responce)
            {
                setData((prevState=>[...prevState, detail]))
            }
            
        }
        catch (err) {
            console.log(err)
            console.log("Errorr")
        }
        
    }

    return (
        <div className='mt-4 flex flex-col justify-center'>
            <form onSubmit={submitHandler}>


                
                <input
                    type="text"
                    placeholder='User-Id'
                    className='rounded-lg px-1 mb-2'
                    name='id'
                    required='true'
                    onChange={changeHandler} /><br />


                <input
                    type="text"
                    placeholder='First Name'
                    className='rounded-lg px-1 mb-2'
                    name='firstName'
                    required='true'
                    onChange={changeHandler} /><br />

                <input
                    type="text"
                    placeholder='Last Name'
                    className='rounded-lg px-1 mb-2'
                    name='lastName'
                    onChange={changeHandler} /><br />

                <input
                    type="email"
                    placeholder='Email'
                    className='rounded-lg px-1 mb-2'
                    name='email'
                    required='true'
                    onChange={changeHandler} /><br />
                
                

                <button
                    type='submit'
                    className='bg-gray-50 rounded-lg p-2'>Register</button>           
                

            </form>
            <ShowRegistration users={data}/>
        </div>
    )
}

export default Register