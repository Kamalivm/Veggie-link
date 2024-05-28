import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className='flex items-center justify-center min-h-screen bg-gray-800 text-gray-500 text-xl'>
                No items in the cart
            </div>
        );
    }

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className='min-h-screen bg-gray-900 text-white p-5'>
            <div className='max-w-3xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold text-green-400 mb-5'>Your Cart</h1>
                {cartItems.map((item) => (
                    <div key={item.id} className='flex justify-between items-center bg-gray-700 p-4 rounded mb-4'>
                        <div>
                            <h2 className='text-xl text-green-400'>{item.title}</h2>
                            <p className='text-sm text-gray-300'>{item.description}</p>
                            <p className='text-lg font-bold text-white'>Rs. {item.price}.00 x {item.quantity}</p>
                        </div>
                        <button 
                            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition'
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div className='mt-5'>
                    <h2 className='text-2xl font-bold text-white'>Total: Rs. {totalAmount}.00</h2>
                    <button className='mt-5 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold w-full py-2 rounded transition-all duration-300'>
                        Checkout
                    </button>
                </div>
                <div className='mt-5'>
                    <Link to="/" className='text-green-400 hover:underline'>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
