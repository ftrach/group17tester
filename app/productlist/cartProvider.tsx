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
  const removeItem = (itemId: string) => setItems(currentItems => currentItems.filter(item => item.id !== itemId));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
