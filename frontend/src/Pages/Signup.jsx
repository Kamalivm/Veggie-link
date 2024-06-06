import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
        password: '',
        confirmPassword: '',
        userType: 'farmer'
    });

    const navigate = useNavigate();

    const { name, location, phone, password, confirmPassword, userType } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post('http://localhost:5000/api/users/signup', formData);
            // alert(res.data.msg);
            // Redirect to the main page
            navigate('/home'); // Ensure '/home' matches your route setup
        } catch (err) {
            console.error(err);
            // Handle error
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-900 text-white'>
            <form onSubmit={handleSubmit} className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
                <h2 className='text-3xl font-bold text-green-400 mb-6 text-center'>Signup</h2>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        className='w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='location'>Location</label>
                    <input
                        type='text'
                        name='location'
                        value={location}
                        onChange={handleChange}
                        className='w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='phone'>Phone</label>
                    <input
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={handleChange}
                        className='w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        className='w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='confirmPassword'>Retype Password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        className='w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-sm font-medium mb-2' htmlFor='userType'>User Type</label>
                    <select
                        name='userType'
                        value={userType}
                        onChange={handleChange}
                        className='w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                    >
                        <option value='farmer'>Farmer</option>
                        <option value='customer'>Customer</option>
                    </select>
                </div>
                <button type='submit' className='w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300'>
                    Signup Now
                </button>
            </form>
        </div>
    );
};

export default Signup;
