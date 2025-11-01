'use client';

import { useEffect, useState } from 'react';

interface Order {
  id: string;
  totalPrice: number;
  orderItems: {
    name: string;
    quantity: number;
    price: number;
  }[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  } | null;
}

export default function OrderPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await fetch(`/api/orders/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setOrder(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchOrder();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <h2>Order ID: {order.id}</h2>
      <h3>Total: ${order.totalPrice.toFixed(2)}</h3>

      {order.shippingAddress && (
        <div>
          <h4>Shipping to:</h4>
          <p>{order.shippingAddress.address}</p>
          <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
          <p>{order.shippingAddress.country}</p>
        </div>
      )}
    </div>
  );
}
