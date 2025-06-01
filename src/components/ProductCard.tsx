import { Box, Typography } from '@mui/material';
import { Product } from '../types/Product';

const ProductCard = ({ product }: { product: Product }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: 3,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      height: 340,
    }}
  >
    {/* Image */}
    <Box
      component="img"
      src={product.imageUrl}
      alt={product.title}
      sx={{
        width: '100%',
        height: 180,
        objectFit: 'cover',
        borderRadius: 2,
        mb: 2,
      }}
    />

    {/* Title */}
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 600,
        mb: 0.5,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}
    >
      {product.title}
    </Typography>

    {/* Price */}
    <Typography sx={{ color: '#3e2723', mb: 2 }}>₹ {product.price}</Typography>

    {/* Button */}
    <Box
      component="button"
      sx={{
        backgroundColor: '#3e2723',
        color: '#fff',
        border: 'none',
        padding: '10px 28px',
        borderRadius: '6px',
        fontSize: '15px',
        cursor: 'pointer',
        mt: 'auto',
        width: '100%',
        maxWidth: 160,
      }}
    >
      View
    </Box>
  </Box>
);

export default ProductCard;
