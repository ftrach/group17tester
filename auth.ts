import NextAuth from 'next-auth';
import authConfig from './auth.config';
import vercelPostgresAdapter from '@/lib/vercelPostgresAdapter';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  ...authConfig
});
