import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To receive the state passed from Cart
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    const location = useLocation();
    const { cartItems, totalAmount } = location.state || {}; // Retrieve cartItems and totalAmount from state

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const handlePayment = () => {
        console.log('Processing payment...');
        setPaymentSuccessful(true);
    };

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-900 text-white px-4 sm:px-8 lg:px-16 py-10">
            <div className="bg-gray-800 p-10 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col lg:flex-row gap-8">
                {/* Left Side - Cart Items */}
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">Your Cart</h2>
                    {cartItems && cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="mb-4 flex items-center space-x-4">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded border-2 border-gray-500"/>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                                        <p className="text-gray-400">Quantity: {item.quantity}</p>
                                        <p className="text-lg font-semibold text-yellow-400">Price: Rs. {item.price * item.quantity}.00</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No items in cart.</p>
                    )}
                    <h3 className="text-2xl font-semibold mt-4 text-gray-300">Total: Rs. {totalAmount}.00</h3>
                </div>

                {/* Right Side - Payment Form */}
                <div className="w-full lg:w-2/3">
                    <h1 className="text-4xl font-bold mb-6 text-green-400">Payment Details</h1>
                    <div className="bg-gray-700 p-8 rounded-lg shadow-md">
                        {/* Payment form */}
                        <div className="mb-2">
                            <label htmlFor="username" className="block text-lg font-medium text-gray-200 mb-2">Username</label>
                            <input type="text" id="username" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-200 mb-2">Phone Number</label>
                            <input type="tel" id="phoneNumber" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="paymentMethod" className="block text-lg font-medium text-gray-200 mb-2">Payment Method</label>
                            <select id="paymentMethod" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                <option value="">Select Payment Method</option>
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>
                        
                        {/* Conditional payment fields based on the selected payment method */}
                        {paymentMethod && (
                            <div>
                                <div className="mb-6">
                                    <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-200 mb-2">Card Number</label>
                                    <input type="text" id="cardNumber" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                                </div>
                                <div className="mb-6 flex justify-between">
                                    <div className="w-1/2 pr-2">
                                        <label htmlFor="expiryDate" className="block text-lg font-medium text-gray-200 mb-2">Expiry Date</label>
                                        <input type="text" id="expiryDate" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label htmlFor="cvv" className="block text-lg font-medium text-gray-200 mb-2">CVV</label>
                                        <input type="text" id="cvv" className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-green-500 bg-gray-800 text-white" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Payment button */}
                        <button className="mt-6 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-lg font-semibold w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105" onClick={handlePayment}>
                            Pay Now
                        </button>

                        {/* Payment success message */}
                        <div className="mt-4">
                            {paymentSuccessful && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Payment successful!</strong>
                                </div>
                            )}
                        </div>

                        {/* Continue Shopping Section */}
                        <div className='mt-8 text-center'>
                            <Link to="/home" className='text-green-500 hover:underline'>
                                Continue Shopping
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
