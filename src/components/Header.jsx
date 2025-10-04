import { LOGO } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  const [buttonName , setbuttonName] = useState("Login");

  return ( 
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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