import { Box, Chip, Typography } from '@mui/material';

type Category = {
  _id: string;
  name: string;
};

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}) => (
  <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: 6 }}>
    <Typography
      variant="h5"
      sx={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        color: '#3e2723',
        mb: 2,
      }}
    >
      Categories
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1.5,
      }}
    >
      <Chip
        label="All"
        clickable
        onClick={() => onSelectCategory(null)}
        sx={{
          bgcolor: selectedCategory === null ? '#d7ccc8' : '#f0ebe9',
          color: '#3e2723',
          fontWeight: 500,
          borderRadius: '20px',
          px: 2.5,
          py: 1,
          fontSize: '15px',
        }}
      />
      {categories.map((category) => (
        <Chip
          key={category._id}
          label={category.name}
          clickable
          onClick={() => onSelectCategory(category._id)}
          sx={{
            bgcolor: selectedCategory === category._id ? '#d7ccc8' : '#f0ebe9',
            color: '#3e2723',
            fontWeight: 500,
            borderRadius: '20px',
            px: 2.5,
            py: 1,
            fontSize: '15px',
          }}
        />
      ))}
    </Box>
  </Box>
);

export default CategoryFilter;
