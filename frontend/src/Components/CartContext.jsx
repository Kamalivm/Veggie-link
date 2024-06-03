import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const incrementQuantity = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decrementQuantity = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const [favoriteItems, setFavoriteItems] = useState([]);

    const addToFavorites = (product) => {
        setFavoriteItems((prevItems) => {
            if (!prevItems.some(item => item.id === product.id)) {
                return [...prevItems, product];
            }
            return prevItems;
        });
    };

    const removeFromFavorites = (productId) => {
        setFavoriteItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, favoriteItems,removeFromCart,removeFromFavorites,addToFavorites, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
