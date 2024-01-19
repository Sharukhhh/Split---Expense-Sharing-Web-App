import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/userAuthSlice';
import toast from 'react-hot-toast';

const Intro = () => {
    const loggedUser = useSelector((state) => state.login.userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const makeLogout = () => {
        dispatch(logout());
        toast.success('Logged Out Successfully');
    }

    const navigateToSplit = () => {
        navigate('/calculate');
    }
  return (
    <>
        <div className='container mx-auto max-w-3xl mt-14 border text-center border-black flex flex-col items-center rounded shadow-black p-4'>
            <h2 className='text-2xl font-bold mb-4'>Welcome, {loggedUser?.name}</h2>

            <div className='flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
                <button onClick={navigateToSplit} className='bg-[#0575E6] text-white px-4 py-2 hover:scale-105 hover:bg-[#021B79]'>
                    Split an expense
                </button>

                <button onClick={makeLogout} className='bg-[#0575E6] text-white px-4 py-2 hover:scale-105 hover:bg-[#021B79]'>
                    Logout
                </button>
            </div>
        </div>
    </>
  )
}

export default Intro