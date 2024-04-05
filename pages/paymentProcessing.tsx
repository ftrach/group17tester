import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const PaymentProcessing: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate payment processing delay
    const delay = setTimeout(() => {
      // Once payment processing is complete, navigate to transaction confirmation
      router.push('/transactionConfirmation');
    }, 2000); // Simulate 2 seconds processing time (adjust as needed)

    // Clean up timeout on unmount
    return () => clearTimeout(delay);
  }, [router]);

  return (
    <div>
      <p>Processing your payment...</p>
    </div>
  );
};

export default PaymentProcessing;
