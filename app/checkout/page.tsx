// app/checkout/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import CheckoutForm from '../components/CheckoutForm'; // Ensure this path matches your structure

type CartItem = {
  p_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
};

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load cart data from localStorage and validate
    try {
      const loadedCart = localStorage.getItem('cart');
      if (!loadedCart) {
        throw new Error("No cart items found");
      }

      const parsedCart: CartItem[] = JSON.parse(loadedCart);
      if (!parsedCart.every(item => 
          item.hasOwnProperty('p_id') && typeof item.p_id === 'number' &&
          item.hasOwnProperty('product_name') && typeof item.product_name === 'string' &&
          item.hasOwnProperty('product_price') && typeof item.product_price === 'number' &&
          item.hasOwnProperty('quantity') && typeof item.quantity === 'number'
        )) {
        throw new Error("Invalid cart data format");
      }
      
      setCartItems(parsedCart);
      calculateTotal(parsedCart);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load cart data");
    }
  }, []);

  // Calculate total price including taxes
  const calculateTotal = (cartItems: CartItem[]) => {
    const subtotal = cartItems.reduce((total, item) => total + item.product_price * item.quantity, 0);
    const taxRate = 0.1; // Assuming tax rate is 10%
    setTotal(subtotal + subtotal * taxRate);
  };

  // Handle item removal from cart
  const handleRemove = (p_id: number) => {
    const updatedCart = cartItems.filter(item => item.p_id !== p_id);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <ul className="mb-4">
              {cartItems.map(item => (
                <li key={item.p_id} className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-lg font-semibold">{item.product_name} - ${item.product_price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <button onClick={() => handleRemove(item.p_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold">Total (incl. taxes): ${total.toFixed(2)}</p>
            <CheckoutForm />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
