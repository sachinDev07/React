import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../config";
import logo from ".././assests/images/logoImg.png";


const Title = () => (
    <Link to="/" className="w-48" id="title" >
      <img className="logo" src={logo} alt="logo" />
    </Link>
);


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // const isOnline = useOnline();

    return (
      <div className=" flex fixed left-0 top-0 w-full z-50 py-4 px-44 justify-between content-center bg-gray-100 shadow-lg">
        <Title /> 
        <div className="nav-items">
          <ul className="flex gap-4 text-xl  text-black ">
            <li><Link className="p-2 hover:text-white hover:rounded-md hover:bg-blue-600 transition-all ease-in duration-300 m-auto text-center block" to="/" > Home </Link> </li>
            <li><Link className="p-2 hover:text-white hover:rounded-md hover:bg-blue-600 transition-all ease-in duration-300 m-auto text-center block" to="/about" > About </Link></li>
            <li><Link className="p-2 hover:text-white hover:rounded-md hover:bg-blue-600 transition-all ease-in duration-300 m-auto text-center block" to="/contact" > Contact </Link></li>
            <li><Link className="p-2 hover:text-white hover:rounded-md hover:bg-blue-600 transition-all ease-in duration-300 m-auto text-center block" to="/cart" > Cart </Link></li>
            <li><Link className="p-2 hover:text-white hover:rounded-md hover:bg-blue-600 transition-all ease-in duration-300 m-auto text-center block" to="/instamart">Instamart</Link></li>
            {/* <li>{isOnline ? "✅" : "🔴"}</li> */}
            <li>
                {
                  isLoggedIn 
                  ? 
                    <button 
                            className="w-24 py-2 px-4  bg-blue-700 text-white border-none rounded-sm font-medium"
                            onClick={() => setIsLoggedIn(false)} > Logout 
                    </button> 
                  : 
                    <button 
                            className="py-2 px-4  bg-black text-white border-none rounded-sm font-medium"
                            onClick={() => setIsLoggedIn(true)} > Login 
                    </button>
                }
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;