import React from 'react';


const InfoCard = ({datas , isMessage}) => {
    console.log(datas)
  return (
    <>
        {datas?.length > 0 ? (
            datas?.map((data , index) => (
                <div key={index} className='flex items-start max-w-5xl mx-auto p-4 mt-10 bg-gradient-to-tl from-[#9facfc] to-[#e9eaec] border rounded shadow-md'>
                    <div className='ml-4'>
                        <p className='text-gray-900 text-xl font-semibold'>{isMessage ? data?.message : data?.info}</p>
                        <p className='text-gray-600 text-sm font-medium'>{isMessage && data?.subMessage}</p>
                        <p className=''>Total Amount: {!isMessage && data?.amount}</p>
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