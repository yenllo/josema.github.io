'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cart';

interface Workshop {
  id: string;
  title: string;
  description: string;
  price: number;
  date: string;
  schedule: string;
}

export default function WorkshopPage({ params }: { params: { id: string } }) {
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function fetchWorkshop() {
      try {
        const res = await fetch(`/api/workshops/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setWorkshop(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchWorkshop();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!workshop) {
    return <div>Workshop not found</div>;
  }

  const handleAddToCart = () => {
    if (workshop) {
      addToCart({
        id: workshop.id,
        name: workshop.title,
        price: workshop.price,
        type: 'workshop',
      });
    }
  };

  return (
    <div>
      <h1>{workshop.title}</h1>
      <p>{workshop.description}</p>
      <p>Price: ${workshop.price}</p>
      <p>Date: {new Date(workshop.date).toLocaleDateString()}</p>
      <p>Schedule: {workshop.schedule}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
