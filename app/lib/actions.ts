'use server';

import { getSession } from 'next-auth/react';
import { sql } from '@vercel/postgres';
import { sendOTPEmail } from '@/lib/otp';

interface LoginForm {
  email: string;
  password: string;
}

const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password: string) {
  return bcrypt.hash(password, saltRounds);
}

// export async function authenticate(_currentState: unknown, formData: FormData) {
//   try {
//     //check if password matches from database
//     await signIn('credentials', formData);
//   } catch (error: any) {
//     if (error) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

export async function serverAction() {
  const session = await getSession();
  // const userRole = session?.user?.role;

  // Check if user is authorized to perform the action
  // if (userRole !== 'admin') {
  //   throw new Error(
  //     'Unauthorized access: User does not have admin privileges.'
  //   );
  // }

  // Proceed with the action for authorized users
  // ... implementation of the action
}

export async function createNewUser(formData: LoginForm) {
  const username = 'TemporaryName';
  const password = await hashPassword(formData.password);
  const { rows, fields } =
    await sql`INSERT INTO users (email,username,password) VALUES(${formData.email},${username},${password});`;

  // // Check if user is authorized to perform the action
  // if (userRole !== 'admin') {
  //   throw new Error(
  //     'Unauthorized access: User does not have admin privileges.'
  //   );
  // }

  // Proceed with the action for authorized users
  // ... implementation of the action
}
export async function loginUser(formData: LoginForm) {
  const username = 'TemporaryName';
  const password = await hashPassword(formData.password);
  const { rows, fields } =
    await sql`INSERT INTO users (email,username,password) VALUES(${formData.email},${username},${password});`;

  // // Check if user is authorized to perform the action
  // if (userRole !== 'admin') {
  //   throw new Error(
  //     'Unauthorized access: User does not have admin privileges.'
  //   );
  // }

  // Proceed with the action for authorized users
  // ... implementation of the action
}
