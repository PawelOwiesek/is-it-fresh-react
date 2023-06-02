import React from "react";
import "./styles.css";

const ProductsList = ({ products, removeProduct }) => {
  return (
    <ul className="list">
      {products.map((product) => (
        <div className="container" key={product.id}>
          <li className="list__item">{product.product}</li>
          <p className="list__item--dateIn">
            Date in
            <span className="list__item">{product.timeIn}</span>
          </p>
          <p className="list__item--exDate">
            Date out
            <span className="list__item">{product.timeOut}</span>
          </p>
          <p>
            <span className="list__item--timeFlow">Time Flow</span>
          </p>
          <button
            onClick={() => removeProduct(product.id)}
            className="removeButton"
          >
            🗑
          </button>
        </div>
      ))}
    </ul>
  );
};

export default ProductsList;
