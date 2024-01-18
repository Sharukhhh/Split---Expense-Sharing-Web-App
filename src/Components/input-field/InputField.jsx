import React from 'react'

const InputField = ({type , name , placeholder, id, value , onChangeValue , onblurValue , touchErr , manualErr}) => {
  return (
    <div>
        <div className='mt-2'>
            <input type={type} name={name} id={id} placeholder={placeholder} 
            value={value} 
            onChange={onChangeValue}
            onBlur={onblurValue}
            required
            className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />

            {touchErr && manualErr && (
                <p className='text-red-500 text-left'>{manualErr}</p>
            )}
        </div>
    </div>
  )
}

export default InputField