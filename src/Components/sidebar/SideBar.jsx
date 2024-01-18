import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SideBar = () => {

    const loggedUser = useSelector((state) => state.login.userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');

        toast.success('Logout Success');
    }

  return (
    <>
            <div className='bg-gray-800 text-white h-screen w-5/6 md:w-1/3 p-4 text-center shadow-lg flex flex-col overflow-y-hidden'>

                <div className='flex justify-between'>
                    <div className='flex justify-start'>
                        <span className='text-2xl font-bold mb-2 mr-2'>
                            SPLIT
                        </span>
                    </div>
                    <button onClick={handleLogout} className='px-2 py-1 bg-white text-black rounded-sm shadow-md font-medium hover:scale-90'>
                        Logout
                    </button>
                </div>

                <hr className='border-white my-2'/>

                <div className='flex items-center my-4'>
                    <img src="https://microbiology.ucr.edu/sites/default/files/styles/form_preview/public/blank-profile-pic.png?itok=4teBBoet" alt="" 
                    className='rounded-full mr-2 object-cover h-14 w-14'
                    />
                    <div className='text-left'>
                        <div className='font-medium'>{loggedUser?.name}</div>
                        <p className='text-sm'>{loggedUser?.email}</p>
                    </div>
                </div>

                <hr className='border-white my-2'/>

                <div className='flex flex-col'>
                    <div className='bg-gray-700 p-2 my-2 rounded'>
                        Mini Card 1
                    </div>
                </div>
            </div>
    </>
  )
}

export default SideBar