import { IMG_CDN_URL } from "../config";


const FoodItem = ({
    name,
    description,
    cloudinaryImageId,
    price,
    isVeg,
}) => {

    return (
        <div className="mt-10 p-5 flex gap-x-8 bg-slate-200 rounded"> 
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" className="w-72 rounded border-[1px] border-black border-solid" />
            <div>
                <h1 className="font-bold text-xl text-black">{name}</h1>
                <h2 className="mt-2 w-[640px] font-semibold text-lg text-[#172c66]">{description}</h2>
                <h4 className="mt-2 font-semibold text-[#172c66]">Rupees : {price / 100}</h4>
                {
                    isVeg ? (<div className="text-[#172c66] font-semibold">Veg</div>) : (<div className="text-[#172c66] font-semibold">Non Veg</div>)
                }
            </div>
        </div>
    )
}

export default FoodItem;