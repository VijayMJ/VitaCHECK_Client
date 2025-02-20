import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/utils";
import VitaminsList from "../VitaminsList/VitaminsList";

function VitaminsContainer() {
  const [vitamins, setVitamins] = useState([]);

  async function getVitamins() {
    try {
      const responseVitamins = await axios.get(`${BASE_URL}vitamins`);
      setVitamins(responseVitamins.data);
    } catch (error) {
      console.log("Error: could not fetch vitamins data");
    }
  }

  useEffect(() => {
    getVitamins();
  }, []);
  return <div>{vitamins ? <VitaminsList allItems={vitamins} /> : <></>}</div>;
}

export default VitaminsContainer;
