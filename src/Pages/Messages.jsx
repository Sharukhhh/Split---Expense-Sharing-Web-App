import React, { useState } from 'react'
import NavBar from '../Components/navbar/NavBar'
import { useSelector } from 'react-redux'
import InfoCard from '../Components/cards/InfoCard';

const Messages = () => {

    const loggedUser = useSelector((state) => state.login.userData);
    let notifications = useSelector((state) => state.messages.notifications);
    const expenses = useSelector((state) => state.split.expenses);

    notifications = notifications?.slice(1)?.filter((message) => {
      return message?.recievers?.some((reciever) => reciever === loggedUser?.name)
    });

    const totalBalanceDue = expenses.reduce((total , expense) => {
      const userBalance = expense.selectedUsers?.find((user) => user?.name === loggedUser?.name)?.balance || 0;
      return total + userBalance;
    }, 0)

    const userInvolvedExpenses = expenses.filter((expense) => {
      return expense?.selectedUsers?.some((user) => user?.name === loggedUser?.name);
    });

  return (
    <>
        <NavBar/>

        <div className='flex flex-row justify-center mt-10 md:justify-start md:ml-10'>
          <div className='px-5 py-5 bg-red-500 text-md rounded-lg shadow-black shadow-md font-bold text-white cursor-pointer'>
            Total Balance Due: {totalBalanceDue}
          </div>
        </div>

        <div className='flex flex-row justify-center mt-10 md:justify-start md:ml-10'>
          <div className='border-2 border-dashed border-gray-900 p-6 text-md'>
            {userInvolvedExpenses?.map((expense , index) => (
              <p key={index} className='font-semibold font-mono'>
                Subject : {expense?.subject},  Balance: {expense?.selectedUsers?.find((user) => user?.name === loggedUser?.name)?.balance || 0}
              </p>
            ))}
          </div>
        </div>

        <InfoCard datas={notifications} isMessage={true}/>
    </>
  )
}

export default Messages