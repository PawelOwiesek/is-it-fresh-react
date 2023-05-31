import Header from "./Header";
import Form from "./Form";
import ProductsList from "./ProductsList";

function App() {
  return (
    <div>
      <Header title="Fresh check list." />
      <section>
        <Form />
      </section>
      <section>
        <ProductsList />
      </section>
    </div>
  );
}

export default App;
