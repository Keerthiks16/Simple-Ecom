import { Link } from "react-router-dom";
import "./Cards.css";
let Cards = ({ img, title, desc }) => {
  return (
    <div className="cardd card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Link to={`/home/${title}`}>
          <button className="cat-explore">Explore</button>
        </Link>
      </div>
    </div>
  );
};
export default Cards;
