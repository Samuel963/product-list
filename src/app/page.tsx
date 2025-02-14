'use client'
import { useEffect, useState } from 'react';
import { PRODUCTS } from '@/mocks';

import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [products, setProducts] = useState<any>(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    const results = products.filter((product: any) => {
      const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
      return matchesQuery;
    });
    setFilteredProducts(results);
  }, [query, products]);

  return (
    <div className="p-6">
      <SearchBar query={query} onChange={(e: any) => setQuery(e.target.value)} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
