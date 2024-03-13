import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { validateOTP } from '@/lib/otp';
import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [
    GitHub,
    Credentials({
      name: 'OTP',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your Email'
        },
        otp: { label: 'OTP', type: 'text', placeholder: 'Enter your OTP' }
      },
      async authorize(credentials: Partial<Record<'email' | 'otp', unknown>>) {
        try {
          const user = await validateOTP(credentials);
          if (user) {
            console.log('auth successful');
            return user;
          } else {
            throw new Error('Invalid OTP');
          }
        } catch (error) {
          throw new Error('Failed to validate OTP');
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session;
    }
  }
} satisfies NextAuthConfig;
