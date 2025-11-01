'use client';

import { useEffect, useState } from 'react';
import WorkshopForm from '@/components/WorkshopForm';
import { WorkshopStatus } from '@prisma/client';

interface Workshop {
  id: string;
  title: string;
  description: string;
  price: number;
  date: string;
  schedule: string;
  classCount: number;
  maxCapacity: number;
  location: string;
  materialsIncluded: boolean;
  status: WorkshopStatus;
}

export default function EditWorkshopPage({ params }: { params: { id: string } }) {
  const [workshop, setWorkshop] = useState<Workshop | null>(null);

  useEffect(() => {
    fetch(`/api/workshops/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.date = new Date(data.date).toISOString().split('T')[0];
        setWorkshop(data);
      });
  }, [params.id]);

  if (!workshop) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Workshop</h1>
      <WorkshopForm workshop={workshop} />
    </div>
  );
}
