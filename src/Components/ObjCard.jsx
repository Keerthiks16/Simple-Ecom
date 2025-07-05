import React, { useState, useRef } from "react";
import ObjCartBtn from "./ObjCartBtn";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";

const ObjCard = ({ image, description, size, price, rating }) => {
  const value = useContext(cartContext);
  //const [cart, setCart] = useState([]);
  const [cartt, setCartt] = useState([]);
  const num = useRef(0);
  const [str, setStr] = useState("Items added are: ");

  const renderStars = () => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "gold" : "#ccc" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="Objcard" style={styles.card}>
      <img src={image} alt="Object" style={styles.image} />
      <div style={styles.details}>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Size:</strong> {size}
        </p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Rating:</strong> {renderStars()}
        </p>
        <button
          style={styles.button}
          onClick={() => {
            value.AddToCart(image, description, size, price, rating);
            value.totalPrice();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Styles for the card component
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "290px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  details: {
    marginTop: "12px",
  },
  button: {
    marginTop: "16px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ObjCard;
