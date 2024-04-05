// app/checkout/checkoutForm.tsx
import React, { useState } from 'react';
import CreditCardInput from './creditCardInput';
import AddressInput from './addressInput';
import PaymentButton from './paymentButton';

const CheckoutForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentAttempt = () => {
    if (!selectedCountry) {
      // Set an error message if no country is selected
      setErrorMessage("Please complete all fields to continue.");
    } else {
      // Clear any error message
      setErrorMessage("");
      // Assume this function handles the actual submission, like processing payment
      onSubmit();
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <CreditCardInput />
      <AddressInput selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <PaymentButton onPaymentAttempt={handlePaymentAttempt} />
    </form>
  );
};

export default CheckoutForm;
