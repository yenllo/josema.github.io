'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // @ts-ignore
  if (status === 'unauthenticated' || !session?.user?.isAdmin) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin/products">Manage Products</Link>
          </li>
          <li>
            <Link href="/admin/workshops">Manage Workshops</Link>
          </li>
          <li>
            <Link href="/admin/orders">Manage Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
