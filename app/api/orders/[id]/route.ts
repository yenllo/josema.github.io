import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: params.id },
      include: {
        orderItems: {
          include: {
            product: true,
            workshop: true,
          },
        },
        shippingAddress: true,
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    const transformedOrder = {
      ...order,
      orderItems: order.orderItems.map(item => ({
        ...item,
        name: item.product?.name || item.workshop?.title,
      })),
    };

    return NextResponse.json(transformedOrder);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 });
  }
}
