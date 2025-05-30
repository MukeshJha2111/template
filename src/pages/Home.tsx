import { useEffect, useState } from 'react';
import { sanityClient } from '../lib/sanityClient';
import { productQuery, categoryQuery, siteSettingsQuery } from '../lib/queries';
import { Product } from '../types/Product';
import { SiteSettings } from '../types/SiteSettings';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  TextField,
  Chip,
} from '@mui/material';

type Category = {
  _id: string;
  name: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    sanityClient.fetch(categoryQuery).then((data: Category[]) => setCategories(data));
    sanityClient.fetch(siteSettingsQuery).then((data: SiteSettings) => setSiteSettings(data));
  }, []);

  useEffect(() => {
    const queryWithCategory = selectedCategory
      ? `*[_type == "product" && category._ref == "${selectedCategory}"]{
          _id,
          title,
          description,
          price,
          "imageUrl": images[0].asset->url,
          category->{ name },
            slug,
            tags
        }`
      : productQuery;

    sanityClient.fetch(queryWithCategory).then((data: Product[]) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, [selectedCategory]);

  useEffect(() => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  if (!siteSettings) return null;

  return (
    <>
      {/* ✅ Navbar */}
      <AppBar position="sticky" elevation={1} sx={{ background: '#fff', color: '#000' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {siteSettings.logoUrl && (
              <Box component="img" src={siteSettings.logoUrl} alt="Logo" sx={{ height: 40 }} />
            )}
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {siteSettings.siteTitle}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Main Content */}
      <Container sx={{ mt: 6, mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
          Explore Our Collection
        </Typography>

        {/* 🔍 Search */}
        <TextField
          label="Search for products"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* 🏷️ Categories */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
          <Chip
            label="All"
            color={selectedCategory === null ? 'primary' : 'default'}
            onClick={() => setSelectedCategory(null)}
            clickable
            sx={{ fontWeight: 500 }}
          />
          {categories.map((category) => (
            <Chip
              key={category._id}
              label={category.name}
              color={selectedCategory === category._id ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(category._id)}
              clickable
              sx={{ fontWeight: 500 }}
            />
          ))}
        </Box>

        {/* 🧱 Products Grid */}
     <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 3,
    alignItems: 'stretch',
  }}
>
  {filteredProducts.map((product) => (
    <ProductCard key={product._id} product={product} />
  ))}
</Box>

      </Container>

      <Footer siteSettings={siteSettings} />
    </>
  );
};

export default Home;
