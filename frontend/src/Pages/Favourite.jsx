import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Components/CartContext.jsx';
import { IoHeartDislike } from 'react-icons/io5';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';

const Favorite = () => {
    const { favoriteItems, removeFromFavorites } = useContext(CartContext);

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen">
            <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold">VeggieLink</h1>
                <div className="flex space-x-4">
                    <NavLink to="/cart" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                        <CiShoppingCart className="nav-icon mr-1" size={24} />
                        <span>Cart</span>
                    </NavLink>
                    <NavLink to="/favs" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                        <IoHeart className="nav-icon text-red-500 mr-1" size={24} />
                        <span>Favorites</span>
                    </NavLink>
                    <NavLink to="/orders" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                        <CiDeliveryTruck className="nav-icon mr-1" size={24} />
                        <span>Orders</span>
                    </NavLink>
                </div>
            </header>
            <div className="flex-grow p-8">
                <h1 className="text-3xl font-bold text-green-400 mb-4">Favourite Items</h1>
                {favoriteItems.length === 0 ? (
                    <p>No favourite items.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {favoriteItems.map(item => (
                            <div key={item.id} className="product flex flex-col justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
                                <Link to={`/details/${item.id}`} className="flex flex-col justify-between flex-grow">
                                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded" />
                                    <div className="flex flex-col justify-between flex-grow mt-4">
                                        <h1 className="text-lg font-semibold text-green-400">{item.title}</h1>
                                        <p className="text-sm text-gray-300">{item.description}</p>
                                        <div className="flex justify-between items-center mt-4">
                                            <p className="text-xl font-bold text-white">Rs. {item.price}.00</p>
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
            <footer className="mt-8 text-center">
                <Link to="/" className="text-green-500 hover:underline">
                    Continue Shopping
                </Link>
            </footer>
        </div>
    );
};

export default Favorite;
