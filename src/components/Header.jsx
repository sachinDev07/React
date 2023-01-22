import { useState } from "react";
import { Link } from "react-router-dom";


const Title = () => (
    <Link to="/" className="title" id="title" key="h2">
      .foodCafe'
    </Link>
);


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
      <div className="header">
        <Title /> 
        <div className="nav-items">
          <ul>
            <li><Link className="list-item" to="/" > Home </Link> </li>
            <li><Link className="list-item" to="/about" > About </Link></li>
            <li><Link className="list-item" to="/contact" > Contact </Link></li>
            <li><Link className="list-item" to="/cart" > Cart </Link></li>
            <li>{isLoggedIn ? <button onClick={() => setIsLoggedIn(false)} > Logout
            </button> : <button onClick={() => setIsLoggedIn(true)} >Login</button>}</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;