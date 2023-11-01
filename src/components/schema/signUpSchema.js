import * as Yup from 'yup';

export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please provide your email"),
    password:Yup.string().min(6).required("please provide your password"),
    confirmpassword:Yup.string().required().oneOf([Yup.ref('password'),null],'password must match')
});