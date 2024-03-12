import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const handler = NextAuth({
  // Specify your authentication providers
  providers: [
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
    // Add other providers here
  ],
  // Custom pages for sign in, sign out, error, verify request, etc.
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error' // Error code passed in query string as ?error=
    // Add more custom pages if needed
  },

  // Callbacks for session, jwt, and more
  // callbacks: {
  //   async jwt(token, user) {
  //     // Custom logic to enrich the JWT token
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     // Custom logic to add more data to the session
  //     session.userId = token.id;
  //     return session;
  //   }
  //   // Add more callbacks as needed
  // },

  // Event callbacks for logging and analytics
  events: {
    signIn: async (message) => {
      /* on sign in */
    },
    signOut: async (message) => {
      /* on sign out */
    }
  }
});

export { handler as default };
