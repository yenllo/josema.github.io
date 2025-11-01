'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Workshop {
  id: string;
  title: string;
  price: number;
}

export default function WorkshopsPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkshops() {
      try {
        const res = await fetch('/api/workshops');
        if (res.ok) {
          const data = await res.json();
          setWorkshops(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchWorkshops();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Workshops</h1>
      <ul>
        {workshops.map((workshop) => (
          <li key={workshop.id}>
            <Link href={`/workshops/${workshop.id}`}>
              {workshop.title} - ${workshop.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
