import { useState } from "react";
import "./style.css";

const Form = ({ title, addNewProduct }) => {
  const [newProduct, setNewProduct] = useState("");
  const [newTimeIn, setNewTimeIn] = useState("");
  const [newTimeOut, setNewTimeOut] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewProduct(newProduct.trim(), newTimeIn, newTimeOut);
    setNewProduct("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form ">
      <h2 className="form__title">{title}</h2>
      <p className="form__paragraph">
        <label className="form__products">
          Add a new product:
          <input
            value={newProduct}
            onChange={({ target }) => setNewProduct(target.value)}
            className="form__input--text "
            name="product"
            required
          />
        </label>
      </p>
      <p className="form__paragraph">
        <label className="form__date">
          Set the entry date:
          <input
            value={newTimeIn}
            onChange={({ target }) => setNewTimeIn(target.value)}
            className="form__input js-dateInput"
            type="date"
            required
          />
        </label>
      </p>
      <p className="form__paragraph">
        <label className="form__date">
          Expiration date:
          <input
            value={newTimeOut}
            onChange={({ target }) => setNewTimeOut(target.value)}
            className="form__input js-timeLeft"
            type="date"
            required
          />
        </label>
      </p>
      <button className="button js-button">Add product to list.</button>
    </form>
  );
};

export default Form;
