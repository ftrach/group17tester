import React from 'react';
import { useCart } from './cartContext'; // Adjust the import path as necessary

const CartDisplay = () => {
  const { items } = useCart();

  if (items.length === 0) {
    return <div className="text-center my-4">Your cart is empty.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg py-2 px-4">
      <h2 className="text-lg font-semibold">Cart Items</h2>
      <ul className="my-2">
        {items.map((item, index) => (
          <li key={index} className="border-b last:border-b-0 py-2">
            {item.product_name} - ${item.product_price.toFixed(2)} {/* Assuming product_price is a number and you want to format it as a currency */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDisplay;
