import React from "react";
import "./TitleBlock.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Arrow.svg";

function TitleBlock() {
  return (
    <div className="title-block">
      <Link className="title-block__link" to="/vitamins">
        <img
          className="title-block__back-arrow"
          src={backArrow}
          alt="back arrow image"
        />
      </Link>
      <h1 className="title-block__header">
        Discover the Vitamins in Your Favorite Fruits
      </h1>
    </div>
  );
}

export default TitleBlock;
