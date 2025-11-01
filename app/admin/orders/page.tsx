'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  user: {
    name: string | null;
    email: string | null;
  };
  totalPrice: number;
  isPaid: boolean;
  createdAt: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // This is a placeholder for fetching orders with user data.
    // A dedicated API endpoint that joins user data will be needed.
    const fetchOrders = async () => {
      const res = await fetch('/api/orders/admin'); // Assuming an admin-specific endpoint
      const data = await res.json();
      setOrders(data);
    };
    // fetchOrders();
  }, []);

  return (
    <div>
      <h1>Manage Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total Price</th>
            <th>Paid</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user.name || order.user.email}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>{order.isPaid ? 'Yes' : 'No'}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>
                <Link href={`/admin/orders/${order.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
