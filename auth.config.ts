import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { validateOTP } from '@/lib/otp';
import type { NextAuthConfig } from 'next-auth';
import { sql } from '@vercel/postgres';

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
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        const role = await sql`
      SELECT roles.role_name
      FROM users
      JOIN user_roles ON users.user_id = user_roles.user_id
      JOIN roles ON user_roles.role_id = roles.role_id
      WHERE users.email = ${user.email};
      `;
        if (role.rows.length > 0) {
          (token.user as any).role = role.rows[0].role_name;
        }
      }

      return token;
    },
    async session({ session, token }) {
      //return users in session
      (session.user as any).role = (token.user as any).role;

      return session;
    }
  }
} satisfies NextAuthConfig;
