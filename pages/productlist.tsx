'use client';

import React from 'react';
import Products from '../app/productlist/products'; // Adjust path as necessary
import { Card, Title, Text } from '@tremor/react';

const ProductListPage = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card className="mt-8">
        <Title>Our Products</Title>
        <Text>Explore our wide range of products</Text>
        <div className="mt-6">
          <Products />
        </div>
      </Card>
    </main>
  );
};

export default ProductListPage;
