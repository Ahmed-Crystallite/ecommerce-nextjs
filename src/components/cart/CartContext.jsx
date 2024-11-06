"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = () => setCartCount(prevCount => prevCount + 1);
  const addToCart = (product) => {
    if (!product.id) {
      return
    }
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      )

      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems]
        updatedItems[existingProductIndex] = {
          ...updatedItems[existingProductIndex],
          quantity: updatedItems[existingProductIndex].quantity + 1,
        }
        return updatedItems
      }
      const newItem = { ...product, quantity: 1 }
      return [...prevItems, newItem]
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }
  const calculateTotalCost = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.amount * item.quantity
      }, 0)
      .toFixed(2)
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        incrementCartCount,
        addToCart,
        updateQuantity,
        removeItem,
        calculateTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
