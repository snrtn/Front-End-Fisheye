"use strict";

// appeler js file
import displayGraphProduct from "./displayGraphProduct.js";

// Trier photographer page 
const displayGraphTrier = (arrProducts, name) => {

  // Popularité
  document.getElementById("handlePop").addEventListener("click", function () {
    arrProducts.sort((a, b) => b.likes - a.likes);
    displayGraphProduct(arrProducts, name);
  });

  // Date
  document.getElementById("handleDate").addEventListener("click", function () {
    arrProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    displayGraphProduct(arrProducts, name);
  });

  // Titre
  document.getElementById("handleAbc").addEventListener("click", function () {
    function SortArray(a, b) {
      if (a.title < b.title) {
        return -1;
      }

      if (a.title > b.title) {
        return 1;
      }

      return 0;
    }

    arrProducts.sort(SortArray);
    displayGraphProduct(arrProducts, name);
  });
};

export default displayGraphTrier;
