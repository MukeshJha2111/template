import {
  Box,
  Typography,
  Container,
  Chip,
  Button,
  Stack,
  Grid,
  Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sanityClient } from '../lib/sanityClient';
import { Product } from '../types/Product';

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    if (slug) {
      const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        title,
        description,
        price,
        "imageUrl": images[0].asset->url,
        category->{ _id, name },
        tags
      }`;
      sanityClient.fetch(query).then((data) => {
        setProduct(data);

        if (data?.category?._id) {
          // Fetch related products from same category
          const relatedQuery = `*[_type == "product" && category._ref == "${data.category._id}" && slug.current != "${slug}"]{
            _id,
            title,
            price,
            "imageUrl": images[0].asset->url,
            category->{ name },
            slug
          }[0...4]`;
          sanityClient.fetch(relatedQuery).then(setRelated);
        }
      });
    }
  }, [slug]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 6, mb: 8 }}>
      <Grid container spacing={6}>
        {/* ✅ Product Image */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              overflow: 'hidden',
              borderRadius: 3,
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fafafa',
            }}
          >
            <Box
              component="img"
              src={product.imageUrl}
              alt={product.title}
              sx={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          </Paper>
        </Grid>

        {/* ✅ Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {product.title}
          </Typography>

          {product.category?.name && (
            <Chip
              label={product.category.name}
              variant="outlined"
              color="primary"
              sx={{ mb: 2 }}
            />
          )}

          <Typography variant="h5" color="primary" fontWeight={600} gutterBottom>
            ₹{product.price}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph sx={{ whiteSpace: 'pre-line' }}>
            {product.description}
          </Typography>

          {/* CTA */}
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button variant="contained" size="large" color="primary">
              Buy Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="success"
              href={`https://wa.me/91XXXXXXXXXX?text=I'm interested in: ${product.title}`}
              target="_blank"
            >
              WhatsApp
            </Button>
          </Stack>

          {/* Tags */}
          {product.tags?.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
              {product.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" />
              ))}
            </Stack>
          )}
        </Grid>
      </Grid>

      {/* ✅ Related Products */}
      {related.length > 0 && (
        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Related Products
          </Typography>
          <Grid container spacing={3}>
            {related.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item._id}>
                <Box
                  sx={{
                    border: '1px solid #eee',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: '0.3s',
                    '&:hover': { boxShadow: 3 },
                  }}
                >
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.title}
                    sx={{ width: '100%', height: 160, objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600} noWrap>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{item.price}
                    </Typography>
                    <Button
                      component="a"
                      href={`/product/${item.slug?.current}`}
                      fullWidth
                      size="small"
                      sx={{ mt: 1 }}
                      variant="outlined"
                    >
                      View
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ProductDetails;
