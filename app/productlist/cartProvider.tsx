import React, { useState, useEffect, ReactNode, FC } from 'react';
import { CartContext, Product } from './cartContext';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  // Fetch items from localStorage only on client-side
  useEffect(() => {
    const localData = typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
    if (localData) {
      setItems(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item: Product) => setItems(currentItems => [...currentItems, item]);
  const removeItem = (p_id: number) => setItems(currentItems => currentItems.filter(item => item.p_id !== p_id));
  const itemCount = items.length; // Calculate item count

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
