import React, { useContext } from "react";
import "./CartCards.css"; // Import the CSS file
import { cartContext } from "../Context/CartContext";
const CartCards = ({
  image,
  description,
  size,
  price,
  rating,
  DeleteOnCart,
}) => {
  const value = useContext(cartContext);
  return (
    <div key={description} className="cartcard card">
      {image && <img src={image} alt={description} className="card-image" />}
      <div className="card-details">
        {description && <h2 className="card-description">{description}</h2>}
        {size && <p className="card-size">Size: {size}</p>}
        {price && <p className="card-price">Price: ₹{price}</p>}
        {rating && (
          <p className="card-rating">
            Rating: {rating} <span className="card-star">★</span>
          </p>
        )}
        <button
          className="card-delete-button"
          onClick={() => {
            DeleteOnCart({ description });
            value.totalPrice();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCards;
