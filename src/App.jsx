import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Profile from "./Components/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Nav2 from "./Components/Nav2.jsx";
import Whatsnew from "./Components/Whatsnew.jsx";
import About from "./Components/About.jsx";
import M1Suits from "./Components/M1Suits.jsx";
import M2Casuals from "./Components/M2Casuals.jsx";
import M5Traditionals from "./Components/M5Traditionals.jsx";
import M6SweatShirt from "./Components/M6SweatShirt.jsx";
import W3Lounge from "./Components/W3Lounge.jsx";
import W1Formals from "./Components/W1Formals.jsx";
import W2Casuals from "./Components/W2Casuals.jsx";
import W4Boho from "./Components/W4Boho.jsx";
import W5Traditionals from "./Components/W5Traditionals.jsx";
import W6PartyWear from "./Components/W6PartyWear.jsx";
import { useState, useEffect } from "react";
import { cartContext } from "./Context/CartContext.js";
import Cart from "./Components/Cart.jsx";
import PaymentForm from "./Components/PaymentForm.jsx";
import LostPage from "./Components/LostPage.jsx";
function App() {
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);
  let AddToCart = (image, description, size, price, rating) => {
    let item = {
      image: image,
      description: description,
      size: size,
      price: price,
      rating: rating,
    };
    let newitem = [...cart, item];
    setCart(newitem);
  };
  let DeleteOnCart = ({ description }) => {
    let newCart = cart.filter((item) => item.description != description);
    setCart(newCart);
  };
  const totalPrice = () => {
    let sum = 0;
    cart.map((item) => {
      sum = sum + Number(item.price);
    });
    console.log(sum);
    setCost(sum);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav2 />
          <Home />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Nav2 />
          <Profile />
        </>
      ),
    },
    {
      path: "/whats-new",
      element: (
        <>
          <Nav2 />
          <Whatsnew />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Nav2 />
          <Cart DeleteOnCart={DeleteOnCart} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Nav2 />
          <About />
        </>
      ),
    },
    {
      path: "/home/Formals",
      element: (
        <>
          <Nav2 />
          <M1Suits />
        </>
      ),
    },
    {
      path: "/home/Casuals",
      element: (
        <>
          <Nav2 />
          <M2Casuals />
        </>
      ),
    },
    {
      path: "/home/Traditionals",
      element: (
        <>
          <Nav2 />
          <M5Traditionals />
        </>
      ),
    },
    {
      path: "/home/Sweatshirt",
      element: (
        <>
          <Nav2 />
          <M6SweatShirt />
        </>
      ),
    },
    {
      path: "/home/WFormals",
      element: (
        <>
          <Nav2 />
          <W1Formals />
        </>
      ),
    },
    {
      path: "/home/WCasuals",
      element: (
        <>
          <Nav2 />
          <W2Casuals />
        </>
      ),
    },
    {
      path: "/home/Loungewear",
      element: (
        <>
          <Nav2 />
          <W3Lounge />
        </>
      ),
    },
    {
      path: "/home/Boho",
      element: (
        <>
          <Nav2 />
          <W4Boho />
        </>
      ),
    },
    {
      path: "/home/WTraditionals",
      element: (
        <>
          <Nav2 />
          <W5Traditionals />
        </>
      ),
    },
    {
      path: "/home/PartyWear",
      element: (
        <>
          <Nav2 />
          <W6PartyWear />
        </>
      ),
    },
    {
      path: "/cart/payment",
      element: (
        <>
          <PaymentForm cost={cost} />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <LostPage />
        </>
      ),
    },
  ]);

  return (
    <>
      <cartContext.Provider
        value={{ cart, setCart, AddToCart, totalPrice, cost }}
      >
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default App;
