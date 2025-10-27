import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSections from './components/ProductSections';
import Footer from './components/Footer';

function App() {
  // Product catalogs
  const productsNew = useMemo(() => [
    {
      id: 'n1',
      name: 'Kanchipuram Silk Saree - Midnight Gold',
      category: 'Sarees',
      price: 18999,
      compareAt: 21999,
      badge: 'New',
      image: 'https://images.unsplash.com/photo-1726981448126-c7fc9237cdb5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYW5jaGlwdXJhbSUyMFNpbGslMjBTYXJlZSUyMC18ZW58MHwwfHx8MTc2MTU1OTMxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'n2',
      name: 'Handloom Cotton Dupatta - Azure Bloom',
      category: 'Dupattas',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1706535426949-e90f953f0d6d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYW5kbG9vbSUyMENvdHRvbiUyMER1cGF0dGElMjAtfGVufDB8MHx8fDE3NjE1NTkzMTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'n3',
      name: 'Artisan Puppet Pair',
      category: 'Puppets',
      price: 2499,
      badge: 'Limited',
      image: 'https://images.unsplash.com/photo-1614587835354-b9b7151067cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdXBwZXQlMjBQYWlyfGVufDB8MHx8fDE3NjE1NTkzMTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ], []);

  const productsSale = useMemo(() => [
    {
      id: 's1',
      name: 'Banarasi Brocade Fabric - Royal Blue',
      category: 'Fabrics',
      price: 1599,
      compareAt: 2199,
      badge: 'Sale',
      image: 'https://images.unsplash.com/photo-1717145661112-3742a0f4cdd0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYW5hcmFzaSUyMEJyb2NhZGUlMjBGYWJyaWMlMjAtfGVufDB8MHx8fDE3NjE1NTkzMTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 's2',
      name: 'Handcrafted Potli Bag - Gold Zari',
      category: 'Bags',
      price: 1299,
      compareAt: 1699,
      badge: 'Offer',
      image: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 's3',
      name: 'Chanderi Silk Saree - Sky Gleam',
      category: 'Sarees',
      price: 9999,
      compareAt: 12999,
      badge: 'Sale',
      image: 'https://images.unsplash.com/photo-1661877574666-c6574f69fa9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFuZGVyaSUyMFNpbGslMjBTYXJlZSUyMC18ZW58MHwwfHx8MTc2MTU1OTMxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ], []);

  // Favorites state (persist in localStorage for now)
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('kgbk_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('kgbk_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  };

  const favoritesRef = useRef(null);
  const handleFavoritesClick = () => {
    const el = document.getElementById('favorites');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar favoritesCount={favorites.length} onFavoritesClick={handleFavoritesClick} />
      <main>
        <Hero />
        <ProductSections
          productsNew={productsNew}
          productsSale={productsSale}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
