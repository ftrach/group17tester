// app/transactionconfirmationpage/page.tsx
'use client';

import React, { useEffect } from 'react';

const TransactionConfirmationPage = () => {

  useEffect(() => {
    // Set a shorter delay for the redirect (e.g., 1.5 seconds)
    setTimeout(() => {
      window.location.href = '/paymentcompletion'; // Corrected the redirection path
    }, 1500); // 1500 milliseconds = 1.5 seconds
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center">Transaction Confirmation</h1>
        <p className="text-gray-600 mt-4 text-center">Your transaction has been processed.</p>
        <div className="mt-6 p-4 border-t border-gray-300">
          <p>Thank you for your transaction. You will be redirected shortly.</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionConfirmationPage;
