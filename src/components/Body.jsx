import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData} from ".././utils/helper"
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline) {
    return <h>🔴 Offline, Please Check Your Internet Connection !!!</h>
  }

  // Early rendering...
  if(!allRestaurants) return null;

  if(filteredRestaurants?.length === 0)
    return <h1>No Restaurant Found</h1>

  return allRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn" onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state:
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restauranlist">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link 
              to={"/restaurent/" + restaurant.data.id} 
              key={restaurant.data.id}>
              <RestaurantCard {...restaurant.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
