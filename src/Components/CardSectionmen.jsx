import Cards from "./Cards.jsx";
import "./CardSection.css";
import { Link } from "react-router-dom";
let CardSectionmen = () => {
  return (
    <>
      <h2 className="categories">Categories</h2>
      <h3 className="sub-cat">Men</h3>
      <div className="cards">
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/f9/a7/71/f9a771476466fe46911a904a609af0ec.jpg"
          title="Formals"
          desc=""
          
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/40/e0/ff/40e0fff1c56f57840d9cca5099c21cea.jpg"
          title="Casuals"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/d4/24/58/d4245806458d4177c8f0ef15d2733522.jpg"
          title="Old School"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/236x/e8/51/08/e8510804095b49bc1103032dd5cac035.jpg"
          title="Baggy"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/2d/49/fa/2d49fade01605e313c6e39ef7871ec79.jpg"
          title="Traditionals"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/474x/ab/2e/3f/ab2e3fbf60f917cd9f27b56380f2646f.jpg"
          title="Sweatshirt"
          desc=""
        />
      </div>
    </>
  );
};
export default CardSectionmen;
