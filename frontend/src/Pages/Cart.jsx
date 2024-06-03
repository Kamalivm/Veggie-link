import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link, NavLink } from 'react-router-dom';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className='bg-gray-900 text-gray-200 min-h-screen'>
            <div className='header bg-gray-800 text-white py-4 px-8 flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>VeggieLink</h1>
                <div className='flex space-x-4'>
                    <NavLink to='/cart' className='nav-link flex items-center'>
                        <CiShoppingCart className='nav-icon mr-1' size={24} />
                        <span>Cart</span>
                    </NavLink>
                    <NavLink to='/favs' className='nav-link flex items-center'>
                        <IoHeart className='nav-icon text-red-500 mr-1' size={24} />
                        <span>Favorites</span>
                    </NavLink>
                    <NavLink to='/orders' className='nav-link flex items-center'>
                        <CiDeliveryTruck className='nav-icon mr-1' size={24} />
                        <span>Orders</span>
                    </NavLink>
                </div>
            </div>
            <div className='container mx-auto py-8'>
                <h1 className='text-3xl font-bold text-gray-200 mb-8'>Your Cart</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='bg-gray-800 text-gray-200 rounded-lg shadow-md overflow-hidden'>
                            <img src={item.img} alt={item.title} className='w-full h-56 object-cover' />
                            <div className='p-4'>
                                <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
                                <p className='text-gray-400 mb-2'>{item.description}</p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <button
                                            className='bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1 mr-2'
                                            onClick={() => decrementQuantity(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className='font-semibold'>{item.quantity}</span>
                                        <button
                                            className='bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1 ml-2'
                                            onClick={() => incrementQuantity(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className='font-semibold'>Rs. {item.price * item.quantity}.00</span>
                                </div>
                                <button
                                    className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold mt-2'
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-8 text-right'>
                    <h2 className='text-xl font-semibold'>Total: Rs. {totalAmount}.00</h2>
                    <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold mt-4'>
                        <NavLink to="/payment" className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold mt-4'>
                            Checkout
                        </NavLink>
                    </button>
                </div>
                <div className='mt-8 text-center'>
                    <Link to="/" className='text-green-500 hover:underline'>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
