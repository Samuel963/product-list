'use client'
import ProductCard from "./ProductCard";

const ProductList = ({ products }: any) => {
  function handleClick(){
    console.log('Product clicked');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <ProductCard product={product} handleClick={handleClick} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductList;