import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';

const Cart = ({ items, removeFromCart }) => {
  // Initialize state for quantities
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Initialize quantities state with default value of 1 for each item
    const initialQuantities = items.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [items]);

  // Handle quantity change
  const handleQuantityChange = (id, value) => {
    const newValue = value >= 1 ? value : 1;
    setQuantities({
      ...quantities,
      [id]: newValue,
    });
  };

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    const itemQuantity = quantities[item.id] || 1;
    return total + item.price * itemQuantity;
  }, 0);

  const shipping = items.length > 0 ? 20 : 0; // Assuming shipping is 20 if there are items in the cart
  const total = subtotal + shipping;

  // Check if items array is undefined or empty
  if (!items || items.length === 0) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div>
      <div className='w-11/12 m-auto py-10'>
        <h1 className='text-3xl font-bold'>Shopping Cart</h1>
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead className='border-b'>
                <tr>
                  <td className='text-gray-400 py-2'>Product</td>
                  <td className='text-gray-400 py-2'>Price</td>
                  <td className='text-gray-400 py-2'>Quantity</td>
                  <td className='text-gray-400 py-2'>Total</td>
                  <td className='text-gray-400 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                {items.map((item) => (
                  <tr key={item.id} className='border-dashed border-b'>
                    <td className='py-5'>
                      <div className='flex items-center space-x-3 py-2'>
                        <img src={item.img} alt={item.title} className='w-[100px] h-[100px] border rounded p-2'/>
                        <div>
                          <h1 className='text-xl font-bold'>{item.title}</h1>
                        </div>
                      </div>
                    </td>
                    <td>Rs. {item.price}.00</td>
                    <td>
                      <div className='border w-24 p-2'>
                        <input
                          type="number"
                          className='w-full outline-0'
                          value={quantities[item.id]}
                          min={1}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        />
                      </div>
                    </td>
                    <td>Rs. {(item.price * (quantities[item.id] || 1)).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)}>
                        <AiFillDelete size={20}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='my-5'>
              <NavLink to='/'>
                <button className='flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2'>
                  <BsArrowLeft/>
                  <span>Continue Shopping</span>
                </button>
              </NavLink>
            </div>
          </div>
          <div className='w-[40%] h-fit border rounded p-5 space-y-5'>
            <div className='flex justify-between items-center border-b border-dashed p-2'>
              <h1 className='text-xl'>Sub Total</h1>
              <p>Rs. {subtotal.toFixed(2)}</p>
            </div>
            <div className='flex justify-between items-center border-b p-2'>
              <h1 className='text-xl'>Shipping</h1>
              <p>Rs. {shipping}.00</p>
            </div>
            <div className='flex justify-between items-center p-2'>
              <h1 className='text-xl'>Total</h1>
              <p>Rs. {total.toFixed(2)}</p>
            </div>
            <NavLink to={{ pathname: '/payment', state: { total: total.toFixed(2) } }}>
              <button className='w-full p-2 bg-gray-800 text-center text-white rounded'>
                Check Out
              </button>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
