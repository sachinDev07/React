import { useState } from "react";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrauntList);

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn" onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state:
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restauranlist">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
