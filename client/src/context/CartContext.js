import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty) => {
    const exist = cartItems.find((x) => x._id === product._id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + qty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x._id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const createOrder = async (order) => {
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, createOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};
