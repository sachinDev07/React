import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";


const CartItems = ({
    name,
    description,
    cloudinaryImageId,
    price,
    id,

}) => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    
    const removeFromCart = (item) => {
        dispatch(removeItem(item));
    }

    function getQuantityById(id) {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : null ;
    }

    function getSubTotal(id) {
        const subTotal = cartItems.find((item) => item.id === id);
        return subTotal ? subTotal.price * subTotal.quantity / 100 : null ;
    }


    return (
        <div className="mt-10 flex items-center"> 
            <div className="mr-20 flex gap-x-4">
                <div className="bg-gray-100 p-3 rounded">
                    <img width="150px" className="object-contain" src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" />
                </div>
                <div>
                    <h1 className="font-bold text-base text-black">{name}</h1>
                    <h2 className="mt-2 w-[280px] font-semibold text-sm text-[#172c66]">{description}</h2>
                    <h3 className="text-sm mt-2 font-semibold text-[#172c66]">Price : Rs {price / 100}</h3>
                    <button 
                        type="button" 
                        className="mt-2 text-sm rounded font-bold text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(id)}>
                        Remove
                    </button> 
                </div> 
            </div>
            <div className="mr-auto py-2 px-3 border-2 border-solid border-slate-400">{getQuantityById(id)}</div> 
            <div className="font-bold text-black mr-4">Rs {getSubTotal(id)}</div>     
        </div>
     
    )
}

export default CartItems;