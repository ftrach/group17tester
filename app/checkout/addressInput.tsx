// app/checkout/addressInput.tsx
import React from 'react';

interface AddressInputProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ selectedCountry, setSelectedCountry }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input type="text" id="address" name="address" placeholder="1234 Main St" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <select id="country" name="country" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">Select a country</option>
          <option value="USA">United States</option>
          <option value="CAN">Canada</option>
          {/* Additional country options */}
        </select>
      </div>
    </div>
  );
};

export default AddressInput;
