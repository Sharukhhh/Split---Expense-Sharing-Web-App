import * as yup from 'yup';


export const loginSchemaValidation = yup.object({
    name : yup.string().required('Name is Required'),
    email : yup.string().email('Invalid Email').required('Email is Required'),
    mobile : yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is Required'),
})