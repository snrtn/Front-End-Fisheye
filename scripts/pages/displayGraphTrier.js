"use strict";

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
    function SortArray(x, y) {
      if (x.title < y.title) {
        return -1;
      }

      if (x.title > y.title) {
        return 1;
      }

      return 0;
    }

    arrProducts.sort(SortArray);
    displayGraphProduct(arrProducts, name);
  });
};

export default displayGraphTrier;
