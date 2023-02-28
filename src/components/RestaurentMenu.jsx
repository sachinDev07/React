import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurentMenu from "../hooks/useRestaurentMenu";
import Sale from "../assests/images/sale.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import CountQuantity from "./CountQuantiy";
import TotalQuantity from "./TotalQuantity";


const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurent = useRestaurentMenu(resId);

  const cartItems = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }

  function getQuantityById(id) {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : null ;
  }

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="mt-[90px] ">
      <div className="">
        <div className="bg-gray-900 py-8 px-44 flex justify-between items-center fixed left-0  right-0">
          <div className="flex gap-x-10">
            <img className="w-72" src={IMG_CDN_URL + restaurent?.cloudinaryImageId} />

            <div className="min-w-[18rem] max-w-md">
              <p className="text-white text-3xl font-normal">{restaurent?.name}</p>
              <span className="text-gray-400 block my-2">{restaurent?.cuisines.join(", ")}</span>
              <span className="text-gray-400 inline-block pr-1 ">{restaurent?.locality}{","}</span>
              <span className="text-gray-400 inline-block ">{restaurent?.area}</span>
              <div className=" flex justify-between mt-6">
                <div className="flex flex-col">
                  <span className="text-white font-bold content-center"><i className="fa-solid fa-star text-sm pr-2"></i> {restaurent.avgRating}</span>
                  <small className="mt-1 font-bold text-gray-400">{restaurent?.totalRatingsString}</small>
                </div>
                <div className="border-[1px]  border-gray-500"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold content-center">{restaurent.sla.slaString}</span>
                  <small className="mt-1 font-bold text-gray-400">Delivery Time</small>
                </div>
                <div className="border-[1px]  border-gray-500"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold content-center"><i className="fa-solid fa-indian-rupee-sign text-sm pr-2"></i>{restaurent.costForTwo/100}</span>
                  <small className="mt-1 font-bold text-gray-400">Cost for two</small>
                </div>
              </div>
            </div>
          </div>

          <div className="w-72 h-32 py-4 px-8 flex justify-center items-center border-solid border-white border-[1px]  relative">
            <h1 className="absolute  text-white -top-6 -left-4 text-2xl font-semibold tracking-wider bg-gray-900 p-2 ">OFFER</h1>
            <div>
              {
                restaurent.aggregatedDiscountInfo 
                  ? (<div className="flex pb-3">
                      <img className="w-5 inline-block " src={Sale} alt="sale-image" />
                      <p className="text-white font-bold pl-2 text-sm">{restaurent.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</p></div>) 
                  : ("")
                
              }

              {
                restaurent.aggregatedDiscountInfo 
                  ? (<div className="flex">
                     <img className="w-5 h-5 inline-block " src={Sale} alt="sale-image" />
                     <p className=" text-white font-bold pl-2 text-sm">{restaurent.aggregatedDiscountInfo?.descriptionList[0]?.meta}</p></div>) 
                  : ("")          
              }
            </div>
          </div>
        </div>  
      </div>

      <div className="flex gap-x-4 justify-between px-44 py-2">
          <div >
          <h1 className="mt-60 text-xl inline-block text-gray-500 p-4 bg-black-100">Recommended</h1>    
          <ul data-testid="menu w-[820px]">
            {
              Object.values(restaurent?.menu?.items).map((item) => 
              (<li key={item.id} className="w-[820px] max-w-full flex mb-8 px-10 py-4 justify-between items-center  bg-[#fec7d7]">
                <div>
                  <h1 className="text-xl font-medium mb-1">{item?.name}</h1>
                  <span className="inline-block text-sm text-red-500 font-semibold mb-3">{item?.category}</span>
                  <p className="text-[#0e172c] font-medium mb-3 ">{item?.description.charAt(0).toUpperCase() + item?.description.slice(1)}</p>
                  <div className="flex gap-x-7 items-center">
                      <span className="font-bold text-lg"><i className="fa-solid  fa-indian-rupee-sign font-bold text-sm pr-1"></i>{Math.floor(item?.price / 100)}
                      </span>

                      {
                        getQuantityById(item.id) > 0
                          ? (
                              <CountQuantity
                                key={item.id} 
                                item={item}
                              />
                            )
                          : 
                            (
                              <button 
                                data-testid="addBtn" 
                                className=" p-2 text-sm font-semibold bg-[#0e172c] text-white rounded left-24 top-[138px] hover:bg-red-700 transition-all duration-200 ease-linear"
                                onClick={() => addFoodItem(item)}
                              >Add Item 
                              </button>
                            ) 
                      }

                  </div>
                </div>
                <img className="w-44 h-36 rounded-md" src={IMG_CDN_URL + item?.cloudinaryImageId} alt="food-img" />
              </li>)).slice(0, 22)
            }
          </ul>
          </div>

          <TotalQuantity />
      </div>
    </div>
  );
};

export default RestaurentMenu;
