import React from "react";
import "./FruitsList.scss";
import FruitsListItem from "../FruitsListItem/FruitsListItem";

function FruitsList({ items }) {
  return (
    <ul className="fruit-container">
      {items.map((item) => {
        return <FruitsListItem key={item.fruitId} item={item} />;
      })}
    </ul>
  );
}

export default FruitsList;
