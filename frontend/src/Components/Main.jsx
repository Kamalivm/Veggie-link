import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { NavLink,Link } from 'react-router-dom';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import Slider from "react-slick";
import Data from './Data.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    const Products = {
        fruitItems: Data.fruitItems,
        vegetableItems: Data.vegetableItems,
        spinachItems: Data.spinachItems
    };

    const [filteredProducts, setFilteredProducts] = useState(Products);
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(Products);
        } else if (Object.prototype.hasOwnProperty.call(Products, category)) {
            setFilteredProducts({
                fruitItems: category === 'fruitItems' ? Products.fruitItems : [],
                vegetableItems: category === 'vegetableItems' ? Products.vegetableItems : [],
                spinachItems: category === 'spinachItems' ? Products.spinachItems : [],
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
        };
        setFilteredProducts(filteredArray);
    };


    const handleViewProduct = (item) => {
        setRecentlyViewed(prevState => {
            const itemExists = prevState.some(viewedItem => viewedItem.id === item.id);
            if (itemExists) {
                return prevState;
            } else {
                return [...prevState, item];
            }
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='w-full relative bg-gray-900 text-white'>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-gray-800 shadow-md'>
                    <h1 className='text-3xl font-bold text-green-400'>VeggieLink</h1>
                        <div className="flex items-center space-x-4">
                            <NavLink to='/cart' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <CiShoppingCart className="mr-2" size={'1.5rem'} />
                                <span className="text-white">CartItems</span>
                            </NavLink>
                            <NavLink to='/favs' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <IoHeart className="mr-2 text-red-500" size={'1.5rem'} />
                                <span className="text-white">FavouriteItems</span>
                            </NavLink>
                            <NavLink to='/orders' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <CiDeliveryTruck className="mr-2" size={'1.5rem'} />
                                <span className="text-white">OrderItems</span>
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
                    >All                    </button>
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
                </div>
            </div>
            
            {recentlyViewed.length > 0 && (
                <div className="recently-viewed p-4 bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Recently Viewed</h2>
                    <Slider {...settings}>
                        {recentlyViewed.map(item => (
                            <div key={item.id} className="p-2">
                                <Link to={`/details/${item.id}`} className="product flex flex-col bg-gray-700 p-4 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer">
                                    <img src={item.img} alt={item.title} className='w-full h-32 object-cover rounded' />
                                    <div className='flex flex-col justify-between flex-grow mt-4'>
                                        <h1 className='text-lg font-semibold text-green-400'>{item.title}</h1>
                                        <p className='text-sm text-gray-300'>{item.description}</p>
                                        <div className='flex justify-between items-center mt-4'>
                                            <p className='text-xl font-bold text-white'>Rs. {item.price}.00</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
            
            <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {filteredProducts && Object.keys(filteredProducts).map((category) => (
                    filteredProducts[category].map((item) => (
                        <Link 
                            to={`/details/${item.id}`} 
                            key={item.id} 
                            className="product flex flex-col justify-between bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer"
                            onClick={() => handleViewProduct(item)}
                        >
                            <img src={item.img} alt={item.title} className='w-full h-48 object-cover rounded' />
                            <div className='flex flex-col justify-between flex-grow mt-4'>
                                <h1 className='text-lg font-semibold text-green-400'>{item.title}</h1>
                                <p className='text-sm text-gray-300'>{item.description}</p>
                                <div className='flex justify-between items-center mt-4'>
                                    <p className='text-xl font-bold text-white'>Rs. {item.price}.00</p>
                                    <button><IoHeart className="text-red-500" size="1.5em" /></button>
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

                   
