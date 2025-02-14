'use client'
import { useEffect, useState } from 'react';
import { PRODUCTS } from '@/mocks';

import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { getAllProducts } from '@/server/getAllProducts/getAllProducts';
import { getCategories } from '@/server/getCategories/getCategories';

const Home = () => {
  const [products, setProducts] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const { products } = await getAllProducts();
      const { categories } = await getCategories();
      setProducts(products);
      setFilteredProducts(products);
      setCategories(categories);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const results = products.filter((product: any) => {
      const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesQuery && matchesCategory;
    });
    setFilteredProducts(results);
  }, [query, selectedCategory, products]);

  return (
    <div className="p-6">
      <SearchBar query={query} onChange={(e: any) => setQuery(e.target.value)} />
      <CategoryFilter categories={categories} onSelect={(e: any) => setSelectedCategory(e.target.value)} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
