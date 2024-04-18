// app/products/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProductList } from '../lib/actions';
import Image from 'next/image';

type Product = {
  p_id: number;
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
  date_added: Date;
  last_updated: Date;
  status: 'Active' | 'Inactive';
  category: string;
};

const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [cart, setCart] = useState<any[]>([]);  // Use any type temporarily to avoid TS errors

  useEffect(() => {
    const localData = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    const cartItems = localData ? JSON.parse(localData) : [];
    setCart(cartItems);
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      const productList = await getProductList();
      setProductList(productList as Product[]);
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    const newItem = {
      p_id: product.p_id,
      name: product.product_name,
      price: product.product_price,
      quantity: 1
    };

    const existingIndex = cart.findIndex((item: any) => item.p_id === newItem.p_id);
    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="flex justify-between items-center p-4">
        <div> {/* Your site's logo or name here */} </div>
        <div className="relative">
          <Image src="/shoppingcart.png" alt="Cart" width={50} height={50} />
          <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-sm px-2">
            {totalItemsInCart}
          </span>
        </div>
      </header>
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <div>
          <h2>Products</h2>
          <p>This is the products page.</p>
          <br />
          <div className="flex flex-wrap justify-center gap-4">
            {productList.map((product) => (
              <ProductCard key={product.p_id} product={product} onAddToCart={() => addToCart(product)} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
