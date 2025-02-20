import React from "react";
import "./VitaminPage.scss";
import VitaminsContainer from "../../components/VitaminsContainer/VitaminsContainer";

function VitaminPage() {
  return (
    <article className="vitamins-page-container">
      <h1>Essential Daily Vitamins for Adults</h1>
      <VitaminsContainer />
    </article>
  );
}

export default VitaminPage;
