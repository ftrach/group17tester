import React from 'react';
import { useRouter } from 'next/router';

const TransactionConfirmation: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Transaction Confirmation</h1>
      <p>Your transaction has been confirmed!</p>
      <button onClick={() => router.push('/')}>Continue Shopping</button>
    </div>
  );
};

export default TransactionConfirmation;
