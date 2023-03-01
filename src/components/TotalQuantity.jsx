import emptyCartImage from '.././assests/images/emptycart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const TotalQuantity = () => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    
    const removeFromCart = (item) => {
        dispatch(removeItem(item));
    }

    const getTotalQuantity = () => {
        let total = 0
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        })
        return total/100;
    }

    return (
        <div className='mt-60 flex flex-col'>
            <div className='mt-14 w-[300px] '>
                {
                    cartItems.length === 0 ?
                    (
                        <div>
                            <h1 className='text-gray-400 text-3xl font-bold'>Empty Cart</h1>
                            <div className='mt-12'>
                                <img width="300px" src={emptyCartImage} alt="cart-image" />
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='fixed max-w-[300px] '>
                                <h2 className='font-bold text-3xl text-black text-start'>Cart</h2>
                                <span className='font-semibold text-gray-500 mt-2 text-sm'>{cartItems.length + " ITEM"}
                                </span>
                            <div className='max-h-40 overflow-y-scroll p-2'>
                            {
                                Object.values(cartItems).map((item) => (
                                    <div key={item.id} className='flex justify-between items-center mt-4 '>
                                        <div className='w-[155px] mr-2'>
                                            {item.name}
                                        </div>
                                        <div className='py-1 px-3 flex gap-x-3 border-2 border-green-300 border-solid max-w-[90px] mr-8'>
                                            <button onClick={() => removeFromCart(item?.id)}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            
                                            <p>{item.quantity}</p>

                                            <button onClick={() => addFoodItem(item)}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className='font-semibold'>
                                            {item.price / 100}
                                        </div> 
                                    </div>   
                                ))
                                  
                            }
                            </div>
                            <div className='mt-5 flex justify-between'>
                                <div>
                                    <div className='text-lg font-bold text-gray-800'>Sub Total</div>
                                    <div className='text-xs text-gray-400'>Extra charges may apply</div>
                                </div>
                                 <div className='text-lg font-bold text-gray-800'>Rs. {getTotalQuantity()}</div>
                            </div>
                            <button 
                                type='button' 
                                className='w-full rounded mt-4 py-2 text-white font-bold text-lg bg-green-600 hover:bg-green-500 transition duration-200 ease-linear'>
                                CHECKOUT  
                            </button>
                        </div>
                        
                    )
                }
                
            </div>
        </div>
    )
}

export default TotalQuantity;