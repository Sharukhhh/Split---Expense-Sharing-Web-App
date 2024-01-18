import React , {useState} from 'react'
import SideBar from '../Components/sidebar/SideBar';
import { IoIosArrowDropleft } from "react-icons/io";

const Dashboard = () => {
    const [sideBar, setSideBar] = useState(true);

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    }
  return (
    <>
    <div className={`flex ${sideBar ? 'overflow-hidden' : ''}`}>
        <div className={`w-3/5 md:w-4/5 transition-all ease-in-out transform ${sideBar ? 'translate-x-0' : '-translate-x-full'}`}>
            <SideBar />
        </div>

        <div className='flex-grow'>
            <button title='Control Sidebar' onClick={toggleSideBar} className='fixed right-0 top-0 p-2 rounded-full shadow-lg bg-gray-800 bg-opacity-90 text-white hover:scale-90'>
                <IoIosArrowDropleft size={25}/>
            </button>
        </div>
    </div>
    </>
  )
}

export default Dashboard