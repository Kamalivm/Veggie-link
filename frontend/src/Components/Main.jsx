import React, { useState, useContext, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { NavLink, Link } from 'react-router-dom';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import Data from './Data.jsx';
import { CartContext } from './CartContext.jsx';

const Main = () => {
    const Products = {
        fruitItems: Data.fruitItems,
        vegetableItems: Data.vegetableItems,
        spinachItems: Data.spinachItems,
        seedItems: Data.seedItems,
    };

    const [filteredProducts, setFilteredProducts] = useState(Products);
    const [loading, setLoading] = useState(true);
    const { favoriteItems, addToFavorites, removeFromFavorites } = useContext(CartContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const isFavorite = (item) => {
        return favoriteItems && favoriteItems.some(favItem => favItem.id === item.id);
    };

    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(Products);
        } else if (Object.prototype.hasOwnProperty.call(Products, category)) {
            setFilteredProducts({
                fruitItems: category === 'fruitItems' ? Products.fruitItems : [],
                vegetableItems: category === 'vegetableItems' ? Products.vegetableItems : [],
                spinachItems: category === 'spinachItems' ? Products.spinachItems : [],
                seedItems: category === 'seedItems' ? Products.seedItems : [],
            });
        } else {
            console.error(`Category '${category}' does not exist.`);
        }
    };

    const searchHandler = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredArray = {
            fruitItems: Data.fruitItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            vegetableItems: Data.vegetableItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            spinachItems: Data.spinachItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            seedItems: Data.seedItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
        };
        setFilteredProducts(filteredArray);
    };

    return (
        <div className='w-full relative bg-gray-900 text-white'>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-gray-800 shadow-md'>
                    <h1 className='text-3xl font-bold text-green-400'>VeggieLink</h1>
                        <div className="flex items-center space-x-4">
                            <NavLink to='/cart' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <CiShoppingCart className="mr-2" size={'1.5rem'} />
                                <span className="text-white">Cart</span>
                            </NavLink>
                            <NavLink to='/favs' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <IoHeart className="mr-2 text-red-500" size={'1.5rem'} />
                                <span className="text-white">Favourits</span>
                            </NavLink>
                            <NavLink to='/orders' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <CiDeliveryTruck className="mr-2" size={'1.5rem'} />
                                <span className="text-white">Orders</span>
                            </NavLink>
                        </div>
                    <div className="search flex items-center px-5 py-2 rounded bg-gray-700">
                        <input 
                            type="text" 
                            placeholder='Search product' 
                            className='bg-transparent text-white focus:outline-none w-full'
                            onChange={searchHandler} 
                        />
                        <button onClick={searchHandler} className="text-white">
                            <CiSearch size="1.5em" />
                        </button>
                    </div>
                </div>
                <div className="categories bg-gray-800 w-full flex space-x-2 overflow-x-auto px-2 py-2">
                    <button 
                        className='bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition'
                        onClick={() => filterByCategory('All')}
                    >
                        All
                    </button>
                    <button 
                        className='bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition'
                        onClick={() => filterByCategory('fruitItems')}
                    >
                        Fruits
                    </button>
                    <button 
                        className='bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition'
                        onClick={() => filterByCategory('vegetableItems')}
                    >
                        Vegetables
                    </button>
                    <button 
                        className='bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition'
                        onClick={() => filterByCategory('spinachItems')}
                    >
                        Spinaches
                    </button>
                    <button 
                        className='bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition'
                        onClick={() => filterByCategory('seedItems')}
                    >
                        Seeds
                    </button>
                </div>
            </div>
            
            {loading ? (
                <div className="loading-overlay flex justify-center items-center h-screen w-full absolute top-0 left-0 bg-gray-900 bg-opacity-75 z-20">
                    <h2 className="text-white text-2xl">Loading...</h2>
                </div>
            ) : null}

            <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {filteredProducts && Object.keys(filteredProducts).map((category) => (
                    filteredProducts[category].map((item) => (
                        <Link 
                            to={`/details/${item.id}`} 
                            key={item.id} 
                            className="product flex flex-col justify-between bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer" >
                            <img src={item.img} alt={item.title} className='w-full h-48 object-cover rounded' />
                            <div className='flex flex-col justify-between flex-grow mt-4'>
                                <h1 className='text-lg font-semibold text-green-400'>{item.title}</h1>
                                <p className='text-sm text-gray-300'>{item.description}</p>
                                <div className='flex justify-between items-center mt-4'>
                                    <p className='text-xl font-bold text-white'>Rs. {item.price}.00</p>
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (isFavorite(item)) {
                                                removeFromFavorites(item.id);
                                            } else {
                                                addToFavorites(item);
                                            }
                                        }}
                                    >
                                        {isFavorite(item) ? (
                                            <IoHeart className="text-red-500" size="1.5em" />
                                        ) : (
                                            <IoHeartOutline className="text-white" size="1.5em" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))
                ))}
            </div>
        </div>
    );
}

export default Main;
