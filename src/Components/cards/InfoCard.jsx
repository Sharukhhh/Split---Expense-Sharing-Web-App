import React from 'react';


const InfoCard = ({datas , isMessage , expenses}) => {

  return (
    <>
        {datas?.length > 0 ? (
            datas?.slice().reverse().map((data , index) => (
                <div key={index} className={`flex items-start max-w-5xl mx-auto p-4 mt-10 bg-gradient-to-tl from-[#9facfc] to-[#e9eaec] border rounded shadow-md`}>
                    <div className='ml-4'>
                        <p className='text-gray-900 my-3 text-xl font-semibold'>{isMessage ? data?.message : data?.info}</p>
                        {!isMessage && <hr className='border mb-2 border-black border-opacity-15'/>}
                        <p className='text-gray-600 text-sm font-medium'>{isMessage && data?.subMessage}</p>
                        <p className=''>Total Amount: ₹ {data?.amount}</p>

                        {!isMessage && (
                            <div className='mt-2'>
                            {expenses?.filter((expense) => expense?.createdBy === data?.createdBy)
                            .filter((expense) => expense.totalAmount === data?.amount)
                                .slice().reverse().map((expense, expenseIndex) => (
                                    <div key={expenseIndex}>
                                        <p className='font-medium'>Subject: {expense.subject}</p>
                                        {expense?.selectedUsers.map((user, userIndex) => (
                                            <p className='font-medium' key={userIndex}>{user?.name}: ₹ {user?.balance}</p>
                                        ))}
                                    </div>
                                ))
                            }
                            </div>
                        )}
                    </div>
                    <span className='flex items-center ml-auto'>
                        <p className='font-normal opacity-50'>{data?.createdAt}</p>
                    </span>
                </div>
            ))
        ): (
            <p className='text-center text-2xl font-medium mx-auto my-20'>
                {isMessage ? 'No Messages to Show!!' : 'No Histories to Show!!'}
            </p>
        )}
    </>
  )
}

export default InfoCard