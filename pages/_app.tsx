import React from 'react';
import CartProvider from '../app/productlist/cartProvider';
import NavBar from '../app/navbar';
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Ensure this path is correct based on your project structure

function MyApp({ Component, pageProps }: AppProps) {
  // Extract the session from pageProps
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      <CartProvider>
        {/* Pass session to NavBar if it's required */}
        <NavBar session={session} />
        <main className="min-h-screen bg-gray-100">
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
