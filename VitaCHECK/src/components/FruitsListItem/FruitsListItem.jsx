import React from "react";
import "./FruitsListItem.scss";

function FruitsListItem({ item }) {
  return (
    <li className="fruit-item">
      <div className="fruit-item__left">
        <div className="fruit-item__box">
          <h3 className="fruit-item__heading">Name</h3>
          <p className="fruit-item__text">{item.name}</p>
        </div>
        <div className="fruit-item__box">
          <h3 className="fruit-item__heading">Price</h3>
          <p className="fruit-item__text">{item.average_price}</p>
        </div>
        <div className="fruit-item__box">
          <h3 className="fruit-item__heading">Flavor</h3>
          <p className="fruit-item__text">{item.taste}</p>
        </div>
      </div>
      <div className="fruit-item__box">
        <h3 className="fruit-item__heading">Contains/ 100g</h3>
        {item.vitamins.map((vitamin) => {
          return (
            <p
              key={vitamin.vitaminId}
              className="fruit-item__text fruit-item__text--vitamins"
            >
              {vitamin.name}: {vitamin.amount_per_100g} {vitamin.unit}
            </p>
          );
        })}
      </div>
    </li>
  );
}

export default FruitsListItem;
