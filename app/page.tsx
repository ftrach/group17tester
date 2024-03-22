export const revalidate = 3600;
import { sql } from '@vercel/postgres';
// Import necessary modules and components
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import TailwindComponent from './TailwindComponent';
import { redirect } from 'next/navigation';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  // Logic to determine if a redirect is needed
  // const accessDenied = true;
  // if (accessDenied) {
  //   redirect('/login');
  // }
  // Commented out PostgreSQL query
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT *
    FROM users 
    WHERE username ILIKE ${'%' + search + '%'};
  `;
  // console.log(result); // Commented out console log statement

  // Since the PostgreSQL query is commented out, users will be empty for now
  // const users: User[] = [];
  const users = result.rows as User[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
      <TailwindComponent></TailwindComponent>
    </main>
  );
}
