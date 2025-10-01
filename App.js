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
 *      - image
 *      - name
 *      - cusines
 *      - rating  
 *      - timing
 *      - offers
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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src="https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg" alt="restaurant-logo" />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Mughlai</h4>
      <h4>⭐ 4.2</h4>
      <h4>30 mins</h4>
      <h4>₹500 for one</h4>
      <h4>50% OFF up to ₹100</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />  
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <h4>© 2024 Pet-Pooja</h4>
    </div>
  )
}

const AppLayout = () =>  {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);