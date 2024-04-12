'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProductList } from '../lib/actions'; // Replace with your actual import
import { QueryResultRow } from '@vercel/postgres';

const Products = () => {
  const [productList, setProductList] = useState<QueryResultRow[]>([]);
  
  useEffect(() => {
    async function fetchProduct() {
      //fetch product list
      const productList = await getProductList();
      console.log(productList);
      setProductList(productList);
      console.log(productList)
    }

    fetchProduct();
  }, []); // Marking client as a dependency
  console.log("helloworld");


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div>
        <h2>Products</h2>
        <p>This is the products page.</p>
        <br />
        <div className="flex flex-wrap justify-center gap-4">
          {productList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
