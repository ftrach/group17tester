import React from 'react';
import PaymentCompletionComponent from '../app/paymentcompletion/paymentCompletionComponent'; // Corrected import statement

const PaymentCompletion: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-start items-center pt-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <PaymentCompletionComponent />
      </div>
    </div>
  );
};

export default PaymentCompletion;
