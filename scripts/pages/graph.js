//Mettre le code JavaScript lié à la page photographer.html

import fetchGraph from "../utils/fetchGraph.js";
import displayGraphHead from "./displayGraphHead.js";
import displayGraphProduct from "./displayGraphProduct.js";
import idParams from "../utils/searchParams.js";

const initGraph = async () => {
  const data = await fetchGraph();
  displayGraphHead(data);

  let name = [];
  let arrProduct = [];

  for (let i = 0; i < data.photographers.length; i++) {
    if (data.photographers[i].id == idParams) {
      name.push(data.photographers[i].name);
    }
  }

  for (let i = 0; i < data.media.length; i++) {
    if (data.media[i].photographerId == idParams) {
      arrProduct.push(data.media[i]);
    }
  }

  displayGraphProduct(arrProduct, name);
};

window.addEventListener("load", initGraph);
