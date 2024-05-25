import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const total = 160.00;

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
    // Perform payment processing logic here
    setPaymentSuccessful(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Payment Details</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
          <input type="tel" id="phoneNumber" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold mb-2">Payment Method</label>
          <select id="paymentMethod" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {paymentMethod && (
          <div>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">Card Number</label>
              <input type="text" id="cardNumber" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
              <input type="text" id="expiryDate" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">CVV</label>
              <input type="text" id="cvv" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </div>
          </div>
        )}
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none" onClick={handlePayment}>
          Pay Now
        </button>
        <div className=' py-4'>
          {paymentSuccessful && ( // Conditionally render success message
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Payment successful!</strong>
          </div>
        )}
        </div>
        {/* <p className="text-gray-600 text-sm mt-2">Total Amount: Rs. {parseFloat(total).toFixed(2)}</p> */}
      </div>
    </div>
  );
};

export default PaymentPage;
