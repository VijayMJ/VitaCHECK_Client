import React from "react";
import { Link } from "react-router-dom";
import "./VitaminsListItem.scss";

function VitaminsListItem({ item }) {
  console.log(item);
  return (
    <li className="item">
      <Link to="/" className="item__name-link">
        <p className="item__name">{item.name}</p>
        <p className="item__amount">
          {item.amount}/{item.unit}
        </p>
      </Link>
    </li>
  );
}

export default VitaminsListItem;
