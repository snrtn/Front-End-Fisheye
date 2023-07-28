"use strict";

// appeler js file
import fetchApp from "./fetchApp.js";
import idParams from "./searchParams.js";
import displayGraphHead from "../pages/displayGraphHead.js";
import displayGraphProduct from "../pages/displayGraphProduct.js";

const initGraph = async () => {
  const DATA = await fetchApp();

  // récupérer des dom
  let textprice = document.querySelector(".textPrice");
  let textlike = document.querySelector(".textLike");

  // Enregistrer la valeur
  let like = 0;
  let arrProduct = [];
  let name = [];
  let price = [];

  // DATA.photographers
  for (let i = 0; i < DATA.photographers.length; i++) {

    // rechercher id
    if (DATA.photographers[i].id == idParams) {

      // push info dans name et price
      name.push(DATA.photographers[i].name);
      price.push(DATA.photographers[i].price);

    }
  }
  
  // DATA.media
  for (let i = 0; i < DATA.media.length; i++) {
    
    // rechercher id photographer
    if (DATA.media[i].photographerId == idParams) {

      // push info dans arrProduct et like
      arrProduct.push(DATA.media[i]);
      like += DATA.media[i].likes;

    }
  }

  // insérer la valeur dans html
  textprice.innerHTML = `${price}€ / Jour`;
  textlike.innerHTML = `${like}`;

  displayGraphHead(DATA);
  displayGraphProduct(arrProduct, name);
};

window.addEventListener("load", initGraph);
