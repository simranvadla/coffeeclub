import React, { useContext } from "react";
import { AppContext } from "../../context/appContext.js";
import products from "./products.json";
import "./Product.css";
import AddButton from "./AddButton.js";
import { Link } from "react-router-dom";
export default function Images() {
  const { cartItems, setCartItems, count, setCount } = useContext(AppContext);

  const PATH = process.env.REACT_APP_PATH;
  // const addtoCart = (id) => {
  //     setCartItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  // };

  return (
    <div className="Product-container">
      <div className="Product-items">
        <div>
          <img
            className="Product-img"
            src={`${PATH}${products[count].image}`}
          />
        </div>
        <h3>{products[count].name}</h3>
        <p style={{ textAlign: "justify", padding: "10px" }}>
          {products[count].desc}
        </p>
        <div className="priceBtn">
          <div className="priceTxt">₹{products[count].price}</div>
          <div className="Product-button">
            <AddButton id={products[count].id} />
          </div>
          {/* <button
                        className="Product-button"
                        onClick={() => addtoCart(products[count].id)}
                    >
                        Add
                    </button> */}
        </div>
      </div>
    </div>
  );
}
