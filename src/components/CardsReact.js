import Card from "./Card";
import { cardsArray } from "./CardInfo";

console.log(cardsArray);

let cards = cardsArray.map((card) => {
  return <Card key={card.id} card={card} />;
});

const CardsReact = () => {
  return <div className="row">{cards}</div>;
};

export default CardsReact;
