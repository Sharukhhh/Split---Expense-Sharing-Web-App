import React from 'react'
import InputField from '../input-field/InputField'
import { useFormik } from 'formik'
import { loginSchemaValidation } from '../../form-valdiation/validateSchema'
import { useDispatch } from 'react-redux'
import { setUserDataToStore } from '../../redux/slices/userAuthSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { addToCollection } from '../../redux/slices/userCollectionSlice'

const Signin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            name : '', email : '',
            mobile : ''
        },
        validationSchema : loginSchemaValidation,
        onSubmit :  (values ) => {
            console.log(values )
            const userData = values;
            dispatch(setUserDataToStore(userData));
            dispatch(addToCollection(userData));

            toast.success('Login Successfull');

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        }
    })
  return (
    <>
        <div className='bg-gradient-to-bl from-[#2193b0] to-[#6dd5ed] pb-28'>
            <div className='backdrop-blur-md border-solid flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
                        Sign In To Expense Sharing App
                    </h2>
                </div>

                <div className='border-2 rounded-md bg-[#fafafa] bg-opacity-80 p-5 shadow-lg shadow-black mt-10 sm:mx-auto sm:w-full sm:max-w-md'>
                    <form className='space-y-6' onSubmit={formik.handleSubmit}>
                        <InputField
                        id={'name'}
                        type={'text'}
                        placeholder={'Enter your name'}
                        name={'name'}
                        value={formik.values.name}
                        onChangeValue={formik.handleChange}
                        onblurValue={formik.handleBlur}
                        touchErr={formik.touched.name}
                        manualErr={formik.errors.name}
                        />

                        <InputField
                        id={'email'}
                        type={'email'}
                        placeholder={'Enter Email ID'}
                        name={'email'}
                        value={formik.values.email}
                        onChangeValue={formik.handleChange}
                        onblurValue={formik.handleBlur}
                        touchErr={formik.touched.email}
                        manualErr={formik.errors.email}
                        />

                        <InputField
                        id={'mobile'}
                        type={'text'}
                        placeholder={'Enter Phone Number'}
                        name={'mobile'}
                        value={formik.values.mobile}
                        onChangeValue={formik.handleChange}
                        onblurValue={formik.handleBlur}
                        touchErr={formik.touched.mobile}
                        manualErr={formik.errors.mobile}
                        />

                        <div>
                            <button type='submit' className='flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold 
                            leading-6 text-white shadow-sm bg-[#0575E6] hover:bg-[#021B79] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signin