// app/transactionconfirmation/page.tsx
import React from 'react';
import Link from 'next/link';

const TransactionConfirmation = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-semibold">Payment Successful!</h1>
      <p>Your transaction has been processed successfully.</p>
      <Link href="/"><a className="text-blue-500 hover:underline">Go back to home</a></Link>
    </div>
  );
};

export default TransactionConfirmation;
