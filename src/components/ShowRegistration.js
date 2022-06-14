import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ShowRegister.css'
function ShowRegistration(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(props.users)
    }, [props.users])

    let arr
    if (props.users) {
        arr = props.users.map((data, key) => {
            return (
                
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                    </tr>
                


            )
        })
    }
    return (
        <div className='mt-5'>
            <table id='customers'>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                </tr>
                {arr}
            </table>

        </div>
    )
}

export default ShowRegistration