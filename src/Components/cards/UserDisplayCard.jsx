import React from 'react'

const UserDisplayCard = ({user , onRemoveUser}) => {
  return (
    <>
        <div className='bg-black bg-opacity-40 border rounded-md p-2 mt-2 flex items-center'>
            <span className='mr-2'>{user?.name}</span>
            <button onClick={() => onRemoveUser(user?.email)} className='text-red-500'>X</button>
        </div>
    </>
  )
}

export default UserDisplayCard