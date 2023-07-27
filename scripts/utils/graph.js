"use strict";

import fetchApp from "./fetchApp.js";
import idParams from "./searchParams.js";

import displayGraphHead from "../pages/displayGraphHead.js";
import displayGraphProduct from "../pages/displayGraphProduct.js";

const TEXTPRICE = document.querySelector(".textPrice");
const TEXTLIKE = document.querySelector(".textLike");

const initGraph = async () => {
  const DATA = await fetchApp();

  let like = 0;
  let arrProduct = [];
  let name = [];
  let price = [];

  for (let i = 0; i < DATA.photographers.length; i++) {
    // rechercher id
    if (DATA.photographers[i].id == idParams) {
      // push info dans name et price
      name.push(DATA.photographers[i].name);
      price.push(DATA.photographers[i].price);
    }
  }
  
  for (let i = 0; i < DATA.media.length; i++) {
    // rechercher id photographer
    if (DATA.media[i].photographerId == idParams) {
      // push info dans arrProduct et like
      arrProduct.push(DATA.media[i]);
      like += DATA.media[i].likes;
    }
  }

  TEXTPRICE.innerHTML = `${price}€ / Jour`;
  TEXTLIKE.innerHTML = `${like}`;

  displayGraphHead(DATA);
  displayGraphProduct(arrProduct, name);
};

window.addEventListener("load", initGraph);
