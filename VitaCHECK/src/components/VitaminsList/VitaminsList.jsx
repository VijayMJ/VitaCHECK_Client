import React from "react";
import VitaminsListItem from "../VitaminsListItem/VitaminsListItem";
import "./VitaminsList.scss";

function VitaminsList({ allItems }) {
  return (
    <div className="list">
      <div className="list__heading">
        <h3>Vitamins/Minerals</h3>
        <h3>Amount/Unit</h3>
      </div>
      <ul className="list--mobile">
        {allItems.map((item) => {
          return <VitaminsListItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default VitaminsList;
