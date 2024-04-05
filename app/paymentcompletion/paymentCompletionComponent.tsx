import React from 'react';

const PaymentCompletionComponent: React.FC = () => {
  // Generate a fake invoice ID on the client-side only
  const invoiceId = 'INV-123456';

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful</h1>
      <p className="mb-2">Thank you for your payment. Your transaction has been completed.</p>
      <p>Your Invoice ID: <span className="font-bold">{invoiceId}</span></p>
    </div>
  );
};

export default PaymentCompletionComponent;
