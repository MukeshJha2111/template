// hooks/useCategories.ts
import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanityClient';
import { categoryQuery } from '../lib/queries';

type Category = {
  _id: string;
  name: string;
};

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(categoryQuery)
      .then(setCategories)
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
