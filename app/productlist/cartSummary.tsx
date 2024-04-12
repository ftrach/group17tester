import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const CartSummary = () => {
  const { items } = useContext(CartContext) || { items: [] }; // Use context or default value

  return (
    <div>
      {items.map(item => (
        <div key={item.p_id}>
          <h3>{item.product_name}</h3>
          <p>{item.product_description}</p>
          <p>${item.product_price}</p>
          {/* Render additional properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
