import RestaurantCard from "./RestaurantCard";
import { useEffect, useState} from "react";
//import restaurantList from "../utills/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";


const Body=()=>{
    const [ListOfRestaurants, setListOfRestaraunt]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText, SetSearchText]=useState("");
    //const url="https://swiggy-api-4c740.web.app/swiggy-api.json"
    const url2="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    //console.log("body render",ListOfRestaurants)
    //whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
    useEffect(()=>{
      fetchData();
    },[]);


    const fetchData=async()=>{
      const data=await fetch(url2);
      const json =await data.json();
      //console.log('response:::::', json?.data?.cards[4]);

      //Optional Chaining
      setListOfRestaraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  
    };
   


  //Conditional Rendering (Shimmer) - render according to condition
  // if(ListOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return (<h1>Looks like you're offline!! Please check your internet connection...</h1>);

  
  return ListOfRestaurants.length===0 ?(
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" 
          className="border border-solid border-black" 
          value={searchText}
          onChange={(e)=>{
            SetSearchText(e.target.value);
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={()=>{
            //filter the restraunt cards  and updates the UI
            //searchText

            //console.log(searchText)

           const filteredRestaurant= ListOfRestaurants.filter((res)=> {
             return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          });

            setFilteredRestaurant(filteredRestaurant);

          }}
          >Search</button>

        </div>
        <div className="search m-4 p-4 flex items-center" >
            <button 
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredList=ListOfRestaurants.filter(
                (res)=>res.info.avgRating>4.5
            );
            setListOfRestaraunt(filteredList)
        }}>
            Top Rated Restaurants</button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant, index)=>(//to display in ui we use filteredRestaurant
            <Link 
            key={restaurant?.info?.id || restaurant?.id || index}
            to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard  resData={restaurant} /></Link>
           ))} 
      </div>
    </div>
  )
}

export default Body;