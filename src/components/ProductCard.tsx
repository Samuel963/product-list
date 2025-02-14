const ProductCard = ({ product, handleClick }: any) => {
  return (
    <div
      className="border border-gray-200 rounded-lg p-4 cursor-pointer text-center shadow-md hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-green-600 font-bold mb-2">${product.price}</p>
      <p className="text-sm text-gray-600">{product.description.substring(0, 100)}...</p>
    </div>
  );
};

export default ProductCard;
