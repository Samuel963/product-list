const SearchBar = ({ query, onChange }: any) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={onChange}
        className="w-full p-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchBar;
