// app/checkout/creditCardInput.tsx
import React from 'react';

const CreditCardInput: React.FC = () => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="John" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Doe" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
        <input type="text" id="expDate" name="expDate" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
        <input type="text" id="cvv" name="cvv" placeholder="CVV" className="mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
    </div>
  );
};

export default CreditCardInput;
