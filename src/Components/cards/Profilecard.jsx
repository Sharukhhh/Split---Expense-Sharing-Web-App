import React from 'react'

const Profilecard = ({user}) => {
  return (
    <>
        <div className='bg-gray-200 shadow-md p-4 mb-4 md:mb-0 md:ml-16 max-w-3xl'>
            <div className='flex items-center mb-4'>
                <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mr-4'>
                    <img src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg" alt=""
                    className='object-cover w-full h-full'
                    />
                </div>
                <div>
                    <h2 className='text-lg lg:text-xl font-semibold'>{user?.name}</h2>
                    <p className='text-gray-500'>{user?.email}</p>
                    <p className='text-gray-500'>{user?.mobile}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profilecard