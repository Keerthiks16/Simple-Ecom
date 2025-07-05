import React from "react";
import ObjCard from "./ObjCard"; // Import the ObjCard component
import "./ObjCardWrapper.css"; // Import CSS file for styling

const ObjCardWrapper = ({ items }) => {
  return (
    <div className="card-container">
      {items.map((item, index) => (
        <ObjCard
          key={index}
          image={item.image}
          description={item.description}
          size={item.size}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default ObjCardWrapper;
