'use client';

import { useEffect, useState } from 'react';
import ProductForm from '@/components/ProductForm';
import { ProductCategory, ProductStatus } from '@prisma/client';

interface Product {
  id: string;
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

export default function EditProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <ProductForm product={product} />
    </div>
  );
}
