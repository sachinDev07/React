import { IMG_CDN_URL } from "../config";


const FoodItem = ({
    name,
    description,
    cloudinaryImageId,
    price,
}) => {

    return (
        <div>
            <div>
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
                <h2>{name}</h2>
                <h3>{description}</h3>
                <h4>Rupees : {price / 100}</h4>
            </div>
        </div>
    )
}

export default FoodItem;