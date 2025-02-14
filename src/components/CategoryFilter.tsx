const CategoryFilter = ({ categories, onSelect }: any) => {
    return (
      <div className="mb-6">
        <select
          onChange={onSelect}
          className="w-full p-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select category</option>
          {categories.map((category: any, index: any) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CategoryFilter;