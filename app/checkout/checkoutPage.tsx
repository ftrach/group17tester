import React, { useState, useEffect } from 'react';
import CheckoutForm from './checkoutForm';
import { useRouter } from 'next/router';

// Update this interface if you have it defined elsewhere
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity?: number; // Optional based on your actual data structure
}

const CheckoutPage = () => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    // Calculate total price, assuming quantity is either stored or defaults to 1
    const calculatedTotal = products.reduce((acc: number, product: Product) => {
      return acc + (product.price * (product.quantity || 1)); // Default quantity to 1 if not present
    }, 0);

    setTotalPrice(calculatedTotal);
  }, []);

  const handleSubmit = () => {
    router.push('/paymentSuccess');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CheckoutPage;
