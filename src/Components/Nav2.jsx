import React, { useContext, useEffect, useState } from "react";
import "./Nav2.css";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
const Nav2 = () => {
  const value = useContext(cartContext);
  const [activeTab, setActiveTab] = useState("/");

  // Function to handle tab clicks and set the active tab
  const handleTabClick = (event, tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    setActiveTab("/home");
    console.log("hello");
  }, []);

  return (
    <nav className="navbar">
      <button className="menu-toggle">☰ Menu</button>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={activeTab === "/home" ? "active" : ""}
            onClick={(e) => handleTabClick(e, "/home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={activeTab === "/profile" ? "active" : ""}
            onClick={(e) => handleTabClick(e, "/profile")}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/whats-new"
            className={activeTab === "/whats-new" ? "active" : ""}
            onClick={(e) => handleTabClick(e, "/whats-new")}
          >
            What's New
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeTab === "/about" ? "active" : ""}
            onClick={(e) => handleTabClick(e, "/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={activeTab === "/cart" ? "active" : ""}
            onClick={(e) => {
              handleTabClick(e, "/cart");
              value.totalPrice();
            }}
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav2;
