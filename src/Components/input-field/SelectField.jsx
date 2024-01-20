import React from 'react'

const SelectField = ({name , id , value, onChangeValue , options }) => {
  return (
    <>
        <div className='mt-2'>
            <select
            name={name}
            value={value}
            id={id}
            onChange={onChangeValue}
            className='block w-full px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            >
                <option value={''} disabled>Select a user</option>

                {options?.map((user) => (
                    <option key={user?.email} value={user?.email}>
                        {user?.name}
                    </option>
                ))}
            </select>
        </div>
    </>
  )
}

export default SelectField