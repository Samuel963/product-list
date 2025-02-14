'use client'
export const getAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.in/api/products?limit=10");
  const data = await res.json();
  return data;
};