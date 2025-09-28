import { IMG_CDN_URL } from "../utills/constants";


const RestaurantCard=(props)=>{
  const { resData}=props;
  //console.log('card Data:::', resData);
  
  const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData?.info;
  
  return (
    <div className="flex flex-wrap gap-6 p-6 ">
    <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden w-60 h-80 hover:border ">
      <img
      className="rounded-lg w-full h-40 object-cover "
      alt="error"
      src={IMG_CDN_URL+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>⭐{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
    </div>
  )
}

export default RestaurantCard;