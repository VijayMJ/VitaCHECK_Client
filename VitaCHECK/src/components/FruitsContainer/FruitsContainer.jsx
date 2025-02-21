import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/utils";
import FruitsList from "../FruitsList/FruitsList";

function FruitsContainer({ id }) {
  const [fruitsById, setFruitsById] = useState([]);

  async function getFruitsById() {
    const response = await axios.get(`${BASE_URL}vitamins/${id}/fruits`);
    setFruitsById(response.data);
  }

  useEffect(() => {
    getFruitsById();
  }, []);

  return (
    <div>
      {fruitsById && fruitsById.length > 0 ? (
        <FruitsList items={fruitsById} />
      ) : (
        <h3>Fruits list is empty at the moment</h3>
      )}
    </div>
  );
}

export default FruitsContainer;
