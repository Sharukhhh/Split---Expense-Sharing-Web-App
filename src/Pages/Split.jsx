import React, { useState } from 'react'
import NavBar from '../Components/navbar/NavBar'
import FormHeader from '../Components/titles/FormHeader'
import InputField from '../Components/input-field/InputField'
import SelectField from '../Components/input-field/SelectField'
import { useDispatch, useSelector } from 'react-redux'
import UserDisplayCard from '../Components/cards/UserDisplayCard'
import { useFormik } from 'formik'
import { splitSchemaValidation } from '../form-valdiation/validateSchema'
import toast from 'react-hot-toast'
import { addSplit } from '../redux/slices/splitSlice'
import { addNotification } from '../redux/slices/notificationSlice'
import { addToHistory } from '../redux/slices/historySlice'

const Split = () => {
    const [selectedUsers , setSelectedUsers] = useState([]);
    const [selectedUserId , setSelectedUserId] = useState('');

    const dispatch = useDispatch();

    const loggedUser = useSelector((state) => state.login.userData);
    const usersCollection = useSelector((state) => state.collection.userCollection);

    const handleUserSelect = (e) => {
        setSelectedUserId(e.target.value)
        console.log('id' , e.target.value)
    }

    const choosedUser = usersCollection.find((user) => user.email === selectedUserId);

    // to add user if not in list to split expense
    const handleAddUser = () => {
        if (choosedUser && !selectedUsers.find((user) => user.email === choosedUser.email)) {
            setSelectedUsers((prevUsers) => [...prevUsers, choosedUser]);
        }
    };

    // to remove user from the list selected to split expense
    const removeUser = (email) => {
        setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    }

    const formik = useFormik({
        initialValues : {
            subject: '',
            totalAmount : 0,
        },
        validationSchema : splitSchemaValidation,
        onSubmit: (values , {resetForm}) => {

            if(selectedUsers.length === 0){
                return toast.error('Select atleast one user');
            }

            const splitpayload = {
                createdBy : loggedUser?.name,
                subject : values.subject,
                totalAmount: values.totalAmount,
                selectedUsers : selectedUsers.map((user) => ({name : user?.name , balance: 0}))
            }

            const notificationpayload = {
                message : `${loggedUser?.name} has shared a expense split with you and ${selectedUsers.length} others based on ${values.subject}`,
                
                subMessage : `With you, ${selectedUsers.slice(0 , -1).map(user => user.name).join(', ')} and ${selectedUsers.slice(-1)[0].name}`,
                
                recievers : selectedUsers.map((user) => user.name),
            }

            const historyPayload = {
                info : `You created A Split with ${selectedUsers.slice(0 , -1).map(user => user.name).join(', ')} and ${selectedUsers.slice(-1)[0].name}`,
                amount : values.totalAmount,
                createdBy : loggedUser?.name
            }


            dispatch(addSplit(splitpayload));
            dispatch(addNotification(notificationpayload));
            dispatch(addToHistory(historyPayload));
            resetForm();

            return toast.success('Split Expense Updated');
        }
    })

  return (
    <>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#8e9eab] to-[#eef2f3] pb-32'>
            <div className='backdrop-blur-md border-solid flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8'>
                <FormHeader title={'Split An Expense'}/>

                <div className='border-2 rounded-md bg-[#fafafa] bg-opacity-80 p-5 shadow-lg shadow-black mt-10 sm:mx-auto sm:w-full sm:max-w-xl'>
                    <form className='space-y-6' onSubmit={formik.handleSubmit}>

                        <InputField
                        placeholder={'Subject for split'}
                        name={'subject'}
                        type={'text'}
                        id={'subject'}
                        value={formik.values.subject}
                        onChangeValue={formik.handleChange}
                        onblurValue={formik.handleBlur}
                        touchErr={formik.touched.subject}
                        manualErr={formik.errors.subject}
                        />

                        <InputField
                        placeholder={'Total Amount'}
                        name={'totalAmount'}
                        type={'text'}
                        id={'totalAmount'}
                        value={formik.values.totalAmount}
                        onChangeValue={formik.handleChange}
                        onblurValue={formik.handleBlur}
                        touchErr={formik.touched.totalAmount}
                        manualErr={formik.errors.totalAmount}
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

                        <div>
                            <button type='submit' className='flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold 
                            leading-6 text-white shadow-sm bg-[#0575E6] hover:bg-[#021B79] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Split Expense
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Split
