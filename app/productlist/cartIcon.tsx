// cartIcon.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

interface CartItem {
  id: string;
  quantity: number;
}

const CartIcon = () => {
    const [itemCount, setItemCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const updateItemCount = () => {
            const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
            const count = cart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
            setItemCount(count);
        };

        updateItemCount();

        const handleCartChange = () => {
            updateItemCount();
        };

        window.addEventListener('cartUpdated', handleCartChange);

        return () => {
            window.removeEventListener('cartUpdated', handleCartChange);
        };
    }, []);

    const navigateToCheckout = () => {
        router.push('/checkout');
    };

    return (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000, cursor: 'pointer' }} onClick={navigateToCheckout}>
            <img src="/shoppingcart.png" alt="Cart" style={{ width: 30, height: 30 }} />
            <span style={{ position: 'absolute', top: -10, right: -10, backgroundColor: 'red', borderRadius: '50%', color: 'white', padding: '2px 6px', fontSize: '0.75rem' }}>
                {itemCount}
            </span>
        </div>
    );
};

export default CartIcon;
