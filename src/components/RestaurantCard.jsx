import { IMG_CDN_URL } from "../config";
import Single_dot from '../assests/images/single_dot.png';
import Sale from "../assests/images/sale.png";

const RestaurantCard = ({
      name, 
      cuisines, 
      cloudinaryImageId, 
      avgRating,
      minDeliveryTime,
      costForTwoString,
      ribbon,
      aggregatedDiscountInfo,
  }) => {
        return (
          <div className="w-[280px] mt-4 transition-all duration-300 ease-in-out pb-5 pt-4 pr-4 pl-4 rounded-lg hover:scale-105 hover:shadow-2xl relative">
            {
              ribbon ? 
                        (<div className="bg-green-600 text-xs text-white inline-block py-2 px-3 absolute tracking-[2px] font-medium">{ribbon[0]?.type}</div>)
                     : 
                        ("") 
            }
            <img className="w-full"
              src={IMG_CDN_URL + cloudinaryImageId}
            />
            <h3 className="text-lg font-bold text-black mt-2 mb-2">{name}</h3>
            <h4 className="text-xs font-normal text-gray-600">{cuisines.slice(0, 3).join(', ')}</h4>
            <div className="flex justify-between content-center text-center pt-3 pb-3">
              <span 
                    className={
                      avgRating <= 3.9 && !isNaN(avgRating) 
                        ? "text-xs text-red-600 font-extrabold bg-pink-300 p-1 rounded-sm" 
                        : "text-xs text-green-700 font-extrabold bg-green-200 p-1 rounded-sm"
                    }>
                   <i className="fa-regular fa-star"></i> {avgRating } 
              </span>
              <img className="w-1 h-1 m-auto block text-center " src={Single_dot} alt="small-circle" />
              <span className="text-black font-semibold text-base">{minDeliveryTime} mins </span>
              <img className="w-1 h-1 m-auto block text-center" src={Single_dot} alt="small-circle" />
              <span className="text-black font-semibold text-base">{costForTwoString}</span>
            </div>
            <hr className="opacity-100 text-gray-400" />
            <div className="mt-2 text-red-600">
            {
              aggregatedDiscountInfo ? (<p className="text-blue-700"><img className="w-5 inline-block " src={Sale} alt="sale-image" />{(" ")}
                                       {aggregatedDiscountInfo?.descriptionList[0].meta}</p>) 
                                     : ("")
              
            }
            
            </div>
          </div>
        );
      };

  export default RestaurantCard;