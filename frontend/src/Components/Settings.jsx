import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUser,
    FaBell,
    FaPalette,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaHome,
} from "react-icons/fa";

const Settings = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div>
                        <h2 className="text-xl font-bold text-green-400 mb-4">Profile Settings</h2>
                        <form className="space-y-4 max-w-md">
                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block text-base mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="w-full p-2 bg-gray-700 rounded focus:ring focus:ring-green-400"
                                    placeholder="Enter your username"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-base mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 bg-gray-700 rounded focus:ring focus:ring-green-400"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-base mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    className="w-full p-2 bg-gray-700 rounded focus:ring focus:ring-green-400"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="address" className="block text-base mb-2">
                                    Address
                                </label>
                                <textarea
                                    id="address"
                                    rows="3"
                                    className="w-full p-2 bg-gray-700 rounded focus:ring focus:ring-green-400"
                                    placeholder="Enter your address"
                                ></textarea>
                            </div>

                            {/* Save Changes Button */}
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
                                Save Changes
                            </button>
                        </form>
                    </div>
                );

                case "account":
                    return (
                        <div>
                            <h2 className="text-xl font-bold text-green-400 mb-4">Account Settings</h2>
                            <form className="space-y-4 max-w-md">
                                <div>
                                    <label htmlFor="password" className="block text-base mb-2">
                                        Change Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            id="password"
                                            className="w-full p-2 bg-gray-700 rounded focus:ring focus:ring-green-400"
                                            placeholder="Enter new password"
                                        />
                                        <span
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                        >
                                            {passwordVisible ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="deleteAccount" className="block text-base mb-2">
                                        Delete Account
                                    </label>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
                                        Delete My Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    );    

            case "notifications":
                return (
                    <div>
                        <h2 className="text-xl font-bold text-green-400 mb-4">Notification Settings</h2>
                        <div className="space-y-4 max-w-md">
                            <div className="flex items-center justify-between">
                                <span>Email Notifications</span>
                                <input type="checkbox" className="w-5 h-5" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>SMS Notifications</span>
                                <input type="checkbox" className="w-5 h-5" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Push Notifications</span>
                                <input type="checkbox" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                );

            case "theme":
                return (
                    <div>
                        <h2 className="text-xl font-bold text-green-400 mb-4">Theme Settings</h2>
                        <div className="space-y-4 max-w-md">
                            <label htmlFor="themeSelect" className="block text-base mb-2">
                                Choose Theme
                            </label>
                            <select
                                id="themeSelect"
                                className="w-full bg-gray-700 p-2 rounded focus:ring focus:ring-green-400"
                            >
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                                <option value="system">System Default</option>
                            </select>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-screen flex bg-gray-900 text-gray-200">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 p-6">
                <h1 className="text-3xl font-bold text-green-400 mb-6">Settings</h1>
                <ul className="space-y-4">
                    <li
                        className={`flex items-center p-3 cursor-pointer rounded ${
                            activeTab === "profile" ? "bg-gray-700 text-green-400" : "hover:bg-gray-700"
                        }`}
                        onClick={() => setActiveTab("profile")}>
                        <FaUser className="mr-2" />
                        Profile
                    </li>
                    <li
                        className={`flex items-center p-3 cursor-pointer rounded ${
                            activeTab === "account" ? "bg-gray-700 text-green-400" : "hover:bg-gray-700"
                        }`}
                        onClick={() => setActiveTab("account")}>
                        <FaLock className="mr-2" />
                        Account
                    </li>
                    <li
                        className={`flex items-center p-3 cursor-pointer rounded ${
                            activeTab === "notifications" ? "bg-gray-700 text-green-400" : "hover:bg-gray-700"
                        }`}
                        onClick={() => setActiveTab("notifications")}>
                        <FaBell className="mr-2" />
                        Notifications
                    </li>
                    <li
                        className={`flex items-center p-3 cursor-pointer rounded ${
                            activeTab === "theme" ? "bg-gray-700 text-green-400" : "hover:bg-gray-700"
                        }`}
                        onClick={() => setActiveTab("theme")}>
                        <FaPalette className="mr-2" />
                        Theme
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-8">
                {/* Navigation to Main Page */}
                <div className="mb-6 flex justify-between items-center">
                    {/* Button style for continue shopping */}
                    <Link to="/home">
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center">
                            <FaHome className="mr-2" />
                            Continue shopping
                        </button>
                    </Link>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default Settings;
