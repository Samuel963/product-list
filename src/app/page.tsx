import { PRODUCTS } from '@/mocks';
import ProductList from '../components/ProductList';

const Home = () => {
  const filteredProducts: any = PRODUCTS;

  return (
    <div className="p-6">
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
