'use server';

import { getSession } from 'next-auth/react';
import { sql } from '@vercel/postgres';
import { sendOTPEmail } from '@/lib/otp';
import { AdapterUser } from 'next-auth/adapters';
import { auth } from '@/auth';

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

export async function getRole() {
  'use server';
  const session = await auth();
  const id =
    await sql`SELECT user_id FROM users WHERE email = ${session?.user?.email};`;
  const user_role =
    await sql`SELECT role_id FROM user_roles WHERE user_id = ${id.rows[0].user_id};`;

  return user_role.rows[0].role_id;
}
export async function getRoleList() {
  const roles = await sql`SELECT * FROM roles;`;
  return roles.rows;
}
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

export async function createNewUser(email: string) {
  const username = email.split('@').shift();
  const name = email.split('@').shift();
  // const password = await hashPassword(formData.password);
  const userExists = await sql`
    SELECT EXISTS(SELECT 1 FROM users WHERE email = ${email});`;

  console.log(userExists.rows[0].exists);
  //create user if it does not exist
  if (userExists.rows[0].exists == false) {
    const { rows } = await sql`
    INSERT INTO users (name, email, username) 
    VALUES (${name}, ${email}, ${username}) 
    RETURNING user_id, name, email, email_verified;`;

    const newUserRole = await sql`
    INSERT INTO user_roles (user_id, role_id)
    VALUES (${rows[0].user_id}, 4);`;

    const newUser: AdapterUser = {
      ...rows[0],
      id: rows[0].user_id.toString(),
      emailVerified: rows[0].email_verified,
      email: rows[0].email
    };
    return newUser;
  } else {
    return null;
  }
}

export async function loginUser(formData: LoginForm) {
  const username = 'TemporaryName';
  const password = await hashPassword(formData.password);
  const { rows, fields } =
    await sql`INSERT INTO users (email,username,password) VALUES(${formData.email},${username},${password});`;
}
