import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";


const CountQuantity = ({ item }) => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    
    const removeFromCart = (item) => {
        dispatch(removeItem(item));
    }
    
    function getQuantityById(id) {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : null ;
    }

    return(
        <div className="flex gap-x-1 items-center text-center rounded">
            <button 
                data-testid="addBtn" 
                className="py-2 px-3 text-sm font-semibold text-white bg-[#0e172c] hover:bg-red-700 transition-all duration-200 ease-linear rounded"
                onClick={() => removeFromCart(item?.id)}
                ><i className="fa-solid fa-minus"></i>
            </button>

            <p className="py-[6px] px-3 text-white bg-[#0e172c] rounded"> {getQuantityById(item?.id)} </p>

            <button 
                data-testid="addBtn" 
                className=" py-2 px-3 text-sm font-semibold  text-white bg-[#0e172c] hover:bg-red-700 transition-all duration-200 ease-linear rounded"
                onClick={() => addFoodItem(item)}
            > <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}

export default CountQuantity;