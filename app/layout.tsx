import './globals.css';

import Nav from './nav';

import { Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'BTS530 eCommerce Manager (Group 17)',
  description:
    'A platform for website owners to manage their products in website configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
