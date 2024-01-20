import * as yup from 'yup';


export const loginSchemaValidation = yup.object({
    name : yup.string().required('Name is Required'),
    email : yup.string().email('Invalid Email').required('Email is Required'),
    mobile : yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is Required'),
})


export const splitSchemaValidation = yup.object({
    subject : yup.string('Invalid Entry').required('Subject is Required'),
    totalAmount : yup.number().positive('Invalid Entry').required('Total Amount is required'),
})

export const formatDate = (dateData) => {
    const date = new Date(dateData);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}