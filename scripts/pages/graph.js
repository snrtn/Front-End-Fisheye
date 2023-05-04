//Mettre le code JavaScript lié à la page photographer.html

import fetchGraph from "../utils/fetchGraph.js";
import displayGraphHead from "./displayGraphHead.js";
import displayGraphProduct from "./displayGraphProduct.js";

const initGraph = async () => {
  const data = await fetchGraph();
  displayGraphHead(data);
  displayGraphProduct(data);
};

window.addEventListener("load", initGraph);
