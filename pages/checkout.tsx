// pages/checkout.tsx
import React from 'react';
import { useRouter } from 'next/router';
import CheckoutForm from '../app/checkout/checkoutForm';
import { useCart } from '../app/productlist/cartContext'; // Ensure this path is correct

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { items } = useCart(); // Use the useCart hook to access cart items

  const handlePaymentSubmit = () => {
    // Navigate to payment processing upon form submission
    router.push('/paymentProcessing');
  };

  // Simplified total price calculation assuming each product quantity is 1
  const totalPrice = items.reduce((acc: number, item) => acc + item.price, 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate sm:mb-4">Checkout</h2>
      {/* Display the calculated total price */}
      <div className="mb-4">Total Price: ${totalPrice.toFixed(2)}</div>
      <CheckoutForm onSubmit={handlePaymentSubmit} />
    </div>
  );
};

export default CheckoutPage;
