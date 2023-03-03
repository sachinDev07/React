import cart_img from '../assests/images/emptycart.png';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartItems from './CartItems'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const taxPay = 35;
    
    function getSubTotal() {
        const subTotal = cartItems.reduce((total, item) => {
            const itemSubTotal = item.price * item.quantity;
            return total + itemSubTotal;
        }, 0);
          
        return subTotal / 100;
    }

    function getTotalPrice () {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        })
        return taxPay+total/100;
    }

    return cartItems.length != 0 ? (
            <div className='px-44 py-4 mt-28 bg-[#fffffe]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold  text-[#181818]'>Shopping Cart</h1>
                    <div className='flex items-center gap-x-4'>
                        <span className="text-xl font-semibold text-[#181818]">Cart items : {cartItems.length}</span>
                        <button className='py-2 px-4 rounded font-bold  bg-[#4fc4cf] text-[#181818]  hover:bg-blue-400 transition-all ease-in-out duration-200' 
                         onClick={() =>  handleClearCart()}>
                         Clear All
                        </button>
                    </div>
                </div>
                <div className=" mt-8 p-2 rounded flex justify-between bg-red-400 text-lg text-white font-semibold border-2 border-solid border-red-500">
                    <div>Product</div>
                    <div className='ml-36'>Quantity</div>
                    <div>Subtotal</div>
                </div>
                {
                    cartItems.map((item) => (
                        <CartItems 
                           key={item.id} 
                           id={item.id}
                           {...item}                                
                        />
                    ))
                }
                <div className="flex flex-col items-end mr-4 mt-8">
                    <div className='bg-red-500 w-[510px] h-2 rounded'></div>
                    <div className='mt-3'>
                        <div className='flex justify-between w-[510px] px-2'>
                            <div className='font-bold text-gray-800'>Subtotal</div>
                            <div className='font-bold text-gray-800'>Rs {getSubTotal()}</div>
                        </div>
                        <div className='mt-2 flex justify-between w-[510px] px-2'>
                            <div className='font-bold text-gray-800'>Tax</div>
                            <div className='font-bold text-gray-800'>Rs {taxPay}</div>
                        </div>
                        <div className='mt-2 flex justify-between w-[510px] px-2'>
                            <div className='font-bold text-gray-800'>Total</div>
                            <div className='font-bold text-gray-800'>Rs {getTotalPrice()}</div>
                        </div>
                    </div>    
                </div>
                <div className='flex flex-col items-end mr-6 mt-7 transition duration-200 ease-linear'>
                    <button className='w-[260px] py-3 rounded-3xl bg-red-600 hover:bg-red-500 text-lg font-bold text-white transition duration-200 ease-linear'>Proceed To Checkout</button>
                </div>
            </div>   
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