'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProductList } from '../lib/actions';
import Image from 'next/image';

type Product = {
    p_id: number;
    product_name: string;
    product_description: string;
    product_price: string; // Assuming price might be received as a string from external data sources
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

type CartItem = {
    p_id: number;
    product_name: string;
    product_price: number; // Making sure product_price is a number
    quantity: number;
};

const Products = () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        async function fetchProduct() {
            const productList = await getProductList();
            setProductList(productList as Product[]);
        }
        fetchProduct();
    }, []);

    useEffect(() => {
        const localData = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
        if (localData) {
            const cartItems: CartItem[] = JSON.parse(localData).map((item: any) => ({
                ...item,
                product_price: Number(item.product_price) // Ensure conversion to number
            }));
            setCart(cartItems);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (product: Product) => {
        const newItem: CartItem = {
            p_id: product.p_id,
            product_name: product.product_name,
            product_price: Number(product.product_price), // Convert to number immediately
            quantity: 1  // Initialize quantity
        };

        const existingIndex = cart.findIndex((item) => item.p_id === newItem.p_id);
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1; // Increment the quantity
        } else {
            cart.push(newItem); // Add new item to the cart
        }
        setCart([...cart]); // Update state to trigger re-render
    };

    return (
        <>
            <header className="flex justify-between items-center p-4">
                <div> {/* Your site's logo or name here */} </div>
                <div className="relative">
                    <Image src="/shoppingcart.png" alt="Cart" width={50} height={50} />
                    <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-sm px-2">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                </div>
            </header>
            <main className="p-4 md:p-10 mx-auto max-w-7xl">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {productList.map((product) => (
                        <ProductCard key={product.p_id} product={product} onAddToCart={() => addToCart(product)} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Products;
