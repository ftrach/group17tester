import React, { useEffect, useState } from 'react';
import { useCart, Product } from './cartContext'; // Adjust the import path if necessary
import { getProductList } from '../lib/actions';
import { QueryResultRow } from '@vercel/postgres';

const Products = () => {
  const [products, setProducts] = useState<QueryResultRow[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      // Fetch the role list from the role table
      const productList = await getProductList();
      setProducts(productList); // Ensure this is your actual list variable
    }
  
    fetchProducts();
    console.log(products);
  }, []);
  

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={product.p_id ? product.p_id.toString() : index.toString()} className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{product.product_name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.product_description}</p>
            <p className="mt-1 max-w-2xl text-sm font-semibold text-gray-900">${product.product_price}</p>
            <button 
              // onClick={() => addItem(product)}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
