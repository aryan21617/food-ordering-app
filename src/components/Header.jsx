import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [buttonName , setbuttonName] = useState("Login");

  return ( 
    <div className="header">
      <div className="logo-container">
        <Link to = "/"><img className="logo" src={LOGO} alt="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li> 
            <Link to="/">Home</Link>
          </li>
          <li> 
            <Link to="/about">About Us</Link>
          </li>
          <li> 
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-button"
          onClick={() => {
            buttonName === "Login" ? setbuttonName("Logout") : setbuttonName("Login");
          }}
          >{buttonName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;