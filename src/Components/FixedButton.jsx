import React, { useContext } from "react";
import "./FixedButton.css";
import { cartContext } from "../Context/CartContext";
import PaymentForm from "./PaymentForm";
import { Link } from "react-router-dom";
const FixedButton = () => {
  const value = useContext(cartContext);
  return (
    <Link to="./payment">
      <div className="fixbtn fixed-button">
        <span className="cart-price price">₹{value.cost} </span>
        <button className="cart-price proceed">Proceed</button>
      </div>
    </Link>
  );
};

export default FixedButton;
