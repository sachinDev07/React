import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const Form = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : "",
            query : "",
        },
        validationSchema : signUpSchema,
        onSubmit : (values, action) => {
            console.log(values);
            action.resetForm();
        },
    });

  return (
    <form className="px-44 py-2" onSubmit={handleSubmit}>
        <div className="max-h-[700px] border-2 border-grey border-solid rounded px-36">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center w-[450px] py-12 max-h-[700px]">
                    <h1 className="font-bold text-3xl">Personal Details</h1>
                    <div className="mt-6">
                        <label 
                            className="block text-bold text-sm text-gray-400 " htmlFor="full-name">
                            Full Name 
                        </label>
                        <input 
                            className="mt-2 border-b-slate-400 border-b-2 outline-none text-xl font-medium"  
                            type="text" 
                            name="name" 
                            autoComplete="off"
                            id="name" 
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (<p className=" text-red-400">{errors.name}</p>) : null}
                        <br/>
                    </div>
                    <div className="mt-4">
                        <label 
                            className="block text-bold text-sm text-gray-400 " htmlFor="email"> 
                            Email 
                        </label>
                        <input
                            className="mt-2 text-xl font-medium outline-none border-b-slate-400 border-b-2"
                            type="email" 
                            name="email" 
                            autoComplete="off"
                            id="email" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (<p className=" text-red-400">{errors.email}</p>) : null}
                    </div>
                    <div className="mt-4">
                        <label 
                            className="block text-bold text-sm text-gray-400 " htmlFor="password"> 
                            Password 
                        </label>
                        <input
                            className="mt-2 text-xl font-medium outline-none border-b-slate-400 border-b-2"
                            type="password" 
                            name="password" 
                            autoComplete="off"
                            id="password" 
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (<p className=" text-red-400">{errors.password}</p>) : null}
                    </div>
                    <div className="mt-8">
                        <textarea 
                            className="w-72 max-h-44 p-2 outline-none font-medium text-base text-gray-600 border-2 border-gray-500 "
                            rows={5}
                            type="text"
                            name="query" 
                            id="query" 
                            placeholder="what do you want to talk about?" 
                            value={values.query}
                            onChange={handleChange}
                            onBlur={handleBlur}
                         />
                         {errors.query && touched.query ? (<p className=" text-red-400">{errors.query}</p>) : null}
                    </div>
                    <button 
                        className="mt-8 py-4 px-3 w-36 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white text-xl border-2 border-red-100 rounded-md font-semibold text-center" 
                        type="submit" >
                        Send Query
                    </button>
                </div>
                <div className="w-[450px] h-[700px] flex gap-y-12 flex-col justify-center bg-gray-200 p-10">
                    <h2 className="text-7xl text-blue-800 font-bold">Thank You.</h2>
                    <h3 className="text-4xl text-blue-800 font-semibold">We will be in touch shortly!</h3>
                </div>             
            </div>         
        </div>
    </form>
  );
};

export default Form;
