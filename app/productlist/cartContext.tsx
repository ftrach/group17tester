import React, { createContext, useContext } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface CartContextType {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


