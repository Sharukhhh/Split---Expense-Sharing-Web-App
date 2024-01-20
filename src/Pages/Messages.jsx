import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import { useSelector } from 'react-redux'
import InfoCard from '../Components/cards/InfoCard';

const Messages = () => {

    const loggedUser = useSelector((state) => state.login.userData);
    let notifications = useSelector((state) => state.messages.notifications);

    notifications = notifications?.slice(1)?.filter((data) => data?.recievers?.includes(loggedUser?.name));
  return (
    <>
        <NavBar/>

        <InfoCard datas={notifications} isMessage={true}/>
    </>
  )
}

export default Messages