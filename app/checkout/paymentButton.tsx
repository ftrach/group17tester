// app/checkout/paymentButton.tsx
import React from 'react';

interface PaymentButtonProps {
  onPaymentAttempt: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ onPaymentAttempt }) => {
  return (
    <button onClick={onPaymentAttempt} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Pay Now
    </button>
  );
};

export default PaymentButton;
