import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const PaymentProcessing: React.FC = () => {
  const router = useRouter();

  // Simulating payment processing with a delay
  useEffect(() => {
    const paymentTimer = setTimeout(() => {
      // Redirect to transaction confirmation page after payment processing is complete
      router.push('/transaction-confirmation');
    }, 2000);

    return () => clearTimeout(paymentTimer);
  }, [router]);

  return (
    <div>
      <h1>Payment Processing</h1>
      <p>Please wait while we process your payment...</p>
    </div>
  );
};

export default PaymentProcessing;
