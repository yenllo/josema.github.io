import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { sendEmail } from '@/utils/emails';
import { OrderConfirmationEmail } from '@/components/emails/OrderConfirmation';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  try {
    const { orderItems, shippingAddress, paymentMethod, totalPrice } = await request.json();

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        paymentMethod,
        totalPrice,
        shippingAddress: shippingAddress ? { create: shippingAddress } : undefined,
        orderItems: {
          create: orderItems.map((item: any) => ({
            price: item.price,
            quantity: item.quantity,
            ...(item.type === 'product'
              ? { productId: item.id }
              : { workshopId: item.id }),
          })),
        },
      },
      include: {
        orderItems: true,
        shippingAddress: true,
      },
    });

    await sendEmail(
      user.email,
      'Order Confirmation',
      OrderConfirmationEmail({ orderId: order.id, totalPrice: order.totalPrice })
    );

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
