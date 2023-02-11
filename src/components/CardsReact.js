import Card from "./Card";
import { cardsArray } from "./CardInfo";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

console.log(cardsArray);

let cards = cardsArray.map((card) => {
  return <Card key={card.id} card={card} />;
});

const CardsReact = () => {
  return (
    <div className="row">
      {cards}

      <div className="col AddLinkDiv">
        <Link to="/Add" className="AddLink">
          <AddCircleOutlineIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default CardsReact;
