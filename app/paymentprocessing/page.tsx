// app/paymentprocessing/page.tsx
'use client';

import React, { useEffect } from 'react';

const PaymentProcessing = () => {
  useEffect(() => {
    // Simulate payment processing delay
    setTimeout(() => {
      // Redirect to the transaction confirmation page after processing
      window.location.href = '/transactionconfirmationpage'; // Updated URL
    }, 2000); // Simulates a 2-second processing delay
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Processing your payment...</p>
    </div>
  );
};

export default PaymentProcessing;
