// app/checkout/page.tsx
'use client';

import React from 'react';
import CheckoutForm from '../components/CheckoutForm'; // Make sure the path matches your structure

const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
