'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCategory, ProductStatus } from '@prisma/client';

interface ProductFormProps {
  product?: Product;
}

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  sku: string;
  stockQuantity: number;
  category: ProductCategory;
  weight_kg: number;
  images: string;
  status: ProductStatus;
  dimension: {
    length: number;
    width: number;
    height: number;
  };
}

export default function ProductForm({ product }: ProductFormProps) {
  const [formData, setFormData] = useState<Product>(
    product || {
      name: '',
      description: '',
      price: 0,
      sku: '',
      stockQuantity: 0,
      category: ProductCategory.Otros,
      weight_kg: 0,
      images: '',
      status: ProductStatus.borrador,
      dimension: { length: 0, width: 0, height: 0 },
    }
  );
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name in formData.dimension) {
      setFormData({
        ...formData,
        dimension: { ...formData.dimension, [name]: parseFloat(value) },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = product ? `/api/products/${product.id}` : '/api/products';
    const method = product ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    router.push('/admin/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields for all product properties here */}
      <button type="submit">{product ? 'Update' : 'Create'}</button>
    </form>
  );
}
