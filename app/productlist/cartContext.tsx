import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  p_id: number; // Assuming `id` is replaced with `p_id`
  product_name: string;
  product_description: string;
  product_price: number;
  product_quantity: number;
  product_quantity_small: number;
  product_quantity_medium: number;
  product_quantity_large: number;
  product_quantity_extra_large: number;
  product_image_url: string;
  weight: number;
  height: number;
  length: number;
  width: number;
  date_added: Date; // Assuming you'll convert to Date object in JavaScript
  last_updated: Date; // Assuming the same as above
  status: 'Active' | 'Inactive';
  category: string;
}

interface CartContextType {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void; // Changed to number to match p_id type
  itemCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (item: Product) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = (p_id: number) => {
    setItems(prevItems => prevItems.filter(item => item.p_id !== p_id));
  };

  const itemCount = items.length;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
