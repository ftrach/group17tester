import NextAuth from 'next-auth';
declare module 'next-auth' {
  /**
   * Extends the built-in User model from NextAuth
   */
  interface User {
    role?: string; // Add the `role` property, optionally, as not all users might have this property defined.
  }
}

// declare module 'next-auth' {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
// //    */
//   interface Session {
//     user: {
//       /** Extending the built-in User type */
//       id?: string; // Assuming you want to add an `id` field
//       name?: string;
//       email?: string;
//       image?: string;
//       role?: string; // Custom field example
//     };
//   }
//   //   interface Session {
//   //     user: {
//   //       /** The user's postal address. */
//   //       accessToken:string,
//   //       id:string

//   //     };
//   //   }
//   //override User type
//   interface User {
//     id?: string;
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//     role: string | null;
//   }
// }
