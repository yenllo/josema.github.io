import * as React from 'react';

interface OrderConfirmationEmailProps {
  orderId: string;
  totalPrice: number;
}

export const OrderConfirmationEmail: React.FC<Readonly<OrderConfirmationEmailProps>> = ({
  orderId,
  totalPrice,
}) => (
  <div>
    <h1>Thank you for your order!</h1>
    <p>Your order ID is: {orderId}</p>
    <p>Total price: ${totalPrice.toFixed(2)}</p>
  </div>
);
