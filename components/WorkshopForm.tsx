'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { WorkshopStatus } from '@prisma/client';

interface WorkshopFormProps {
  workshop?: Workshop;
}

interface Workshop {
  id?: string;
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

export default function WorkshopForm({ workshop }: WorkshopFormProps) {
  const [formData, setFormData] = useState<Workshop>(
    workshop || {
      title: '',
      description: '',
      price: 0,
      date: new Date().toISOString().split('T')[0],
      schedule: '',
      classCount: 0,
      maxCapacity: 0,
      location: '',
      materialsIncluded: true,
      status: WorkshopStatus.disponible,
    }
  );
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    // @ts-ignore
    const checked = e.target.checked;
    setFormData({ ...formData, [name]: isCheckbox ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = workshop ? `/api/workshops/${workshop.id}` : '/api/workshops';
    const method = workshop ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price as any),
        classCount: parseInt(formData.classCount as any),
        maxCapacity: parseInt(formData.maxCapacity as any),
        date: new Date(formData.date),
      }),
    });

    router.push('/admin/workshops');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields for all workshop properties here */}
      <button type="submit">{workshop ? 'Update' : 'Create'}</button>
    </form>
  );
}
