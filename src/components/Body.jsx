import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [fiteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFilteredRestaurants(resList);
    }, 1000);
  }, []);

  console.log("Body Rendered");
//whenever state variables changes ,react triggers a reconcilation cycle(re-render the component)

  return fiteredRestaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button 
          className="search-btn"
          onClick={() => {
            const filteredList = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >Search</button>
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {fiteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
