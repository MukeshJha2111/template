import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sanityClient } from '../lib/sanityClient';
import { Product } from '../types/Product';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const encoded = encodeURIComponent(query.toLowerCase());

    const searchQuery = `*[_type == "product" && (title match "*${encoded}*" || description match "*${encoded}*")]{
      _id,
      title,
      description,
      price,
      "imageUrl": images[0].asset->url,
      category->{name},
      slug
    }`;

    sanityClient.fetch(searchQuery).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [query]);

  return (
    <Container sx={{ mt: 6, mb: 8 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Search results for "{query}"
      </Typography>

      {loading ? (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : products.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 4 }}>
          No products found.
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default SearchPage;
