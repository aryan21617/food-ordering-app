import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images.png"; 

/**
 * Header 
 *  - logo
 *  - nav items 
 * Body
 *  - search bar
 *  - restaurant Container
 *    - restaurant Card
 * Footer
 *  - links
 *  - copyright info
 *  - contact info
 *  - address
 */

const Header = () => {
  return ( 
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.shutterstock.com/image-vector/burger-logo-design-vector-template-600nw-2490425057.jpg" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const AppLayout = () =>  {
  return (
    <div className="app">
      <Header />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);