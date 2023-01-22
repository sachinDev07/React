import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [restaurent, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurent(json.data);
  }

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurent id : {resId} </h1>
        <h2>{restaurent?.name}</h2>
        <img src={IMG_CDN_URL + restaurent?.cloudinaryImageId} />
        <h3>{restaurent?.area}</h3>
        <h3>{restaurent?.city}</h3>
        <h3>{restaurent?.avgRating} stars</h3>
        <h3>{restaurent?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
        {Object.values(restaurent?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
