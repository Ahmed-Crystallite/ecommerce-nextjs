"use client";
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProductIndex = prevItems.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingProductIndex].quantity += 1;
                return updatedItems;
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
