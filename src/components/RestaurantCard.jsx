import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo , sla , aggregatedDiscountInfoV3} = resData?.info;

  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={CDN_URL+resData.info.cloudinaryImageId} alt="restaurant-logo" />
      <h3>{name}</h3> 
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h4>
    </div>
  )
} 

export default RestaurantCard;