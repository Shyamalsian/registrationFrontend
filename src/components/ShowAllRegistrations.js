import React, { useEffect, useState } from 'react'
import './ShowRegister.css'
import axios from 'axios'
function ShowAllRegistrations() {
    const [allData, setData] = useState([])
    let arr
    useEffect(() => {
        // let responce

        const getUsers = async (res, req, next) => {
            try {
                const responce = await axios('https://internregister.herokuapp.com/app/getAllUser', {
                    method: 'GET'
                })
                console.log(responce.data)
                setData(responce.data)
                console.log(allData)
            }

            catch (err) {
                console.log(err)
                console.log("error showing all users")
            }
        }
        getUsers();

    }, [])


    return (

        <div className='mt-3'>
            <table id='customers'>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                </tr>
                {allData?.map((data, key) => (


                    <tr>
                        <td>{data.id}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                    </tr>




                ))
                }
            </table>



            {/* {JSON.stringify(allData)} */}

        </div>
    )
}

export default ShowAllRegistrations