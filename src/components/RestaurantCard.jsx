import { IMG_CDN_URL } from "../config";

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
          <div className="card ribbon_box">
            {
              ribbon ? 
                        (<div className="ribbon">{ribbon[0]?.type}</div>)
                     : 
                        ("") 
            }
            <img
              src={IMG_CDN_URL + cloudinaryImageId}
            />
            <h3 className="food_name">{name}</h3>
            <h4 className="cusisine_name">{cuisines.slice(0, 3).join(', ')}</h4>
            <div className="food_des">
              <span 
                    className={
                      avgRating <= 3.9 && !isNaN(avgRating) 
                        ? "tags brownRating" 
                        : "tags greenRating"
                    }
              >
                   <i class="fa-regular fa-star"></i> {avgRating } 
              </span>
              <span className="tags grey_color dots">.</span>
              <span className="tags grey_color">{minDeliveryTime} mins </span>
              <span className="tags grey_color dots">.</span>
              <span className="tags grey_color">{costForTwoString}</span>
            </div>
            <hr className="horizontal_line" />
            <div className="offer">
            {
              aggregatedDiscountInfo ? (<p><i class="fa-solid fa-tags"></i>{(" ")}
                                       {aggregatedDiscountInfo?.descriptionList[0].meta}</p>) 
                                     : ("")
              
            }
            
            </div>
          </div>
        );
      };

  export default RestaurantCard;