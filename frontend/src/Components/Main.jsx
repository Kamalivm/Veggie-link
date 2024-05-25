import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
// import { IoMdPerson } from 'react-icons/io';
// import { NavLink } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5'
import Data from './Data.jsx'
import Cart from '../Pages/Cart.jsx';

const Main = () => {
    const Products = {
        fruitItems: Data.fruitItems,
        vegetableItems: Data.vegetableItems,
        spinachItems : Data.spinachItems
    }

    const [filteredProducts, setFilteredProducts] = useState(Products);

    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(Products);
        } else if (Object.prototype.hasOwnProperty.call(Products, category)) {
            setFilteredProducts({
                ...Products,
                fruitItems: category === 'fruitItems' ? Products.fruitItems : [],
                vegetableItems: category === 'vegetableItems' ? Products.vegetableItems : [],
                spinachItems : category === 'spinachItems' ? Products.spinachItems : [],
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

    const [items, setSelectedItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const handleSubmit = (item) => {
        setSelectedItems([...items, item]);
    };

    const removeFromCart = (itemId) => {
        setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      };

    return (
        <div className='w-full relative'>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-white'>
                    <h1 className='text-3xl font-bold'>Veggie</h1>
                    <div className="search flex justify-between items-center px-5 py-2 bg-gray">
                        <input type="text" placeholder='Search product' className='b-transparent outline-0' onChange={searchHandler} />
                        <button onClick={searchHandler}><CiSearch /></button>
                        {/* <div className='px-4'>
                            <NavLink to='/login'>
                                <button className='bg-white px-2 py-2 rounded-full drop-shadow-xl'>
                                    <IoMdPerson size={'1.5rem'} />
                                </button>
                            </NavLink>
                        </div> */}
                    </div>
                </div>
                <div className="categories bg-white w-full flex space-x-5 px-2 py-2">
                    <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <button onClick={() => filterByCategory('All')}>All</button>
                    </div>

                    <div className='bg-white px-5 hover:bg-black hover:text-white py-2 rounded-full drop-shadow-xl'>
                        <button onClick={() => filterByCategory('fruitItems')}>Fruits</button>
                    </div>

                    <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                        <button onClick={() => filterByCategory('vegetableItems')}>Vegetables</button>
                    </div>
                    <div className='bg-white px-5 py-2 hover:bg-black hover:text-white rounded-full drop-shadow-xl'>
                        <button onClick={() => filterByCategory('spinachItems')}>Sphinaches</button>
                    </div>

                </div>
            </div>
            <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
                {filteredProducts && (
                    <>
                        {filteredProducts.fruitItems && filteredProducts.fruitItems.length > 0 && (
                            filteredProducts.fruitItems.map((item) => (
                                <div key={item.id} className="product flex flex-col justify-between h-[350px] bg-white drop-shadow-2xl p-2 border rounded-lg">
                                    <img src={item.img} className='w-full h-[60%] object-cover p-2 rounded' />
                                    <div className='flex flex-col justify-between flex-grow m-2 bg-gray-100 p-2 rounded'>
                                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xl font-bold'>Rs. {item.price}.00</p>
                                            <button><IoHeart color={'red'} size={'1.4rem'} /></button>
                                        </div>
                                        <button className='mt-2 w-full bg-black text-white py-2 rounded' onClick={() => handleSubmit(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            )))}

                        {filteredProducts.vegetableItems && filteredProducts.vegetableItems.length > 0 && (
                            filteredProducts.vegetableItems.map((item) => (
                                <div key={item.id} className="product flex flex-col justify-between h-[350px] bg-white drop-shadow-2xl p-2 border rounded-lg">
                                    <img src={item.img} className='w-full h-[60%] object-cover p-2 rounded' />
                                    <div className='flex flex-col justify-between flex-grow m-2 bg-gray-100 p-2 rounded'>
                                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xl font-bold'>Rs. {item.price}.00</p>
                                            <button><IoHeart color={'red'} size={'1.4rem'} /></button>
                                        </div>
                                        <button className='mt-2 w-full bg-black text-white py-2 rounded' onClick={() => handleSubmit(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            )))}
                        {filteredProducts.spinachItems && filteredProducts.spinachItems.length > 0 && (
                            filteredProducts.spinachItems.map((item) => (
                                <div key={item.id} className="product flex flex-col justify-between h-[350px] bg-white drop-shadow-2xl p-2 border rounded-lg">
                                    <img src={item.img} className='w-full h-[60%] object-cover p-2 rounded' />
                                    <div className='flex flex-col justify-between flex-grow m-2 bg-gray-100 p-2 rounded'>
                                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xl font-bold'>Rs. {item.price}.00</p>
                                            <button><IoHeart color={'red'} size={'1.4rem'} /></button>
                                        </div>
                                        <button className='mt-2 w-full bg-black text-white py-2 rounded' onClick={() => handleSubmit(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            )))}
                    </>
                )}
            </div>
            <Cart id="cart" items={items} removeFromCart={removeFromCart} />
        </div>
    )
}

export default Main;