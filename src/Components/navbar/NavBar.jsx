import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const loggedUser = useSelector((state) => state.login.userData);
    let notifications = useSelector((state) => state.messages.notifications);
    notifications = notifications?.slice(1)?.filter((data) => data?.recievers?.includes(loggedUser?.name));

    let histories = useSelector((state) => state.history.history);
    histories = histories?.slice(1)?.filter((data) => data?.createdBy === loggedUser?.name);

  return (
    <>
        <nav className='bg-gray-800 p-5'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <NavLink to={'/dashboard'}>
                    <div className='text-white font-bold text-2xl hover:scale-90'>SPLIT</div>
                </NavLink>

                <div className='text-white flex items-center justify-center space-x-9 md:ml-4 md:mr-10'>
                    <NavLink to={'/users'} className='' >
                        Users
                    </NavLink>

                    <NavLink to={'/history'} className='relative'>
                        History
                        {histories?.length !== 0 && (
                            <span className='absolute -top-3 -right-2 bg-red-500 font-bold rounded text-white flex items-center justify-center h-5 w-5 text-xs'>
                                {histories?.length}
                            </span>
                        )}
                    </NavLink>

                    <NavLink to={'/messages'} className='relative'>
                        Messages
                        {notifications?.length !== 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 font-bold rounded-full text-white flex items-center justify-center h-5 w-5 text-xs'>
                                {notifications?.length}
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar