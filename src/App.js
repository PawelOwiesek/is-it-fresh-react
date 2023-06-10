import { useProducts } from "./useProducts";
import Header from "./Header";
import Form from "./Form";
import ProductsList from "./ProductsList";
import Clock from "./Clock";

function App() {
  const { products, removeProduct, addNewProduct } = useProducts();

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
