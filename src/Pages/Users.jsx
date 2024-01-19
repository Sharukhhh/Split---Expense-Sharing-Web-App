import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../Components/navbar/NavBar';
import Profilecard from '../Components/cards/Profilecard';

const Users = () => {

    const loggedUser = useSelector((state) => state.login.userData); 
    let users = useSelector((state) => state.collection.userCollection);

    users = users.filter((user) => user?.email !== loggedUser?.email);

  return (
    <>
        <NavBar/>

        <div className='container mx-auto mt-8 grid grid-cols-1 gap-4'>
            {users?.map((user , index) => (
                <Profilecard user={user} key={index}/>
            ))}
        </div>
    </>
  )
}

export default Users