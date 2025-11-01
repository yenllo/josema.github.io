'use client';

import { useCartStore } from '@/store/cart';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: 'Chile',
  });

  const containsPhysicalProduct = items.some(item => item.type === 'product');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      router.push('/login');
      return;
    }

    // In a real app, you would integrate with a payment gateway here.
    // For this example, we'll just simulate a successful payment.

    const orderData = {
      orderItems: items,
      shippingAddress: containsPhysicalProduct ? shippingAddress : null,
      paymentMethod: 'Simulated Payment',
      totalPrice: total,
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        const order = await res.json();
        useCartStore.getState().clearCart();
        router.push(`/orders/${order.id}`);
      } else {
        // Handle error
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>

      <form onSubmit={handleSubmit}>
        {containsPhysicalProduct && (
          <div>
            <h2>Shipping Address</h2>
            <input name="address" value={shippingAddress.address} onChange={handleInputChange} placeholder="Address" required />
            <input name="city" value={shippingAddress.city} onChange={handleInputChange} placeholder="City" required />
            <input name="postalCode" value={shippingAddress.postalCode} onChange={handleInputChange} placeholder="Postal Code" required />
            <input name="country" value={shippingAddress.country} onChange={handleInputChange} placeholder="Country" required />
          </div>
        )}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
