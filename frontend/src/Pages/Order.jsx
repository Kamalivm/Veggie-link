import React from 'react';
import { Link } from 'react-router-dom';

export function Order() {
    return (
        <div className='min-h-screen bg-gray-900 text-white flex justify-center items-center'>
            <div className='max-w-xl w-full px-6 py-12 bg-gray-800 rounded-lg shadow-lg'>
                <h1 className='text-4xl font-bold text-green-400 mb-8 text-center'>No Orders Yet</h1>
                <div className='text-center'>
                    <p className='text-lg text-gray-300 mb-8'>Looks like you haven't placed any orders yet. Start exploring and add items to your cart!</p>
                    <Link to="/" className='inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-md transition-all duration-300'>
                        Explore Products
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Order;
