import { Box, Typography } from '@mui/material';

const HeroSection = () => (
  <Box sx={{ textAlign: 'center', mt: 10, mb: 8 }}>
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        color: '#3e2723',
        fontSize: { xs: '36px', md: '56px' },
        lineHeight: 1.2,
      }}
    >
      Beautiful
    </Typography>
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        color: '#3e2723',
        fontSize: { xs: '36px', md: '56px' },
        lineHeight: 1.2,
        mb: 4,
      }}
    >
      Crockery
    </Typography>
    <Box
      component="button"
      sx={{
        backgroundColor: '#3e2723',
        color: '#fff',
        border: 'none',
        padding: '12px 32px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      Shop Now
    </Box>
  </Box>
);

export default HeroSection;
