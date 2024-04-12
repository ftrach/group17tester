import React from 'react';
import { useCart } from './cartContext';

const CartSummary = () => {
  const { items } = useCart();

  return (
    <div>
      <h2>Cart Summary</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummary;
