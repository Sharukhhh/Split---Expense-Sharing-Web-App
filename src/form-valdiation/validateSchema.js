import * as yup from 'yup';


export const loginSchemaValidation = yup.object({
    name : yup.string().required('Name is Required'),
    email : yup.string().email('Invalid Email').required('Email is Required'),
    mobile : yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is Required'),
})


export const splitSchemaValidation = yup.object({
    subject : yup.string('Invalid Entry').required('Subject is Required'),
    totalAmount : yup.number().integer('Invalid Data').positive('Invalid Entry').required('Total Amount is required'),
    paidAmount : yup.number().integer('Invalid Data').positive('Invalid Entry').required('Paid Amount is required'),
    balance : yup.number().integer('Invalid Data').positive('Invalid Entry').required('Total Amount is required')
})