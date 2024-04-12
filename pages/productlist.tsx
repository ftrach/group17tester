// ProductListPage.tsx
import React from 'react';
import Products from '../app/productlist/products';
import { Card, Title, Text } from '@tremor/react';
import CartIcon from '../app/productlist/cartIcon'; // Adjusted to lowercase 'c'

const ProductListPage = () => {
  return (
    <>
      <CartIcon />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Card className="mt-8">
          <Title>Our Products</Title>
          <Text>Explore our wide range of products</Text>
          <div className="mt-6">
            <Products />
          </div>
        </Card>
      </main>
    </>
  );
};

export default ProductListPage;
