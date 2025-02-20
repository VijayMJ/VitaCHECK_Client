import React from "react";
import { Link } from "react-router-dom";
import "./VitaminsListItem.scss";

function VitaminsListItem({ item }) {
  console.log(item);
  return (
    <li className="item">
      <div className="item__name-conatiner">
        <Link to="/" className="item__name-link">
          <p className="item__name">{item.name}</p>
        </Link>
        <p className="item__amount">
          {item.amount}/{item.unit}
        </p>
      </div>
    </li>
  );
}

export default VitaminsListItem;
