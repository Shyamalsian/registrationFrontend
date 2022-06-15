import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import EditUser from './EditUser'

function EditRegistration() {
    let Navigate = useNavigate()
    const [email, setEmail] = useState([])
    const [user, setUser] = useState({})
    const [check, setcheck] = useState(false)

    const changeHandler = (e) => {
        setEmail(e.target.value)
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        let responce
        try {
            responce = await axios.post('https://internregister.herokuapp.com/registrationFrontend/checkEmail', { email })
            console.log(responce.data)
            setUser(responce.data)
            if (responce) {
                setcheck(true)
                // Navigate("/editUser")
            }
            
        }
        catch (err) {
            console.log(err)
            if (!responce){
                console.log("Email not found")
                alert("Email not found")
                setcheck(false)
            }
        }
    }    
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder='Email'
                    className='rounded-lg px-1 mb-2 mt-4'
                    name='email'
                    required='true'
                    value={email}
                    onChange={changeHandler} /><br />
                <button
                    type='submit'
                    className='bg-gray-50 rounded-lg p-2'>Edit User</button>
            </form>
            {
                check && <EditUser  detail={user}/>
            }
            
        </div>
    )
}

export default EditRegistration