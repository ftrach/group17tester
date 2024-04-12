// app/components/CheckoutForm.tsx
import React from 'react';

const CheckoutForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    window.location.href = '/paymentprocessing'; // Redirect to the payment processing page
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        className="block w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        className="block w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Address"
        className="block w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Credit Card Number"
        className="block w-full p-2 border rounded"
        required
      />
      <select className="block w-full p-2 border rounded" required>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">United Kingdom</option>
        {/* Add more options as needed */}
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
