// app/paymentcompletionpage/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

const PaymentCompletionPage = () => {
  const [invoiceId, setInvoiceId] = useState('');

  useEffect(() => {
    // Generate a fake invoice ID only once when the component mounts
    const fakeInvoiceId = `INV-${Math.floor(Math.random() * 1000000 + 1).toString().padStart(6, '0')}`;
    setInvoiceId(fakeInvoiceId);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center">Payment Complete</h1>
        <p className="text-gray-600 mt-4 text-center">Thank you for your purchase!</p>
        <div className="mt-6 p-4 border-t border-gray-300">
          <h2 className="text-sm font-semibold">Invoice ID:</h2>
          <p className="text-blue-500">{invoiceId}</p>
          <p>Your order has been successfully processed and will be shipped to you shortly.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompletionPage;
