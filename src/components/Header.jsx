import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../config";
import logo from ".././assests/images/logoImg.png";


const Title = () => (
    <Link to="/" className="title" id="title" >
      <img className="logo" src={logo} alt="logo" />
    </Link>
);


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // const isOnline = useOnline();

    return (
      <div className="header">
        <Title /> 
        <div className="nav-items">
          <ul>
            <li><Link className="list-item" to="/" > Home </Link> </li>
            <li><Link className="list-item" to="/about" > About </Link></li>
            <li><Link className="list-item" to="/contact" > Contact </Link></li>
            <li><Link className="list-item" to="/cart" > Cart </Link></li>
            <li><Link className="list-item" to="/instamart">Instamart</Link></li>
            {/* <li>{isOnline ? "✅" : "🔴"}</li> */}
            <li>
                {
                  isLoggedIn 
                  ? 
                    <button 
                            className="btn"
                            onClick={() => setIsLoggedIn(false)} > Logout 
                    </button> 
                  : 
                    <button 
                            className="btn"
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