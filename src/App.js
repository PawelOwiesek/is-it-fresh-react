import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import ProductsList from "./ProductsList";
import Clock from "./Clock";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

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

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <Header title="Fresh check list." clock={<Clock />} />
      <section>
        <Form
          title="List of products and the expiration date."
          addNewProduct={addNewProduct}
        />
      </section>
      <section>
        <ProductsList products={products} removeProduct={removeProduct} />
      </section>
    </div>
  );
}

export default App;
