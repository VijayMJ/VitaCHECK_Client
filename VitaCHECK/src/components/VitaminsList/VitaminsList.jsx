import React from "react";
import VitaminsListItem from "../VitaminsListItem/VitaminsListItem";
import "./VitaminsList.scss";

function VitaminsList({ allItems }) {
  return (
    <div className="list">
      <div className="list__heading-conatiner">
        <h3 className="list__heading">Vitamins/Minerals</h3>
        <h3 className="list__heading">Amount/Unit</h3>
      </div>
      <ul className="list__container">
        {allItems.map((item) => {
          return <VitaminsListItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default VitaminsList;
