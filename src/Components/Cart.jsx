import React from "react";
import ObjCard from "./ObjCard";
import "./M1Suits.css";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import CartCards from "./CartCards";
import FixedButton from "./FixedButton";
import { useState } from "react";
import EmptyCart from "./EmptyCart";
import PaymentForm from "./PaymentForm";
const Cart = ({ DeleteOnCart }) => {
  const value = useContext(cartContext);
  const [cost, setCost] = useState(0);
  let sum = 0;
  const totalPrice = () => {
    sum = 0;
    value.cart.map((item) => {
      sum = sum + Number(item.price);
    });
    console.log(sum);
    setCost(sum);
  };

  return (
    <>
      {value.cart.length == 0 && <EmptyCart />}
      <div className="obj-section">
        {value.cart.map((item) => (
          <CartCards
            key={item.description}
            image={item.image}
            description={item.description}
            size={item.size}
            price={item.price}
            rating={item.rating}
            DeleteOnCart={DeleteOnCart}
          />
        ))}
      </div>
      <FixedButton />{" "}
    </>
  );
};

export default Cart;
