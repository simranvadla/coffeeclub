import React from "react";
import products from "./products.json";
import "./Product.css";
import AddButton from "./AddButton.js";
import { AppContext } from "../../context/appContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const {count,setCount}=useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH;
  return (
    <div className="Product-container">
      {products &&
        products.map((value,index) => (
          <div key={value.id} className="Product-items">
            <div onClick={()=>setCount(index)}>
              <Link to={`${PATH}/Images`}>
              <img className="Product-img"
                src={`${PATH}${value.image}`}
                alt={value.name}
              />
              </Link>
            </div>
            <h3>{value.name}</h3>
            <p style={{ textAlign: "justify", padding: "10px" }}>
              {value.desc}
            </p>
            <div className="priceBtn">
              <div className="priceTxt">₹{value.price}</div>
              <div className="Product-button">
                <AddButton id={value.id} />
              </div>
               </div>
          </div>
        ))}
    </div>
  );
}