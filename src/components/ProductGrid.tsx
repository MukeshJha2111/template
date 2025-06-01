import { Box } from '@mui/material';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';
import Typography from '@mui/material/Typography';

const ProductGrid = ({ products }: { products: Product[] }) => (
  <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
   <Typography
  variant="h5"
  sx={{
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    color: '#3e2723',
    mb: 3,
  }}
>
  Featured Products
</Typography>


    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 4,
        mb: 6,
      }}
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Box>
  </Box>
);

export default ProductGrid;
