// group_17/app/CartDropdown.tsx

import { Fragment } from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

interface Props {
  items: CartItem[] | undefined; // Allow items to be undefined
}

const CartDropdown: React.FC<Props> = ({ items }) => {
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        {items && items.length ? (
          items.map((item) => (
            <p key={item.id} className="block px-4 py-2 text-sm text-gray-700">
              {item.name} - {item.quantity}
            </p>
          ))
        ) : (
          <p className="block px-4 py-2 text-sm text-gray-700">Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
