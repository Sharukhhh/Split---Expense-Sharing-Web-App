import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import { useSelector } from 'react-redux'
import InfoCard from '../Components/cards/InfoCard';

const History = () => {

    const loggedUser = useSelector((state) => state.login.userData);
    let histories = useSelector((state) => state.history.history);
    const expenses = useSelector((state) => state.split.expenses);

    histories = histories?.slice(1)?.filter((data) => data?.createdBy === loggedUser?.name);

  return (
    <>
        <NavBar/>

        <InfoCard datas={histories} isMessage={false} expenses={expenses}/>

    </>
  )
}

export default History