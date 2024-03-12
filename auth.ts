'use server';
import { getSession } from 'next-auth/react';
import { sql } from '@vercel/postgres';

export async function signIn(type: string, payload: any) {
  const session = await getSession();

  const result = await sql`
    SELECT id, username, email 
    FROM users 
    WHERE name ILIKE ${'%' + payload.username + '%'};
  `;
  if (result) return true;
  // Check if user is authorized to perform the action
  // if (userRole !== 'admin') {
  //   throw new Error(
  //     'Unauthorized access: User does not have admin privileges.'
  //   );
  // }
}
