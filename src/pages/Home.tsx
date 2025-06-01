import { useState } from 'react';
import { useFeaturedProducts } from '../hooks/useFeaturedProducts';
import { useCategories } from '../hooks/useCategories';
import { useSiteSettings } from '../hooks/useSiteSettings';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const { products, loading: loadingProducts } = useFeaturedProducts(selectedCategory);
  const { categories } = useCategories();
  const { settings } = useSiteSettings();

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  if (!settings) return null;

  return (
    <>
      <Header title={settings.siteTitle} />
      <HeroSection />
      <ProductGrid products={filteredProducts} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Footer siteSettings={settings} />
    </>
  );
};

export default Home;
