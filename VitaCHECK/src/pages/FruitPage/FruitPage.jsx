import React from "react";
import "./FruitPage.scss";
import FruitsContainer from "../../components/FruitsContainer/FruitsContainer";
import { useParams } from "react-router-dom";
import TitleBlock from "../../components/TitleBlock/TitleBlock";

function FruitPage() {
  const { id } = useParams();
  return (
    <div className="fruit-box">
      <TitleBlock />
      <FruitsContainer id={id} />
    </div>
  );
}

export default FruitPage;
