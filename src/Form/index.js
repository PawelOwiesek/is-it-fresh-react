import { useRef, useState } from "react";
import {
  Wrapper,
  Title,
  Paragraph,
  Label,
  ProductImput,
  DateInput,
  Button,
} from "./styled.js";

const Form = ({ title, addNewProduct }) => {
  const [newProduct, setNewProduct] = useState("");
  const [newTimeIn, setNewTimeIn] = useState("");
  const [newTimeOut, setNewTimeOut] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewProduct(newProduct.trim(), newTimeIn, newTimeOut);
    setNewProduct("");
  };

  const inputRef = useRef(null);
  const setInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Title>{title}</Title>
      <Paragraph>
        <Label>
          Add a new product:
          <ProductImput
            ref={inputRef}
            value={newProduct}
            onChange={({ target }) => setNewProduct(target.value)}
            name="product"
            required
            autoFocus
          />
        </Label>
      </Paragraph>
      <Paragraph>
        <Label>
          Set the entry date:
          <DateInput
            value={newTimeIn}
            onChange={({ target }) => setNewTimeIn(target.value)}
            type="date"
            required
          />
        </Label>
      </Paragraph>
      <Paragraph>
        <Label>
          Expiration date:
          <DateInput
            value={newTimeOut}
            onChange={({ target }) => setNewTimeOut(target.value)}
            type="date"
            required
          />
        </Label>
      </Paragraph>
      <Button onClick={setInputFocus}>Add product to list.</Button>
    </Wrapper>
  );
};

export default Form;
