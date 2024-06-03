import React, {useState, useContext } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { CartContext } from '../Components/CartContext.jsx';
import { IoHeartDislike } from 'react-icons/io5';
import '../index.css'; // Import the CSS file for Favorites
import Data from '../Components/Data'
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';

const Favorite = () => {
    const Products = {
        fruitItems: Data.fruitItems,
        vegetableItems: Data.vegetableItems,
        spinachItems: Data.spinachItems
    };

    const [filteredProducts, setFilteredProducts] = useState(Products);

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

    const { favoriteItems, removeFromFavorites } = useContext(CartContext);

    return (
        <div className='w-full relative bg-gray-900 text-white'>
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
        </div>
    );
}

export default Favorite;
