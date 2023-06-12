import {
  List,
  ItemWrapper,
  Item,
  EntryDate,
  ExpDate,
  Timer,
  Button,
} from "./styled";

const ProductsList = ({ products, removeProduct }) => {
  return (
    <List>
      {products.map((product) => (
        <ItemWrapper key={product.id}>
          <Item>{product.product}</Item>
          <EntryDate>
            Date in
            <Item as="span">{product.timeIn}</Item>
          </EntryDate>
          <ExpDate>
            Date out
            <Item as="span">{product.timeOut}</Item>
          </ExpDate>
          <p>
            <Timer>Time Flow</Timer>
          </p>
          <Button onClick={() => removeProduct(product.id)}>🗑</Button>
        </ItemWrapper>
      ))}
    </List>
  );
};

export default ProductsList;
