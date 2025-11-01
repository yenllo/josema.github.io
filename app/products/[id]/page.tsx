'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cart';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string;
  dimension: {
    length: number;
    width: number;
    height: number;
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        type: 'product',
      });
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        {product.images.split(',').map((image) => (
          <img key={image} src={`/images/${image}`} alt={product.name} width="200" />
        ))}
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
