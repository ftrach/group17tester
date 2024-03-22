import Navbar from './navbar';
import { auth } from '@/auth';

export default async function Nav() {
  const session = await auth();
  const cartItems: any[] = []; // Explicitly specify the type as any[]
  return <Navbar user={session?.user} cartItems={cartItems} />;
}
