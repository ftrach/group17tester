import React, { useEffect, useState } from 'react';
import { useCart } from './cartContext'; // Adjust the import path if necessary

// Assuming each product has an id, name, description, and price
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    // Fetch your products from wherever they are stored
    fetch('/test.json') // Adjust this path to where your products data is stored
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.description}</p>
            <p className="mt-1 max-w-2xl text-sm font-semibold text-gray-900">${product.price}</p>
            <button 
              onClick={() => addItem(product)}
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
