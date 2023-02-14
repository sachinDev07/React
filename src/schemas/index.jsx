import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please enter your name"),
    email : Yup.string().email().required("Please enter valid email address"),
    password : Yup.string().min(6).required("Please enter valid password"),
    query : Yup.string().min(5).required("Please enter a feedback"),
});