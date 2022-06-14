import React from 'react'
import './Navbar.css'
import {Link}  from 'react-router-dom'
function Navbar() {
  return (
    <div className='container flex flex-row content-center'>
        <div>
        <h1 className='text-3xl logo'>Registration </h1>      
        </div>
        <div className='ml-8 mt-1'>
            <Link to="/"><button>Home</button></Link>
        </div>
        <div className='ml-8 mt-1'>
            <Link to="/allUsers"><button>All-Users</button></Link>
        </div>
        <div className='ml-8 mt-1'>
            <Link to="/searchEmail"><button>Edit-User</button></Link>
        </div>
    </div>
  )
}

export default Navbar