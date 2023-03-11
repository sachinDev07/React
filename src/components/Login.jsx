import { Formik, ErrorMessage} from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object({
    name : yup.string()
        .required("name is a required field"),
    password: yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

const Login = () => {

    const navigate = useNavigate();

    function handleNavigate(values) {
      alert(values);
      setTimeout(() => {
        navigate(-1);
      }, 0);
    }
    
    return (
        <div className="flex justify-center items-center h-screen bg-blue-200" >
            <Formik
                validationSchema = {validationSchema}
                initialValues={{
                    name : '',
                    password : '',
                }} 
                onSubmit = {(values) => {
                    handleNavigate(JSON.stringify(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} >
                        <div className=" bg-white rounded-md px-5 py-4 ">
                            <div className="flex flex-col justify-center items-center ">
                                <div className="mt-2 font-bold text-2xl text-black">Login Page</div>
                                <div className="flex flex-col justify-center items-center mt-4">
                                    <input 
                                        className="mt-2 border-b-slate-400 border-b-2 outline-none text-base font-normal"  
                                        type="text" 
                                        name="name" 
                                        placeholder="Username"
                                        autoComplete="off"
                                        id="name" 
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                        {errors.name && touched.name ? (<p className="text-xs text-red-400">{errors.name}</p>) : null}
                                    <input 
                                        className="mt-5 border-b-slate-400 border-b-2 outline-none text-base font-normal"  
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        autoComplete="off"
                                        id="password" 
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    /> 
                                        {errors.password && touched.password ? (<p className="text-xs text-red-400">{errors.password}</p>) : null}
                                </div>
                            </div>
                                <button className="mt-4 text-sm font-normal text-gray-500">Forget password ?</button>
                                <div className="flex flex-col justify-between items-center mt-6">
                                    <button 
                                        type="submit" 
                                        className="py-2 font-bold text-lg text-white bg-blue-500 hover:bg-blue-700 transition duration-200 ease-linear w-full rounded-full">Login
                                    </button>
                                    <p className="mt-8 text-gray-500">Not a member? <button type="button" className="text-blue-400">Sign up</button></p>
                                </div>
                        </div>
                    </form>
                )}

                
            </Formik>
            
        </div>
    )
}

export default Login;