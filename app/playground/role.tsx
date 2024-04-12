'use client';
import React, { useEffect, useState } from 'react';
import { getRole, getRoleList } from '../lib/actions'; // Replace with your actual import
import { QueryResultRow } from '@vercel/postgres';
import { useSession } from 'next-auth/react';
const role_list = [
  { name: '/home', value: 1230 },
  { name: '/contact', value: 751 },
  { name: '/gallery', value: 471 },
  { name: '/august-discount-offer', value: 280 },
  { name: '/case-studies', value: 78 }
];
interface User {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: string | null;
}

export const RoleList = () => {
  const { data: session, status } = useSession();
  // const [role, setRole] = useState(null);

  const [list, setList] = useState<QueryResultRow[]>([]);

  useEffect(() => {
    // async function fetchRole() {
    //   //fetch the role list from the role table
    //   if (session?.user?.role === 'Admin') {
    //     const roleList = await getRoleList();
    //     setList(roleList); // Replace role_list with your actual list
    //   }
    // }
    if (session) {
      console.log(session);
      // fetchRole();
    }
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session && session.user && session.user.role === 'Admin' && (
        <div>
          <>
            {list.map((item: QueryResultRow) => (
              <ul key={item.role_id}>
                <li key={item.role_name}>{item.role_name}</li>
                <li key={item.role_name}>{item.role_description}</li>
              </ul>
            ))}
          </>
        </div>
      )}
      {session?.user?.role !== 'ADMIN' && (
        <div>
          <>You are not an admin, you only have View Access</>
        </div>
      )}
    </div>
  );
};

export default RoleList;
