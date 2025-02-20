import React from "react";
import "./VitaminPage.scss";
import VitaminsContainer from "../../components/VitaminsContainer/VitaminsContainer";
import backArrow from "../../assets/images/Arrow.svg";
import { Link } from "react-router-dom";

function VitaminPage() {
  return (
    <article className="vitamins-page-container">
      <div className="vitamins-page-container__header-box">
        <Link className="vitamins-page-container__link" to="/">
          <img
            className="vitamins-page-container__back-arrow"
            src={backArrow}
            alt="back arrow image"
          />
        </Link>
        <h1 className="vitamins-page-container__header">
          Essential Daily Vitamins for Adults
        </h1>
      </div>
      <VitaminsContainer />
    </article>
  );
}

export default VitaminPage;
