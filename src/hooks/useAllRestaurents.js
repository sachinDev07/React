import { useState, useEffect } from "react";
import { API_URL } from "../config";

const useAllRestaurents = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sliderRestaurentList, setSliderRestaurentList] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      setLoading(true);
      const data = await fetch(API_URL);
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setSliderRestaurentList(json?.data?.cards[0]?.data?.data?.cards);
      setLoading(false);
    } catch (err) {
        setLoading(false);
    }
  }

  return { allRestaurants, filteredRestaurants, setFilteredRestaurants, loading, sliderRestaurentList  };
   
};

export default useAllRestaurents;
