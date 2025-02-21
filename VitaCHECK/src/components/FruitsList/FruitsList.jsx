import React from "react";
import "./FruitsList.scss";
import FruitsListItem from "../FruitsListItem/FruitsListItem";

function FruitsList({ items }) {
  return (
    <div className="fruit-container">
      <ul className="fruit-container__item">
        {items.map((item) => {
            return <FruitsListItem key={item.fruitId } item={item} />;
        })}
      </ul>
    </div>
  );
}

export default FruitsList;
