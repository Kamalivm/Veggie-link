import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink
import { CartContext } from '../Components/CartContext.jsx';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';

const AddItemForm = () => {
    const { addItem } = useContext(CartContext);

    const [item, setItem] = useState({
        title: '',
        description: '',
        price: '',
        img: '',
        imgName: '', // Add imgName to state
        category: 'fruitItems', // default category
        quantity: '' // Add quantity to state
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // If input type is file, handle image upload
        if (type === 'file') {
            handleImageUpload(e);
        } else {
            setItem((prevItem) => ({
                ...prevItem,
                [name]: value
            }));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setItem((prevItem) => ({
            ...prevItem,
            img: URL.createObjectURL(file), // Set the image URL for display if needed
            imgName: file.name // Set the image file name
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.title || !item.description || !item.price || !item.img || !item.quantity) {
            alert('Please fill out all fields');
            return;
        }
        const newItem = {
            id: Date.now(),
            title: item.title,
            description: item.description,
            price: parseFloat(item.price),
            img: item.img,
            imgName: item.imgName,
            quantity: parseInt(item.quantity) // Add quantity to new item
        };
        addItem(newItem, item.category);
        setItem({
            title: '',
            description: '',
            price: '',
            img: '',
            imgName: '',
            category: 'fruitItems',
            quantity: ''
        });
    };

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen">
            <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center fixed w-full z-10">
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
            <div className="flex items-center justify-center bg-gray-900 pt-20 pb-16"> {/* Adjusted top padding */}
                <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-md max-w-md w-full mt-4">
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={item.title}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={item.description}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={item.price}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={item.quantity}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Image</label>
                        <label htmlFor="img" className="cursor-pointer block w-full bg-gray-700 p-4 rounded-lg text-center text-gray-200 border border-gray-600 hover:bg-gray-600 hover:border-gray-400">
                            {item.imgName ? (
                                <span>{item.imgName}</span> // Display the image name
                            ) : (
                                <span>Choose Image</span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                id="img"
                                name="img"
                                onChange={handleChange}
                                className="hidden"
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={item.category}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="fruitItems">Fruits</option>
                            <option value="vegetableItems">Vegetables</option>
                            <option value="spinachItems">Spinach</option>
                            <option value="seedItems">Seeds</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full p-2 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Add Item</button>
                    <div className='mt-8 text-center'>
                        <Link to="/home" className='text-green-500 hover:underline'>
                            Continue Shopping
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItemForm;
