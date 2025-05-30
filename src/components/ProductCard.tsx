import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // Make card take full height
      }}
    >
      {product.imageUrl && (
        <CardMedia
          component="img"
          height="180"
          image={product.imageUrl}
          alt={product.title}
          sx={{ objectFit: 'cover' }}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom noWrap>
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 2,
          }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" fontWeight={700} color="primary">
            ${product.price}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {product.category?.name}
          </Typography>
        </Box>
        <Button
  component={Link}
  to={product.slug?.current ? `/product/${product.slug.current}` : '#'}
  variant="outlined"
  fullWidth
  disabled={!product.slug?.current}
  sx={{ mt: 2 }}
>
  View Details
</Button>

      </CardContent>
    </Card>
  );
};

export default ProductCard;
