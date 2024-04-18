// app/checkout/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import CheckoutForm from '../components/CheckoutForm'; // Ensure this path matches your structure

type CartItem = {
  p_id: number;
  product_name: string;   // This should match 'product_name' as stored from Products page
  product_price: number;  // This should match 'product_price' as stored from Products page
  quantity: number;       // This should properly reflect the quantity added to cart
};

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const loadedCart = localStorage.getItem('cart');
      if (loadedCart) {
        const parsedCart: CartItem[] = JSON.parse(loadedCart);
        // Verify that each item has all necessary properties with correct types
        const isValid = parsedCart.every(item =>
          item.hasOwnProperty('p_id') && typeof item.p_id === 'number' &&
          item.hasOwnProperty('product_name') && typeof item.product_name === 'string' &&
          item.hasOwnProperty('product_price') && typeof item.product_price === 'number' &&
          item.hasOwnProperty('quantity') && typeof item.quantity === 'number'
        );
        if (!isValid) {
          throw new Error("Invalid cart data format");
        }
        setCartItems(parsedCart);
        calculateTotal(parsedCart);
      } else {
        throw new Error("No cart items found");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load cart data");
    }
  }, []);

  const calculateTotal = (items: CartItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
    const taxRate = 0.1;  // Assuming a tax rate of 10%
    const totalWithTax = subtotal + (subtotal * taxRate);
    setTotal(totalWithTax);
  };

  const handleRemove = (p_id: number) => {
    const updatedCart = cartItems.filter(item => item.p_id !== p_id);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Update localStorage
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
            <p className="text-lg font-bold mb-4">Total (incl. taxes): ${total.toFixed(2)}</p>
            <CheckoutForm />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
