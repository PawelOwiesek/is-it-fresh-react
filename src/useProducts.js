import { useState, useEffect } from "react";

const localStorageSate = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const useProducts = () => {
  const [products, setProducts] = useState(localStorageSate);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const removeProduct = (id) => {
    setProducts((products) => products.filter((product) => product.id !== id));
  };

  const addNewProduct = (newProduct, newTimeIn, newTimeOut) => {
    setProducts((products) => [
      ...products,
      {
        product: newProduct,
        timeIn: newTimeIn,
        timeOut: newTimeOut,
        id: products.length ? products[products.length - 1].id + 1 : 1,
      },
    ]);
  };
  return { products, removeProduct, addNewProduct };
};
