import Header from "./Header";
import Form from "./Form";
import ProductsList from "./ProductsList";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <Header title="Fresh check list." clock={<Clock />} />
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
