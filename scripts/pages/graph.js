//Mettre le code JavaScript lié à la page photographer.html
import fetchApp from "../utils/fetchApp.js";
import idParams from "../utils/searchParams.js";
import displayGraphHead from "./displayGraphHead.js";
import displayGraphProduct from "./displayGraphProduct.js";
const textPrice = document.querySelector(".textPrice");
const textLike = document.querySelector(".textLike");

const initGraph = async () => {
  const data = await fetchApp();

  let like = 0;
  let arrProduct = [];
  let name = [];
  let price = [];

  for (let i = 0; i < data.photographers.length; i++) {
    if (data.photographers[i].id == idParams) {
      name.push(data.photographers[i].name);
    }
  }

  for (let i = 0; i < data.photographers.length; i++) {
    if (data.photographers[i].id == idParams) {
      price.push(data.photographers[i].price);
    }
  }

  for (let i = 0; i < data.media.length; i++) {
    if (data.media[i].photographerId == idParams) {
      arrProduct.push(data.media[i]);
    }
  }

  for (let i = 0; i < data.media.length; i++) {
    if (data.media[i].photographerId == idParams) {
      like += data.media[i].likes;
    }
  }

  textPrice.innerHTML = `${price}€ / Jour`;
  textLike.innerHTML = `${like}`;

  displayGraphHead(data);
  displayGraphProduct(arrProduct, name);
};

window.addEventListener("load", initGraph);
