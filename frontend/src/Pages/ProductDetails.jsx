import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link, NavLink, useParams } from 'react-router-dom';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import Data from '../Components/Data';
import { CiSearch } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import RatingStars from '../Components/RatingStars';

const ProductDetails = () => {
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

    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState(false);
    const [userReview, setUserReview] = useState({ comment: '', rating: '' });
    const [emptyFieldError, setEmptyFieldError] = useState(false); // State to track empty field error

    const allProducts = [
        ...Data.fruitItems,
        ...Data.vegetableItems,
        ...Data.spinachItems
    ];

    const product = allProducts.find(item => item.id === parseInt(id));

    if (!product) {
        return <div className='flex items-center justify-center min-h-screen text-red-500 text-xl'>Product not found</div>;
    }

    if (!product.reviews) {
        product.reviews = [];
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        
        // Check if comment and rating fields are empty
        if (!userReview.comment.trim() || !userReview.rating) {
            // If any field is empty, set empty field error to true and return
            setEmptyFieldError(true);
            return;
        }
        
        // If both fields are not empty, proceed with submitting the review and reset empty field error
        product.reviews.push({ user: "User", comment: userReview.comment, rating: userReview.rating });
        setUserReview({ comment: '', rating: '' });
        setEmptyFieldError(false);
    };

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
            <div className='container mx-auto py-8 flex justify-center'>
                <div className='max-w-3xl w-full bg-gradient-to-r from-gray-800 to-gray-700 p-5 rounded-lg shadow-lg border border-gray-700 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5'>
                    <div>
                        <img src={product.img} alt={product.title} className='w-full h-72 object-cover rounded mb-5' />
                        <h1 className='text-3xl font-bold text-green-400'>{product.title}</h1>
                        <p className='text-md text-gray-300'>{product.description}</p>
                        <div className="flex items-center mt-3">
                            <RatingStars rating={product.rating} />
                        </div>
                        <p className='text-2xl font-bold mt-3'>Rs. {product.price}.00</p>
                        <button 
                            className='mt-5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-lg font-semibold w-full py-2 rounded-full transition-all duration-300 transform hover:scale-105'
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                        <div className='mt-8 text-center'>
                    <Link to="/" className='text-green-500 hover:underline'>
                        Continue Shopping
                    </Link>
                </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-3">Reviews</h2>
                        <ul className="divide-y divide-gray-500">
                            {product.reviews && product.reviews.map((review, index) => (
                                <li key={index} className="py-3">
                                    <p className="text-gray-300">{review.comment}</p>
                                    <div className="flex items-center mt-2">
                                        <RatingStars rating={review.rating} />
                                        <span className="text-gray-400 ml-2">{review.user}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <form onSubmit={handleReviewSubmit} className="mt-5">
                        <textarea
                            value={userReview.comment}
                            onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                            placeholder="Write your review..."
                            className="w-full bg-gray-800 text-gray-300 p-3 rounded-md resize-none"
                            rows="4"
                        ></textarea>
                        <input
                            type="text"
                            min="1"
                            max="5"
                            value={userReview.rating}
                            onChange={(e) => setUserReview({ ...userReview, rating: parseInt(e.target.value) })}
                            placeholder="Rating (1-5)"
                            className="w-full bg-gray-800 text-gray-300 p-3 mt-3 rounded-md"
                        />
                        {/* Conditionally render the error message */}
                        {emptyFieldError && <p className="text-red-500 text-sm mt-2">Please enter both comment and rating.</p>}
                        <button
                            type="submit"
                            className="bg-green-400 hover:bg-green-500 text-white font-semibold px-4 py-2 mt-3 rounded-md"
                        >
                            Submit Review
                        </button>
                    </form>
                    </div>
                </div>
            </div>
            {notification && (
                <div className='fixed bottom-10 right-5 z-50 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-opacity duration-300 opacity-100'>
                    <IoCheckmarkCircle size="1.5rem" />
                    <span className="text-lg">Product successfully added to cart!</span>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
