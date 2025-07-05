import Cards from "./Cards.jsx";
import "./CardSection.css";
let CardSectionwomen = () => {
  return (
    <>
      <h3 className="sub-cat">Women</h3>
      <div className="cards">
        <Cards
          className="card"
          img="https://i.pinimg.com/originals/8f/bb/55/8fbb55bb4c3abb12d9da7cd255927959.jpg"
          title="Formals"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/564x/cc/ee/74/ccee74a509c6f42fbdada133ab8e702e.jpg"
          title="Casuals"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/37/00/58/370058a0a747e64d828b4aece26e71f2.jpg"
          title="Loungewear"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/9d/5a/fc/9d5afc1cc5b3829cdb5b9354315d506b.jpg"
          title="Boho Style"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/73/17/be/7317be24c2683d4f0762bfbdb10bc5a5.jpg"
          title="Traditionals"
          desc=""
        />
        <Cards
          className="card"
          img="https://i.pinimg.com/736x/56/9f/f9/569ff97444da3dc6d809266704ca7988.jpg"
          title="Party Wear"
          desc=""
        />
      </div>
    </>
  );
};
export default CardSectionwomen;
