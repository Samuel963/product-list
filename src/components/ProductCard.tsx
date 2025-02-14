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
      <div className="relative group">
        <h3 className="text-xl font-semibold mb-2 truncate">
          {product.title}
        </h3>
        <div className="absolute left-0 hidden group-hover:block bg-black text-white text-sm rounded p-2 w-max max-w-xs">
          {product.title}
        </div>
      </div>
      <p className="text-green-600 font-bold mb-2">${product.price}</p>
      <p className="text-sm text-gray-600">{product.description.substring(0, 100)}...</p>
    </div>
  );
};

export default ProductCard;
