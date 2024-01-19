import React, { useState } from 'react'
import NavBar from '../Components/navbar/NavBar'
import FormHeader from '../Components/titles/FormHeader'
import InputField from '../Components/input-field/InputField'
import SelectField from '../Components/input-field/SelectField'
import { useSelector } from 'react-redux'
import UserDisplayCard from '../Components/cards/UserDisplayCard'

const Split = () => {
    const [selectedUsers , setSelectedUsers] = useState([]);
    const [selectedUserId , setSelectedUserId] = useState('');

    const loggedUser = useSelector((state) => state.login.userData);
    const usersCollection = useSelector((state) => state.collection.userCollection);



    const handleUserSelect = (e) => {
        setSelectedUserId(e.target.value)
    }

    const choosedUser = usersCollection.find((user) => user.email === selectedUserId);

    // to add user if not in list to split expense
    const handleAddUser = () => {
        if (choosedUser&& !selectedUsers.find((user) => user.email === choosedUser.email)) {
            setSelectedUsers((prevUsers) => [...prevUsers, choosedUser]);
        }
    };

    // to remove user from the list selected to split expense
    const removeUser = (email) => {
        setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    }

  return (
    <>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#8e9eab] to-[#eef2f3]'>
            <div className='backdrop-blur-md border-solid flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8'>
                <FormHeader title={'Split An Expense'}/>

                <div className='border-2 rounded-md bg-[#fafafa] bg-opacity-80 p-5 shadow-lg shadow-black mt-10 sm:mx-auto sm:w-full sm:max-w-xl'>
                    <form className='space-y-6'>

                        <InputField
                        placeholder={'Subject for split'}
                        name={'subject'}
                        type={'text'}
                        id={'subject'}
                        />

                        <InputField
                        placeholder={'Total Amount'}
                        name={'totalAmount'}
                        type={'text'}
                        id={'totalAmount'}
                        />

                        <div className='flex justify-around space-x-2'>
                            <SelectField
                            name={'selectedUser'}
                            id={'selectedUser'}
                            options={usersCollection.filter((user) => user?.email !== loggedUser?.email)}
                            onChangeValue={handleUserSelect}
                            value={selectedUserId}
                            />

                            <button onClick={handleAddUser} type='button'
                            className='bg-[#0575E6] text-white px-4 py-2 hover:scale-105 hover:bg-[#021B79]'
                            >
                                Add User
                            </button>
                        </div>    
                        
                        {selectedUsers.length > 0 && (
                            selectedUsers?.map((user) => (
                                <UserDisplayCard
                                user={user} 
                                key={user?.email}
                                onRemoveUser={removeUser}
                                />
                            ))
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Split



                        {/* <div className='flex space-x-4'> */}
                        {/* <div className='w-1/2'></div> */}
                        {/* </div> */}