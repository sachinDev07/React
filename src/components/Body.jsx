import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData} from ".././utils/helper"
import useAllRestaurents from "../hooks/useAllRestaurents";
import Slider from "./Slider";
import Search from "./Search";


const Body = () => {
  
  const {
    allRestaurants, 
    filteredRestaurants, 
    setFilteredRestaurants, 
    sliderRestaurentList
  } = useAllRestaurents();


  return allRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <>
      <Slider slider={sliderRestaurentList} />

        <Search 
          setFilteredRestaurants={setFilteredRestaurants} 
          allRestaurants={allRestaurants} 
          filterData={filterData}
          restaurants={filteredRestaurants}
        />
        
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
