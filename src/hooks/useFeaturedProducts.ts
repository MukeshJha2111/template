// hooks/useFeaturedProducts.ts
import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanityClient';
import { Product } from '../types/Product';
import { featuredProductsQuery } from '../lib/queries';

export function useFeaturedProducts(selectedCategory: string | null) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const query = selectedCategory
      ? `*[_type == "product" && category._ref == "${selectedCategory}" && isFeatured == true]{
          _id,
          title,
          description,
          price,
          "imageUrl": images[0].asset->url,
          category->{ name },
          slug,
          tags
        }`
      : featuredProductsQuery;

    sanityClient.fetch(query)
      .then((data: Product[]) => setProducts(data))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return { products, loading };
}
