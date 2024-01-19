import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
        <nav className='bg-gray-800 p-5'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <NavLink to={'/dashboard'}>
                    <div className='text-white font-bold text-2xl hover:scale-90'>SPLIT</div>
                </NavLink>

                <div className='text-white flex items-center justify-center space-x-9 md:ml-4 md:mr-10'>
                    <NavLink to={'/users'} className='hover:scale-110' >
                        Users
                    </NavLink>

                    <NavLink to={'/dashboard'} className='hover:scale-110'>
                        History
                    </NavLink>

                    <NavLink to={'/dashboard'} className='hover:scale-110'>
                        Messages
                    </NavLink>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar