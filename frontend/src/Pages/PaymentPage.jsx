import React, { useState } from 'react';

const PaymentPage = () => {
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
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Payment Details</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2">Username</label>
          <input type="text" id="username" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-semibold mb-2">Phone Number</label>
          <input type="tel" id="phoneNumber" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block font-semibold mb-2">Payment Method</label>
          <select id="paymentMethod" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {paymentMethod && (
          <div>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block font-semibold mb-2">Card Number</label>
              <input type="text" id="cardNumber" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/2 mr-2">
                <label htmlFor="expiryDate" className="block font-semibold mb-2">Expiry Date</label>
                <input type="text" id="expiryDate" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="cvv" className="block font-semibold mb-2">CVV</label>
                <input type="text" id="cvv" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:border-green-500 bg-gray-700" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            </div>
          </div>
        )}
        <button className="mt-5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-lg font-semibold w-full py-2 rounded-full transition-all duration-300 transform hover:scale-105" onClick={handlePayment}>
          Pay Now
        </button>
        <div className='mt-4'>
          {paymentSuccessful && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Payment successful!</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
