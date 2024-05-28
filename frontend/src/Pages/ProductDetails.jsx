import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';
import Data from '../Components/Data.jsx';
import { IoCheckmarkCircle } from 'react-icons/io5';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState(false);

    const allProducts = [
        ...Data.fruitItems,
        ...Data.vegetableItems,
        ...Data.spinachItems
    ];
    const product = allProducts.find(item => item.id === parseInt(id));

    if (!product) {
        return <div className='flex items-center justify-center min-h-screen text-red-500 text-xl'>Product not found</div>;
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    };

    return (
        <div className='relative flex items-center justify-center bg-gray-900 text-white min-h-screen p-5'>
            {notification && (
                <div className='absolute top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-opacity duration-300 opacity-100'>
                    <IoCheckmarkCircle size="1.5rem" />
                    <span>Product successfully added to cart!</span>
                </div>
            )}
            <div className='max-w-lg w-full bg-gradient-to-r from-gray-800 to-gray-700 p-5 rounded-lg shadow-lg border border-gray-700'>
                <img src={product.img} alt={product.title} className='w-full h-72 object-cover rounded' />
                <h1 className='text-3xl font-bold text-green-400 mt-5'>{product.title}</h1>
                <p className='text-md text-gray-300'>{product.description}</p>
                <p className='text-2xl font-bold mt-3'>Rs. {product.price}.00</p>
                <button 
                    className='mt-5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-lg font-semibold w-full py-2 rounded-full transition-all duration-300 transform hover:scale-105'
                    onClick={() => handleAddToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
