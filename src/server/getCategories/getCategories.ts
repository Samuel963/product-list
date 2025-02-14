export const getCategories = async () => {
  const res = await fetch('https://fakestoreapi.in/api/products/category');
  const data = await res.json();
  return data;
};