import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurentMenu = (resId) => {
  const [restaurent, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch( FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurent(json.data);
  }

  return restaurent;
};

export default useRestaurentMenu;
