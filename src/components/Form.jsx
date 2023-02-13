

const Form = () => {
  return (
    <form className="px-44 py-2 ">
        <div className="max-h-[602px] border-2 border-grey border-solid rounded px-36">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center w-[450px] py-8 max-h-[602px]">
                    <h1 className="font-bold text-3xl">Personal Details</h1>
                    <div className="mt-6">
                        <label 
                            className="block text-bold text-sm text-gray-400 " htmlFor="">
                            Full Name 
                        </label>
                        <input 
                            className="mt-2 border-b-slate-400 border-b-2 outline-none text-xl font-medium"  
                            type="text" 
                            name="" 
                            id="" 
                        />
                        <br/>
                    </div>
                    <div className="mt-3">
                        <label 
                            className="block text-bold text-sm text-gray-400 " htmlFor=""> 
                            Email 
                        </label>
                        <input
                            className="mt-2 text-xl font-medium outline-none border-b-slate-400 border-b-2"
                            type="email" 
                            name="" 
                            id="" 
                        />
                    </div>
                    <div className="mt-8">
                        <textarea 
                            className="w-72 max-h-44 p-2 outline-none font-medium text-base text-gray-600 border-2 border-gray-500 "
                            rows={5}
                            type="text"
                            name="" 
                            id="" 
                            placeholder="what do you want to talk about?" 
                         />
                    </div>
                    <button 
                        className="mt-8 py-4 px-3 w-36 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white text-xl border-2 border-red-100 rounded-md font-semibold text-center" 
                        type="submit" >
                        Send Query
                    </button>
                </div>
                <div className="w-[450px] h-[600px] flex gap-y-12 flex-col justify-center bg-gray-200 p-10">
                    <h2 className="text-7xl text-blue-800 font-bold">Thank You.</h2>
                    <h3 className="text-4xl text-blue-800 font-semibold">We will be in touch shortly!</h3>
                </div>             
            </div>         
        </div>
    </form>
  );
};

export default Form;
