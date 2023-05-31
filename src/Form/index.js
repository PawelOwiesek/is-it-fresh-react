import "./style.css";

const Form = () => {
  return (
    <form className="form js-form">
      <h2 className="form__title">List of products and the expiration date.</h2>
      <p>
        <label className="form__products">
          Add a new product:
          <input
            className="form__input--text js-newProduct js-addProduct"
            name="product"
            required
          />
        </label>
      </p>
      <p>
        <label className="form__date">
          Set the entry date:
          <input className="form__input js-dateInput" type="date" required />
        </label>
      </p>
      <p>
        <label className="form__date">
          Expiration date:
          <input className="form__input js-timeLeft" type="date" required />
        </label>
      </p>
      <button className="button js-button">Add product to list.</button>
    </form>
  );
};

export default Form;
