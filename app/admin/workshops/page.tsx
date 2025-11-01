'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Workshop {
  id: string;
  title: string;
  date: string;
  maxCapacity: number;
  currentBookings: number;
}

export default function AdminWorkshopsPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    fetch('/api/workshops')
      .then((res) => res.json())
      .then(setWorkshops);
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this workshop?')) {
      await fetch(`/api/workshops/${id}`, { method: 'DELETE' });
      setWorkshops(workshops.filter((w) => w.id !== id));
    }
  };

  return (
    <div>
      <h1>Manage Workshops</h1>
      <Link href="/admin/workshops/new">Create New Workshop</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Capacity</th>
            <th>Bookings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop) => (
            <tr key={workshop.id}>
              <td>{workshop.title}</td>
              <td>{new Date(workshop.date).toLocaleDateString()}</td>
              <td>{workshop.maxCapacity}</td>
              <td>{workshop.currentBookings}</td>
              <td>
                <Link href={`/admin/workshops/${workshop.id}/edit`}>Edit</Link>
                <button onClick={() => handleDelete(workshop.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
