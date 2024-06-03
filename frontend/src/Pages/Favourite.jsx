import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/CartContext.jsx';
import { IoHeartDislike } from 'react-icons/io5';
import '../index.css'; // Import the CSS file for Favorites

const Favorite = () => {
    const { favoriteItems, removeFromFavorites } = useContext(CartContext);

    return (
        <div className="favorite-items-container"> {/* Use the CSS class for container */}
            <h1 className="text-3xl font-bold text-green-400 mb-4">Favourite Items</h1>
            {favoriteItems.length === 0 ? (
                <p>No favourite items.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favoriteItems.map(item => (
                        <div key={item.id} className="product flex flex-col justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
                            <Link to={`/details/${item.id}`} className='flex flex-col justify-between flex-grow'>
                                <img src={item.img} alt={item.title} className='w-full h-48 object-cover rounded' />
                                <div className='flex flex-col justify-between flex-grow mt-4'>
                                    <h1 className='text-lg font-semibold text-green-400'>{item.title}</h1>
                                    <p className='text-sm text-gray-300'>{item.description}</p>
                                    <div className='flex justify-between items-center mt-4'>
                                        <p className='text-xl font-bold text-white'>Rs. {item.price}.00</p>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent navigation
                                                removeFromFavorites(item.id);
                                            }}
                                        >
                                            <IoHeartDislike className="text-red-500" size="1.5em" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorite;
