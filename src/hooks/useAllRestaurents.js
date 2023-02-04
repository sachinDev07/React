import { useState, useEffect } from "react";
import { API_URL } from "../config";

const useAllRestaurents = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      setLoading(true);
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setLoading(false);

    } catch (err) {
        setLoading(false);
    }
  }

  return { allRestaurants, filteredRestaurants, setFilteredRestaurants, loading  };
   
};

export default useAllRestaurents;
