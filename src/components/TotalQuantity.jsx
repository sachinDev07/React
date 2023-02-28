import emptyCartImage from '.././assests/images/emptycart.png';
import { useSelector } from 'react-redux';
import useRestaurentMenu from '../hooks/useRestaurentMenu';
import { useParams } from 'react-router-dom';
import CountQuantity from './CountQuantiy';
import { useDispatch } from 'react-redux';

const TotalQuantity = () => {
    const cartItems = useSelector(store => store.cart.items);

    const uniqItems = [...new Set(cartItems)];

    console.log("unique",uniqItems);

    const { resId } = useParams();

    const restaurent = useRestaurentMenu(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
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
                        <div className='max-w-[300px]'>
                            <h2 className='font-bold text-3xl text-black text-start'>Cart</h2>
                                <span 
                                    className='font-semibold text-gray-500 mt-2 text-sm'>{cartItems.length + " ITEM"}
                                </span>
                            
                         
                            {
                                Object.values(cartItems).map((item) => (
                                    <div className='flex justify-between items-center mt-6'>
                                    <span 
                                        className='font-semibold text-gray-500 mt-2 text-sm'>{}
                                    </span>
                                        <div className='w-[155px]'>
                                            {item.name}
                                        </div>
                                        <div 
                                            className='py-1 px-3 flex gap-x-3 border-2 border-green-300 border-solid max-w-[90px]'>
                                            <button>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button>
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
                    )
                }
                
            </div>
        </div>
    )
}

export default TotalQuantity;