import cart_img from '../assests/images/emptycart.png';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './foodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return cartItems.length != 0 ? (
        <>
            <div className='mt-40'>
                <span className="font-bold">Cart items : {cartItems.length}</span>
                <button className='p-2 bg-green-400' onClick={() => handleClearCart()}>Clear cart</button>
                {
                    cartItems.map((item) => (
                        <FoodItem key={item.id} {...item} />
                    ))
                }
            </div>
        </>
        
    )
    :
    (
        <div className='mt-44 flex flex-col justify-center items-center'>
            <img src={cart_img} alt="cart-img" />
            <h1 className='mt-8 text-2xl text-gray-500'>Your cart is empty !</h1>
            <h4 className='mb-6 text-2xl text-gray-500'>You can go to home page to view more restaurants</h4>
        </div>
    )
};

export default Cart;