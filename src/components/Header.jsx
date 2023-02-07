import { useState } from "react";
import { Link } from "react-router-dom";
import logo from ".././assests/images/logoImg.png";
import Shimmer from "./Shimmer";
import useAllRestaurents from "../hooks/useAllRestaurents";
import { useSelector } from "react-redux";
import CartImg from '.././assests/images/cart.png';
import useOnline from "../hooks/useOnline";

const Title = () => (
    <Link to="/" className="w-48" id="title" >
      <img className="transition-all duration-300 ease-in-out hover:scale-105" src={logo} alt="logo" />
    </Link>
);


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { loading } = useAllRestaurents();

  const  isOnline  = useOnline();

  const cartItems = useSelector(store => store.cart.items);


return loading ? (
    <Shimmer/>
  ) : (
      <div className=" flex fixed left-0 top-0 w-full z-50 py-4 px-44 justify-between items-center text-center bg-gray-100 shadow-lg">
        <Title /> 
        <div className="nav-items">
          <ul className="flex gap-4 text-xl text-black items-center text-center">
            <li>
              {
                 isOnline ? "✅": "🔴" 
              }
            </li>
            <li>
              <Link className="py-2 px-3 hover:text-white hover:rounded-sm hover:bg-blue-700 focus:bg-blue-700 focus:text-white transition-all ease-in duration-300 m-auto text-center block" to="/" > Home </Link>
            </li>
            <li>
              <Link className="py-2 px-3 hover:text-white hover:rounded-sm hover:bg-blue-700 focus:bg-blue-700 focus:text-white transition-all ease-in duration-300 m-auto text-center block" to="/about" > About </Link>
            </li>
            <li>
              <Link className="py-2 px-3 hover:text-white hover:rounded-sm hover:bg-blue-700 focus:bg-blue-700 focus:text-white transition-all ease-in duration-300 m-auto text-center block" to="/contact" > Contact </Link>
            </li>
            <li>
              <Link className="py-2 px-3 hover:text-white hover:rounded-sm hover:bg-blue-700 focus:bg-blue-700 focus:text-white transition-all ease-in duration-300 m-auto text-center block" to="/instamart">Instamart</Link>
            </li>
            <li className="relative">
              <Link className="py-2 px-3 hover:text-white hover:rounded-sm focus:text-white transition-all ease-in duration-300 m-auto text-center block" title="cart" to="/cart" > 
              <img src={CartImg} alt="cart" className="w-10 h-10 " />
              {
                cartItems.length <= 9 ? (<span className="absolute top-[22px] left-[28px] text-bold text-base text-white">{cartItems.length}</span>)
                : (<span className="absolute top-[22px] left-[23px] text-bold text-base text-white">{cartItems.length}</span>)
              }
              </Link>
            </li>
            <li>
                {
                  isLoggedIn 
                  ? 
                    <button 
                            className=" min-w-[113px] px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => setIsLoggedIn(false)} > Logout 
                    </button> 
                  : 
                    <button 
                            className="min-w-[113px] px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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