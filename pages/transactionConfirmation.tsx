import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const TransactionConfirmation: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate redirection to payment completion after confirmation
    const delay = setTimeout(() => {
      router.push('/paymentCompletion');
    }, 3000); // Simulate 3 seconds delay before redirecting (adjust as needed)

    // Clean up timeout on unmount
    return () => clearTimeout(delay);
  }, [router]);

  return (
    <div>
      <p>Transaction confirmed. Redirecting...</p>
    </div>
  );
};

export default TransactionConfirmation;
