import cart_img from '../assests/images/emptycart.png';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './foodItem';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }





    return cartItems.length != 0 ? (
        <>
            <div className='px-44 py-4 mt-28 bg-[#fffffe]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold  text-[#181818]'>Shopping Cart</h1>
                    <div className='flex items-center gap-x-4'>
                        <span className="text-xl font-semibold text-[#181818]">Cart items : {cartItems.length}</span>
                        <button className='py-2 px-4 rounded font-bold  bg-[#4fc4cf] text-[#181818]' onClick={() => handleClearCart()}>Clear All</button>
                    </div>
                </div>
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
            <h4 className='mb-12 text-2xl text-gray-500'>You can go to home page to view more restaurants</h4>
        </div>
    )
};

export default Cart;