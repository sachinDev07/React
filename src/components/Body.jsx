import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData} from ".././utils/helper"
import useOnline from "../hooks/useOnline";
import useAllRestaurents from "../hooks/useAllRestaurents";
import Slider from "./Slider";


const Body = () => {
  
  const [searchText, setSearchText] = useState("");
  const {
    allRestaurants, 
    filteredRestaurants, 
    setFilteredRestaurants, 
    sliderRestaurentList
  } = useAllRestaurents();

  const isOnline = useOnline();

  if(!isOnline) {
    return <h className="mt-44">🔴 Offline, Please Check Your Internet Connection !!!</h>
  }


  return allRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <>
      <Slider slider={sliderRestaurentList} />

      <div className="py-4 px-44 flex justify-center mt-5">
        <input data-testid="search-input" className="w-[500px] outline-none border-solid border-2 border-gray-600 py-3 px-4 text-xl text-black rounded-tl rounded-bl" 
          type="text" 
          placeholder="Search your favourite restaurent" 
          value={searchText} 
          onChange={(e) => { setSearchText(e.target.value);}}
        />

        <button data-testid="search-btn" className="px-6 py-1 bg-blue-600 text-white font-medium text-base leading-tight uppercase rounded-tr rounded-br shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
          onClick={() => {
            const data = filterData(searchText, allRestaurants); // need to filter the data
            setFilteredRestaurants(data); // update the state:
          }}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 py-4 px-44" data-testid="restaurent-list">
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
