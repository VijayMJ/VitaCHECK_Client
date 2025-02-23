import React from "react";
import { Link } from "react-router-dom";
import "./VitaminsListItem.scss";

function VitaminsListItem({ item }) {
  console.log(item);
  return (
    <Link to={`/vitamins/${item.id}/fruits`} className="item-link">
      <li className="item">
        <p className="item__name">{item.name}</p>
        <p className="item__amount">
          {item.amount}/{item.unit}
        </p>
      </li>
    </Link>
  );
}

export default VitaminsListItem;
