import cart_img from '../assests/images/emptycart.png';

const Cart = () => {
    return (
        <div className='mt-44 flex flex-col justify-center items-center'>
            <img src={cart_img} alt="cart-img" />
            <h1 className='mt-8 text-2xl text-gray-500'>Your cart is empty !</h1>
            <h4 className='mb-6 text-2xl text-gray-500'>You can go to home page to view more restaurants</h4>
        </div>
    );
};

export default Cart;