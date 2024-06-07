import React, { useState, useContext, useEffect, useRef } from 'react';
import { CiSearch, CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { NavLink, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from './Data.jsx';
import { CartContext } from './CartContext.jsx';
import quote1 from '../assets/quote1.jpg';
import quote2 from '../assets/quote2.jpg';
import quote3 from '../assets/quote3.avif';
import { FaUser } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';

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
    const featuredProductsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const isFavorite = (item) => {
        return favoriteItems && favoriteItems.some((favItem) => favItem.id === item.id);
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

        if (featuredProductsRef.current) {
            featuredProductsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='w-full relative bg-gray-900 text-gray-200'>
            <div className='sticky top-0 z-10'>
                <div className='header flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-800 shadow-md'>
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <h1 className='text-3xl font-bold text-green-400'>VeggieLink</h1>
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to='/cart'
                                className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <CiShoppingCart className="mr-2" size={'1.5rem'} />
                                <span className="text-white">Cart</span>
                            </NavLink>
                            <NavLink
                                to='/favs'
                                className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <IoHeart className="mr-2 text-red-400" size={'1.5rem'} />
                                <span className="text-white">Favorites</span>
                            </NavLink>
                            <NavLink
                                to='/orders'
                                className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <CiDeliveryTruck className="mr-2" size={'1.5rem'} />
                                <span className="text-white">Orders</span>
                            </NavLink>
                            <NavLink
                                to='/additemform'
                                className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <FiPlusCircle className="mr-2" size={'1.5rem'} />
                                <span className="text-white">Post</span>
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="search flex items-center bg-gray-700 rounded-full">
                            <input
                                type="text"
                                placeholder='Search product'
                                className='bg-transparent text-gray-200 focus:outline-none py-2 px-3'
                                onChange={searchHandler}/>
                            <button onClick={searchHandler} className="px-3 text-gray-200">
                                <CiSearch size="1.5em" />
                            </button>
                        </div>
                        <NavLink
                            to='/'
                            className="flex items-center justify-center bg-gray-700 text-center text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105">
                            <FaUser size="1.2em" /> 
                        </NavLink>
                    </div>
                </div>
            </div>
            
            <div className='carousel-section bg-gray-800 h-screen relative'>
                <Carousel 
                    showArrows={false} 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    showThumbs={false} 
                    showStatus={false} 
                    className='carousel-wrapper'
                    interval={2000} 
                    stopOnHover={true}
                >
                    <div className="carousel-item">
                        <img src={quote1} alt="Customer Quote 1" style={{ maxHeight: '90vh', opacity: 0.4 }} />
                        <p className="legend text-white">"I love the fresh produce from VeggieLink. It's always top quality!" - Jane Doe</p>
                    </div>
                    <div className="carousel-item">
                        <img src={quote2} alt="Customer Quote 2" style={{ maxHeight: '90vh', opacity: 0.4 }} />
                        <p className="legend text-white">"The delivery is always on time and the products are amazing." - John Smith</p>
                    </div>
                    <div className="carousel-item">
                        <img src={quote3} alt="Customer Quote 3" style={{ maxHeight: '90vh', opacity: 0.4 }} />
                        <p className="legend text-white">"Great customer service and excellent products. Highly recommend!" - Emily Johnson</p>
                    </div>
                </Carousel>
            </div>

            {/* Featured Products Section */}
            <div ref={featuredProductsRef} className='products-section bg-gray-800'>
                <h2 className='text-3xl font-bold text-center text-green-400 mb-8'>Featured Products</h2>
                {loading ? (
                    <div className="loading-overlay flex justify-center items-center h-screen w-full absolute top-0 left-0 bg-gray-900 bg-opacity-75 z-20">
                        <h2 className="text-white text-2xl">Loading...</h2>
                    </div>
                ) : null}
                <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                    {filteredProducts &&
                        Object.keys(filteredProducts).map((category) =>
                            filteredProducts[category].map((item) => (
                                <Link
                                    to={`/details/${item.id}`}
                                    key={item.id}
                                    className="product flex flex-col justify-between bg-gray-700 p-4 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:scale-105 cursor-pointer"
                                >
                                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded" />
                                    <div className="flex flex-col justify-between flex-grow mt-4">
                                        <h1 className="text-lg font-semibold text-green-400">{item.title}</h1>
                                        <p className="text-sm text-gray-200">{item.description}</p>
                                        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                                        <div className="flex justify-between items-center mt-4">
                                            <p className="text-xl font-bold text-gray-200">Rs. {item.price}.00</p>
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
                                                    <IoHeart className="text-red-400" size="1.5em" />
                                                ) : (
                                                    <IoHeartOutline className="text-gray-200" size="1.5em" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                </div>
            </div>

            {/* Features Section */}
            <div className='features-section py-16 bg-gray-900 text-center'>
                <h2 className='text-3xl font-bold text-green-400 mb-8'>Why Shop with Us?</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
                    <div className='feature-item bg-gray-800 p-6 rounded-lg shadow-md'>
                        <CiDeliveryTruck size='3rem' className='mx-auto text-green-400' />
                        <h3 className='text-xl font-bold text-gray-200 mt-4'>Fast Delivery</h3>
                        <p className='text-gray-300 mt-2'>"Get your orders delivered quickly to your doorstep."</p>
                    </div>
                    <div className='feature-item bg-gray-800 p-6 rounded-lg shadow-md'>
                        <IoHeartOutline size='3rem' className='mx-auto text-green-400' />
                        <h3 className='text-xl font-bold text-gray-200 mt-4'>Quality Products</h3>
                        <p className='text-gray-300 mt-2'>"Only the best quality products for our customers."</p>
                    </div>
                    <div className='feature-item bg-gray-800 p-6 rounded-lg shadow-md'>
                        <CiShoppingCart size='3rem' className='mx-auto text-green-400' />
                        <h3 className='text-xl font-bold text-gray-200 mt-4'>Secure Shopping</h3>
                        <p className='text-gray-300 mt-2'>"Your transactions are safe with us."</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='footer bg-gray-900 text-gray-300 py-8'>
                <div className='container mx-auto text-center'>
                    <p className='mb-4'>&copy; 2023 VeggieLink. All Rights Reserved.</p>
                    <div className='flex justify-center space-x-4'>
                        <Link to='/terms' className='hover:text-white transition'>Terms of Service</Link>
                        <Link to='/privacy' className='hover:text-white transition'>Privacy Policy</Link>
                        <Link to='/contact' className='hover:text-white transition'>Contact Us</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;
