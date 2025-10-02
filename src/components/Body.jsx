import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        {
          resList.map((restaurant) => (
            //not using key(not acceptable ) <<<<< using index as key (not recommended) <<<<<  using unique id as key (best way)
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  )
}

export default Body;