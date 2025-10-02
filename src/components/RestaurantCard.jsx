import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={CDN_URL+resData.info.cloudinaryImageId} alt="restaurant-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>30 mins</h4>
      <h4>{costForTwo}</h4>
      <h4>50% OFF up to ₹100</h4>
    </div>
  )
}

export default RestaurantCard;